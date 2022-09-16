const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = 8000;
app.set("view engine", "ejs");
app.get("/", function (req, res) {
  res.render("index");
});
io.on("connection", function (socket) {
  io.emit("notice", socket.id);
  socket.on("sendMsg", (msg) => {
    // msg 받아서 전체 클라이언트한테 전송
    io.emit("send", msg);
  });
  socket.on("disconnect", function (id) {
    io.emit("disconnected", socket.id);
  });
  socket.emit("socket_id", socket.id);
});

http.listen(port, function () {
  console.log("Server port : ", port);
});
