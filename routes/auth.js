const express = require("express");
const router = express.Router();

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get("/", (req, res) => {
  res.send("info user auth");
});
// @route   POST api/auth
// @desc    auth user & get token
// @access  Public
router.post("/", (req, res) => {
  res.send("user login & token");
});

module.exports = router;
