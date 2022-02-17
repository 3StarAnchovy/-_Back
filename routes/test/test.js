const express = require("express");
const mysql = require("mysql");
const db = require("../../db/index");

const app = express();
app.set('port', 3000);

app.get("/messages", (req, res) => {
	db.connection.query(`SELECT * FROM testtable`, (err, results) => {
		if (err)
			console.log(err);
		res.send(results);
		console.log(results);
	});
});

app.listen(app.get("port"));
console.log("Listening on", app.get("port"));
