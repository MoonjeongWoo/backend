const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = 8000;
app.set("view engine", "ejs");
app.get("/", function (req, res) {
  res.render("index");
});

var client_list = {};

io.on("connection", function (socket) {
  // io.emit("notice", socket.id);
  socket.on("sendMsg", (msg) => {
    // msg 받아서 전체 클라이언트한테 전송
    io.emit("send", msg);
  });

  socket.on("setNick", function (nick) {
    if (Object.values(client_list).indexOf(nick) > -1) {
      socket.emit("err", "이미 있는 이름이유");
    } else {
      client_list[socket.id] = nick;
      // console.log(client_list);
      io.emit("notice", nick);
      socket.emit("entrySuccess", "입장성공");
    }
    // 딕셔너리에서 value값만 갖고 오기
    //배열에서 원하는 값의 존재 여부 함수 => arr.indexOf()
  });
});

http.listen(port, function () {
  console.log("Server port : ", port);
});
