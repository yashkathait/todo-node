var ToDo = require("../models/to");
var Edit = {};





Edit.TodoEdit = function(req , res){
	ToDo.findById(req.params.id , function(err , foundTodo){
		if(err){
			res.redirect("/todo")
		}else{
			res.render("update", {todo: foundTodo})
		}
	})
}

module.exports = Edit;