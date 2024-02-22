const router = require("express").Router();
const controller = require("../Controllers/email.controller.js");

router.post("/send_email", controller.send_email);

module.exports = router;
