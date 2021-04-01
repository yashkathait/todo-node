var express = require("express");
var router = express.Router();
var ToDo = require("../models/to");
var Update = require("../Control/Update")
var Edit = require("../Control/Edit")

router.get("/todo/:id/edit", Edit.TodoEdit )

router.put("/todo/:id" , Update.TodoUpdate)

module.exports = router;