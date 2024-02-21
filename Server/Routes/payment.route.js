const router = require("express").Router();
const controller = require("../Controllers/payment.controller.js");

router.post("/create-checkout-session", controller.create_checkout_session);
router.get("/checkout-session", controller.checkout_session);

module.exports = router;
