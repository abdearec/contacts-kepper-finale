const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const User = require("../models/User");
const Contact = require("../models/Contact");
const { check, validationResult } = require("express-validator");

// @route   GET api/contacts
// @desc    get all user contacts
// @access  Private
router.get("/", auth, async (req, res) => {
  /* res.send("get all contacts for user auth"); */
  try {
    const contacts = await Contact.find({
      user: req.user.id
    }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error !!");
  }
});

// @route   POST api/contacts
// @desc    add a new contact
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("name", "please enter name")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, phone, type } = req.body;
    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id
      });
      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error !!");
    }
  }
);

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
