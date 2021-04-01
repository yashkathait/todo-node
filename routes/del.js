var express = require("express");
var router = express.Router();
var ToDo = require("../models/to");
var Remove = require("../Control/Delete")

router.get("/todo/:id/delete", Remove.TodoDelete)

module.exports = router;