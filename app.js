const express = require("express");
const multer = require("multer");
const app = express();
// 파일 제출할때 파일이 저장되는 공간
// dest : uploads
const upload = multer({
  dest: "uploads/",
});

app.set("view engine", "ejs");
app.use("/static", express.static("static"));

const port = 8000;

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
  console.log(req.body);
  console.log(req.file);
  res.send("업로드성공했어요!");
});

app.listen(port, () => {
  console.log("server open: ", port);
});
