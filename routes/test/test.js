const express = require("express");
const mysql = require("mysql");
const db = require("../../db/index");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('port', 3000);

app.get("/messages", (req, res) => {
	db.connection.query(`SELECT * FROM hello`, (err, results) => {
		if (err)
			console.log(err);
		res.send(results);
		console.log(results);
	});
});

app.get("/insert", (req, res) => {
	console.log(req.body);
	var body = req.body;
	var params = [body.id, body.name, body.pw, body.email, body.right];
	var sql = `INSERT INTO user VALUES (?,?,?,?,?)`;
	db.connection.query(sql,params,(err, results) => {
		if (err) console.log(err);
		else
			res.send("okok");
	})
})

app.listen(app.get("port"));
console.log("Listening on", app.get("port"));
