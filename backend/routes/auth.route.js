const express = require("express");
const router = express.Router();

// ✅ safer import (NO destructuring)
const authController = require("../controllers/auth.controller");

// ✅ debug (temporary)
console.log("AUTH:", authController);

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;