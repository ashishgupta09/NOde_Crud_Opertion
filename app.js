const express=require("express");
const mongoose=require("mongoose");
const url ="mongodb://localhost/AlienDBex";

const app=express();
mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection;

app.use(express.json())

const route=require("./route/router");
app.use('/Aliens',route);


con.on('open',function(){
	console.log("connected....")
})

app.listen(7000,function(){
	console.log("server connected");
})