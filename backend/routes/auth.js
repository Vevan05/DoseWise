const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ userId: user.id, isVendor: user.isVendor }, "your_jwt_secret", { expiresIn: "1h" });

        res.json({ token, user: { name: user.name, email: user.email, isVendor: user.isVendor } });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});


router.post("/register", async (req, res) => {
    const { name, email, password, isVendor } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        user = new User({
            name,
            email,
            password: hashedPassword,
            isVendor: isVendor || false
        });

        await user.save();

        const token = jwt.sign({ userId: user.id, isVendor: user.isVendor }, "your_jwt_secret", { expiresIn: "1h" });

        res.json({ token, user: { name: user.name, email: user.email, isVendor: user.isVendor } });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});


const authenticateToken = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Access denied" });
    }

    try {
        const decoded = jwt.verify(token.split(" ")[1], "your_jwt_secret");
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid token" });
    }
};

router.get("/profile", authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});


module.exports = router;
