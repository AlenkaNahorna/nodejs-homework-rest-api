const express = require("express");

const { validation, ctrlWrapper } = require("../../middlewares");
const { schemas } = require("../../models/user");
const ctrl = require("../../controllers/auth");

const router = express.Router();

router.post(
  "/register",
  validation(schemas.registerSchema),
  ctrlWrapper(ctrl.register)
);

router.post("/login", validation(schemas.loginSchema), ctrlWrapper(ctrl.login));

module.exports = router;
