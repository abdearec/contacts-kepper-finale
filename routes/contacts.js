const express = require("express");
const router = express.Router();

// @route   GET api/contacts
// @desc    get all user contacts
// @access  Private
router.get("/", (req, res) => {
  res.send("get all contacts for user auth");
});

// @route   POST api/contacts
// @desc    add a new contact
// @access  Private
router.post("/", (req, res) => {
  res.send("add a new contact");
});

// @route   PUT api/contacts:id
// @desc    update contact
// @access  Private
router.put("/:id", (req, res) => {
  res.send("update contact");
});

// @route   DELETE api/contacts:id
// @desc    delete contact
// @access  Private
router.delete("/:id", (req, res) => {
  res.send("delete contact");
});

module.exports = router;
