var express = require("express");
var controller = require("../controller/Cmain");
const router = express.Router();

router.get("/", controller.main);
router.post("/login", controller.login);

var controllerV = require("../controller/CVisitor");
router.get("/visitor", controllerV.visitor);
router.post("/visitor/post", controllerV.post_visitor);
router.post("/visitor/delete", controllerV.delete_visitor);

router.get("/get", controller.get_test);
router.post("/get/ajax", controller.test);
router.get("/get/fetch", controller.testttt);

module.exports = router;
