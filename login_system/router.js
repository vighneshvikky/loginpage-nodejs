

const express = require("express");

const router = express.Router();

router.get('/',(req,res) => {
      if(req.session.user){
        res.render("dashboard",{text:"Login System"});
      }else{
        res.render("index",)
      }
       })


const userName = "admin"

const password ="123456";



router.post('/dashboard',(req,res) => {
    console.log(req.body)
    if(req.body.name == userName && req.body.password == password){
        req.session.user = req.body.name;
         res.render("dashboard")
    }else{
        
     // res.send(`<script>alert("Invalid Entry")</script>`)
     res.render("index",{msg:"Invalid Entry"})
    
    }
    
})



router.get("/logout",(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            res.render(err)
        }else{
           
            res.redirect("/")
        }
        
    })
})




 module.exports = router;
