var express = require("express");
var router = express.Router();
var ToDo = require("../models/to");
var Func = require("../Controler/fun");

router.get("/", function(req,res){
	res.redirect("/todo");
})

router.get("/todo/", Func.TodoFind )

router.get("/todo/new", function(req,res){
	res.render("new");
})

router.post("/todo", Func.TodoCreate);

module.exports = router;
