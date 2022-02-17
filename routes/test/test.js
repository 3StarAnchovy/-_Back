const express = require("express");
const mysql = require("mysql");
const db = require("../../db/index");

const app = express();
app.set('port', 3000);

app.get("/messages", (req, res) => {
	db.connection.query(`SELECT * FROM hello`, (err, results) => {
		if (err)
			console.log(err);
		res.send(results);
		console.log(results);
	});
});

app.get("/users", (req, res) => {
	db.connection.query(`SELECT * FROM users`, (err, results) => {
		if (err)
			console.log(err);
		res.send(results);
	});
});
const asdf;

app.listen(app.get("port"));
console.log("Listening on", app.get("port"));
