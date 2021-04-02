var ToDo = require("../models/to");
var func = {};

func.TodoFind = function(req , res){
	ToDo.find({}, function(err , ToDos){
		if(err){
			console.log("Error");
		}else{
			res.render("home" , {ToDos: ToDos});
		}
	}).limit(3)
}

func.TodoEdit = function(req , res){
	ToDo.findById(req.params.id , function(err , foundTodo){
		if(err){
			res.redirect("/todo")
		}else{
			res.render("update", {todo: foundTodo})
		}
	})
}

func.TodoCreate = function(req , res){
	ToDo.create(req.body.todo , function(err , newtodo){
		if(err){
			res.render("new");
		}else{
			res.redirect("/todo");
		}
	})
}

func.TodoUpdate = function(req, res){
	ToDo.findByIdAndUpdate(req.params.id , req.body.todo ,function(err , updateTodo) {
		if(err){
			res.redirect("/todo/:id/edit")
		}else{
			res.redirect("/todo")
		}
	})
}

func.TodoDelete = function(req , res){
	ToDo.findByIdAndRemove(req.params.id , function(err){
		if(err){
			alert("Error")
		}else{
			res.redirect("/todo");
		}
	})
}

module.exports = func;