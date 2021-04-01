var ToDo = require("../models/to");
var del = {};

del.TodoDelete = function(req , res){
	ToDo.findByIdAndRemove(req.params.id , function(err){
		if(err){
			alert("Error")
		}else{
			res.redirect("/todo");
		}
	})
}

module.exports = del;