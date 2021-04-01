var ToDo = require("../models/to");
var Upd = {};

Upd.TodoUpdate = function(req, res){
	ToDo.findByIdAndUpdate(req.params.id , req.body.todo ,function(err , updateTodo) {
		if(err){
			res.redirect("/todo/:id/edit")
		}else{
			res.redirect("/todo")
		}
	})
}

module.exports = Upd;