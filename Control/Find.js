var ToDo = require("../models/to");
var find = {};

find.TodoFind = function(req , res){
	ToDo.find({}, function(err , ToDos){
		if(err){
			console.log("Error");
		}else{
			res.render("home" , {ToDos: ToDos});
		}
	}).limit(3)
}

module.exports = find;