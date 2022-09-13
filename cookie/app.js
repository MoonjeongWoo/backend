const express = require('express');
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cookieParser());

const cookieConfig = {
    httpOnly: true, 
    maxAge: 24*60*60*1000
};

app.get("/", (req, res) => {
    res.render("index" , {
        popup: req.cookies.popup
    });
})
app.post('/setcookie', (req, res) => {
    // 쿠키 생성.
    res.cookie('popup', 'hide', cookieConfig);
    res.send("쿠키 설정 성공");
});

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});