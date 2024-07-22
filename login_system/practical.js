const express = require("express");

const app = express();

app.set("view engine","ejs");

const port = 5999;

app.get("/",(req,res) => {
    res.render("sample");
})

app.post("/logout",(req,res)=>{
    res.redirect("dashboard")
})

app.listen(port,(req,res)=>{
    console.log("server is runinng on the http://localhost:5999");
})

