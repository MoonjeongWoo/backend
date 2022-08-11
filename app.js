const express = require("express");
const app = express();

const port = 8000; 
// 3000, 8080 -> 주로 많이 사용함
// ip:8000/
app.get("/",(req,res)=>{
    res.send("hello");
})
app.listen(port, ()=>{
    console.log("server open:", port)
})

