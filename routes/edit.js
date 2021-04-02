var express = require("express");
var router = express.Router();
var ToDo = require("../models/to");
var Func = require("../Controler/fun")

router.get("/todo/:id/edit", Func.TodoEdit )

router.put("/todo/:id" , Func.TodoUpdate)

module.exports = router;