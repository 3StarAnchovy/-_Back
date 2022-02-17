const mysql = require("mysql");

const password = process.env.DB_PASSWORD;

const host = "localhost";

module.exports = {
	connection: mysql.createConnection({
		host: host,
		user: "jimin",
		password: '!Ghdwlals4009',
		database: "test",
	}),
};
