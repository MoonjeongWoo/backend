const express = require("express");
const app = express();
const port = 8000;
app.set("view engine", "ejs");

app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const router = require("./routes");
app.use("/", router);
app.use("/login", router);
app.use("/Visitor", router);

// require -> 모듈 불러오기
//8000번으로 들어왔을때 라우트 연결 하겠다.

app.listen(port, () => {
  console.log("server open", port);
});
