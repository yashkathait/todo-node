var mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
	text: String,
	day:  String,
});


module.exports = mongoose.model("ToDo", todoSchema); 