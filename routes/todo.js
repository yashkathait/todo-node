var express = require("express");
var router = express.Router();
var ToDo = require("../models/to");
var Find = require("../Control/Find");
var Create = require("../Control/Create");

router.get("/", function(req,res){
	res.redirect("/todo");
})

router.get("/todo/", Find.TodoFind )

router.get("/todo/new", function(req,res){
	res.render("new");
})

router.post("/todo", Create.TodoCreate);

module.exports = router;
