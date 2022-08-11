const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/static",express.static('static'));

const port = 8000; 
// 3000, 8080 -> 주로 많이 사용함
// ip:8000/
// server 끌때는 컨트롤 v
app.get("/",(req,res)=>{
    res.render("test");
})
app.listen(port, ()=>{
    console.log("server open:", port)
})

