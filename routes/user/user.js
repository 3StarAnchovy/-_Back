const express = require('express');
const router = express.Router();
const mysql = require("mysql");
const db = require("../../db/index");


router.post('/signup', (req, res) => {
	const body = req.body;
	console.log(body);
	const parms = [body.id, body.name, body.password, body.email, 0];
	var sql = `INSERT INTO user VALUES (?,?,?,?,?)`;
	db.connection.query(sql, parms, (err, results) => {
		if (err) console.log(err);
		else res.send(200);
	})
	console.log("User get!");
})

module.exports = router;
