require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dns = require("dns");
const connectDB = require("./config/db");

const app = express();
dns.setServers(["8.8.8.8", "8.8.4.4"]);

// middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

// DB
connectDB();
const test = require("./routes/auth.route");
console.log(test);

// routes
app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/complaints", require("./routes/complaint.route"));


// start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});