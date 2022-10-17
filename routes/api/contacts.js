const express = require("express");

const router = express.Router();

const { schemas } = require("../../models/contact");
const { validation, ctrlWrapper } = require("../../middlewares");

const { contactsCtrl: ctrl } = require("../../controllers");

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", validation(schemas.add), ctrlWrapper(ctrl.add));

router.put("/:id", validation(schemas.add), ctrlWrapper(ctrl.updateById));

router.patch(
  "/:id/favorite",
  validation(schemas.updateFavorite),
  ctrlWrapper(ctrl.updateFavoriteContact)
);

router.delete("/:id", ctrlWrapper(ctrl.deleteById));

module.exports = router;
