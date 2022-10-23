const express = require("express");

const router = express.Router();

const { schemas } = require("../../models/contact");
const { validation, ctrlWrapper, authenticate } = require("../../middlewares");

const { contactsCtrl: ctrl } = require("../../controllers");

router.get("/", authenticate, ctrlWrapper(ctrl.getAll));

router.get("/:id", authenticate, ctrlWrapper(ctrl.getById));

router.post("/", authenticate, validation(schemas.add), ctrlWrapper(ctrl.add));

router.put(
  "/:id",
  authenticate,
  validation(schemas.add),
  ctrlWrapper(ctrl.updateById)
);

router.patch(
  "/:id/favorite",
  authenticate,
  validation(schemas.updateFavorite),
  ctrlWrapper(ctrl.updateFavoriteContact)
);

router.delete("/:id", authenticate, ctrlWrapper(ctrl.deleteById));

module.exports = router;
