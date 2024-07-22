const express =  require("express")

const app = express();

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("sample")
})

app.listen("9000",()=>{
    console.log(`server is runinng`);
})