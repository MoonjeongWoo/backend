const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());

/* 
cookie -> 
웹 사이트를 방문한 경우, 사용자의 컴퓨터에 저장하는 작은 기록 정보,
참조용으로 쓸 수가 있다.

feature -> 

name, value, 만료일, path 로 구성되어 있고,
클라이언트에 총 300개의 쿠키 저장 가능,
하나의 도메인당, 20개의 쿠기를 가질 수가 있따.
하나의 쿠키는 약 4KB까지 저장가능

movement-> 
사용자가 페이지를 방문,
서버가 쿠키를 생성
쿠키를 정보에 담아, 클라이언트에게 전송,
넘겨진 쿠키는 사용자가 로컬에 저장해 가지고 있다가, 
다시 서버에 요청할때 쿠키를 전송,

동일 사이트 재방문시, 쿠키가 있는 경우에 페이지와 함께 쿠키 전송


쿠키 보다 세션이 느림, 쿠키는 용량이 작아서 속도 빠름, 세션은 용량 제한 없어서 느림,
보안은 세션이 더 우수, 
세션은 브라우저 종료시, 만료되어 사라짐, 쿠키는 만료일 다 되면 사라짐,
세션은 서버의 자원 이용, 쿠키는 자원 없음
*/
const cookieConfig = {
  httpOnly: true,
  maxAge: 24 * 60 * 60 * 1000,
};
// maxAge
app.get("/", (req, res) => {
  res.render("index", {
    popup: req.cookies.popup,
  });
});
app.post("/setcookie", (req, res) => {
  // 쿠키 생성.
  res.cookie("popup", "hide", cookieConfig);
  res.send("쿠키 설정 성공");
});

app.listen(port, () => {
  console.log("Server Port : ", port);
});
