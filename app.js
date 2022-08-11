const express = require("express");
const app = express();
app.set("view engine", "ejs")
app.use("/static", express.static("static"))
const port = 8000;
// localhost:8000/
app.get("/",(req,res)=>{
    res.render("test");
})
app.get("/test02",(req,res)=>{
    res.render("test02");
})
app.get("/test03",(req,res)=>{
    res.render("test03");
})
app.get("/test04",(req,res)=>{
    var person =[
        {nmae: "문정우" , gender:"male"}
    ]
    res.render("test",{person: person});
})

app.listen(port, ()=>{
    console.log("server open: ", port);
})