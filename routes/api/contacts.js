const express = require("express");

const router = express.Router();

const { contactsSchema } = require("../../schema");
const { validation, ctrlWrapper } = require("../../middlewares");

const { contactsCtrl: ctrl } = require("../../controllers");

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", validation(contactsSchema), ctrlWrapper(ctrl.add));

router.put("/:id", validation(contactsSchema), ctrlWrapper(ctrl.updateById));

router.delete("/:id", ctrlWrapper(ctrl.deleteById));

module.exports = router;
