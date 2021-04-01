var ToDo = require("../models/to");
var Create = {};

Create.TodoCreate = function(req , res){
	ToDo.create(req.body.todo , function(err , newtodo){
		if(err){
			res.render("new");
		}else{
			res.redirect("/todo");
		}
	})
}

module.exports = Create;