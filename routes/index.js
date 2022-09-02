var express = require("express");
// 익스프레스 사용하겠다
var controller = require("../controller/Cmain");
// 지금 내가 있는 위치에 한단계 올라가겠다
const router = express.Router();
//익스프레스 라우터 기능 사용하겠다
router.get("/", controller.main);
router.post("/login", controller.login);

// =====================================================================

var controllerV = require("../controller/CVisitor");
router.get("/visitor", controllerV.visitor);
//app.get과 똑같은것, localhost:8000 하면 여기로 들어온다
module.exports = router;
//모듈로 사용하겠다는 선언
