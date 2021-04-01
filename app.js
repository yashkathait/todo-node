var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var ToDo = require("./models/to");

var todoRoute = require("./routes/todo")
var editRoute = require("./routes/edit")
var delRoute = require("./routes/del")

app.use(express.static("public"))
mongoose.connect("mongodb://localhost/ToDoList");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.use(todoRoute);
app.use(editRoute);
app.use(delRoute);

// ToDo.create({
// 	text: "2nt todo",
// 	day : "Sunday"
// });


app.listen(3000 , process.env.IP , function(req , res){
    console.log("server started");
});  
 