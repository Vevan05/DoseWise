const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);


mongoose.connect("mongodb://localhost:27017/myDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const PORT = 5000;
app.listen(PORT);
