const express=require('express')
const app=express()
const path = require('path');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//link public file
app.use(express.static(path.join(__dirname, 'public')))

//ejs link basically that is html
app.set('view engine','ejs')

app.get("/",function(req,res){
    res.render("index")
});


//dynamic routing  by using :
app.get("/:username",function(req,res){
    res.send("hello");
});

app.listen(3000,function(){
    console.log("its running")
});
