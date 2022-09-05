var express = require("express");
// 익스프레스 사용하겠다
var controller = require("../controller/Cmain");
// 지금 내가 있는 위치에 한단계 올라가겠다
const router = express.Router();
//익스프레스 라우터 기능 사용하겠다
router.get("/", controller.main);
//app.get과 똑같은것, localhost:8000 하면 여기로 들어온다
router.post("/login", controller.login);

// =====================================================================

var controllerV = require("../controller/CVisitor");
// 예는 변수 선언 해주고 컨트롤러 에서 get, post를 해주겠다
router.get("/visitor", controllerV.visitor);
// 얘는 get 요청 변수에 컨트롤러에서 CVisitor를 써주겠다 -> 거기서 get요청을 하겠다. 그럼 컨트롤러로 간다잉
router.post("/visitor/post", controllerV.post_visitor);
// 얘는 post요첨 insert 문 post방식으로
router.post("/visitor/delete", controllerV.delete_visitor);
// 얘는 post로 delete 문
module.exports = router;
//모듈로 사용하겠다는 선언
