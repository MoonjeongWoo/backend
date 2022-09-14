const express = require("express");
const app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

io.on("connection", function (socket) {
  //socket connection 드가자
  io.emit("notice", `${socket.id} 가 입장했습니다.`);
  //   console.log("socket-sever");

  socket.on("sendme", function (msg) {
    console.log(`${socket.id} : ` + msg);
    io.to(socket.id).emit("resend", "안녕하세요");
  });

  //on하고 나서 이벤트 명, function은 이벤트가 들어 왔을때 할 기능
  //   socket.on("welcome", function (msg) {
  //     console.log(msg);
  //   });
  // 클라이언트에서 보낸 메세지 서버가 받고 보여주기

  //   socket.emit("welcome to client", { name: "kdt", msg: "해윙~!" });
  //서버에서 클라이언트에게 메세지 보내기
  //io.emit() -> 얘는 서버 소켓에 연결된 모든 사람에게 정보보내기

  //   socket.on("stupid", function (msg) {
  //     console.log(msg);
  //     socket.emit("stupid", msg);
  //   });
  //   socket.on("dumb", function (msg) {
  //     console.log(msg);
  //     socket.emit("dumb", msg);
  //   });
  //   socket.on("dog", function (msg) {
  //     console.log(msg);
  //     socket.emit("dog", msg);
  //   });

  // 이벤트가 동작하는 시간 -> 새로고침 해봅시다
  // socket.on
  // emit() 전송 하는거
  // on() 받는거
}); // 소켓 관리는 얘가 다함

http.listen(8000, function () {
  console.log("server :", 8000);
});
