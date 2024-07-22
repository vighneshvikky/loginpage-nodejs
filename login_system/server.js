

const express = require('express');

const app = express();

const router = require("./router")
const session = require('express-session');//to store user data

const nocache = require('nocache');

const bodyParser = require('body-parser')

const port = 5656;
//this is a comment

 app.use(nocache());
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({ extended: true }))
 app.use(session({
    secret:"ftygvh!>?",
    saveUninitialized:true,
    resave:false,
}))
app.set("view engine","ejs")

app.use('/',router)

app.listen(port,() => {
    console.log(`Server is running on the http://localhost:${port}`)
})


