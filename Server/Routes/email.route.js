const router = require("express").Router();
const controller = require("../Controllers/email.controller.js");

router.post("/send_email", controller.send_email);
router.post("/send_newsletter", controller.send_newsletter);
module.exports = router;
