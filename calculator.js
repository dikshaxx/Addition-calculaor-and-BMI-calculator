const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/add.html");
});
app.post("/",function(req,res){
  var num1=parseFloat(req.body.N1);
    var num2=parseFloat(req.body.N2);
    var result=num1+num2;
    res.send("<h1> Addition of two numbers is"+result+" .</h1>");
});
 app.get("/bmicalculator",function(req,res){
   res.sendFile(__dirname+"/bmiCalculator.html");
 });

 app.post("/bmicalculator",function(req,res){
   var wgt=parseFloat(req.body.weight);
   var hgt=parseFloat(req.body.height);
   var result=wgt/(hgt*hgt);
   res.send( "<h1>Your BMI is "+result+" .</h1>");
 });
 app.listen(3000, function(){
   console.log("Server running");
 });
