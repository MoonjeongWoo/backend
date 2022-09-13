const express = require("express");
const session = require("express-session");
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
  })
);

const info = { id: "a", pw: "1" };

app.get("/", (req, res) => {
  const user = req.session.user;
  // user = "a";
  // user = undefined;
  console.log(req.session);

  if (user != undefined) {
    res.render("index", { isLogin: true, user: user });
  } else {
    res.render("index", { isLogin: false });
  }
});
/*
const 로 유저 session을 변수로 지정 해준다음,
콘솔 로 session 찍기,
만약 유저가 undefined라면, index를 렌더링 해주고, 로그인을 하게 만들고, 
반대의 경우네는, 로그인을 안하게 만든다.
*/
app.get("/login", (req, res) => {
  res.render("login");
});

/* 
로그인 보여주기
 */
app.post("/login", (req, res) => {
  if (req.body.id == info.id && req.body.pw == info.pw) {
    req.session.user = req.body.id;
    res.redirect("/");
  } else {
    res.send(
      `<script>
                alert('로그인에 실패하셨습니다.');
                location.href='/';
            </script>`
    );
  }
});
/*
로그인창에서, 데이터를 받아와서, 
만약에 body에 id가 info의 id와 값이 같고, body의 pw와 info의 pw가 같다면 
user의 session은 bod의 id값을 할당(저장 ) 해준다.
그게 아니라면, 스크립트문 실행
 */
app.get("/logout", (req, res) => {
  const user = req.session.user;

  if (user != undefined) {
    req.session.destroy(function (err) {
      res.send(
        `<script>
                    alert('로그아웃 성공');
                    location.href='/';
                </script>`
      );
    });
  } else {
    res.send(
      `<script>
                alert('잘못된 접근입니다.');
                location.href='/';
            </script>`
    );
  }
});
/*
app.get으로 로그아웃 가져오고, 
만약 user가 undefined 라면, session을 detroyed(파괴)하고,
그게 아니라면, 잘못된 접근이라고 알람 떠놓기
 */
app.listen(8000, () => {
  console.log("Server : ", 8000);
});
