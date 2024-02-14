const express = require("express");
const router = express.Router();
const controller = require("../Controllers/Product");

router.post("/addProduct", controller.addProduct);
router.post("/deleteProduct", controller.deleteProduct);
router.post("/deleteCart", controller.deleteCart);

module.exports = router;
