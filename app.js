const express = require("express");
const multer = require("multer");
const app = express();
// 파일 제출할때 파일이 저장되는 공간
// dest : uploads
const path = require("path");
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      console.log(req.body.id);
      const ext = path.extname(file.originalname);
      done(null, path.basename(req.body.id) + Date.now() + ext);
      //얘들은 파일 이름 업로드한 이름 그대로 하는것
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
  //얘는 파일 용량 제한
});

app.set("view engine", "ejs");
app.use("/static", express.static("static"));
app.use("/uploads", express.static("uploads"));
//이미지 업로드 할때 미들웨어 제어장치

const port = 8000;
//포트 번호 지정하기
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("main");
});
// 파일 post하기
// post("/") <- 요놈은 form 태그 action하고 같은놈 ,
// upload.single은 form태그 name하고 같은 놈,
//
app.post("/upload", upload.single("userfile"), (req, res) => {
  var data = {
    name: req.body.name,
    age: req.body.age,
    user_ID: req.body.user_ID,
  };
  console.log(data);
  console.log(req.body);
  console.log(req.file);
  res.send(req.file.filename);
});

app.listen(port, () => {
  console.log("server open: ", port);
});
