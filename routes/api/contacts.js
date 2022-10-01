const express = require("express");
const router = express.Router();
// const createError = require("http-errors");
const { NotFound } = require("http-errors");

const contactsOperations = require("../../models/contacts");

router.get("/", async (req, res, next) => {
  try {
    const contacts = await contactsOperations.listContacts();
    res.json({
      status: "success",
      code: 200,
      data: {
        result: contacts,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const contacts = await contactsOperations.getContactById(id);
    if (!contacts) {
      throw new NotFound(`Product with id=${id} not found`);
    }
    res.json({
      status: "success",
      code: 200,
      data: {
        result: contacts,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const contacts = await contactsOperations.addContact(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result: contacts,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:id", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
