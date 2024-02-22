const router = require("express").Router();
const controller = "../Controllers/admin";

router.post("/adminregister", controller.adminRegister);
router.post("/adminlogin", controller.adminLogin);

module.exports = router;
