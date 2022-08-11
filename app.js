const express = require("express");
const app = express();
const port = 8000;
// localhost:8000 , 3000 8080 많이 사용함/
app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/hello.html");
})
app.listen(port, ()=>{
    console.log("server open: ", port);
})