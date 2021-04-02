var express = require("express");
var router = express.Router();
var ToDo = require("../models/to");
var Func = require("../Controler/fun")

router.get("/todo/:id/delete", Func.TodoDelete)

module.exports = router;