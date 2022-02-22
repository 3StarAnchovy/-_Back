const request = require('request');
const express = require('express');
const mysql = require("mysql");
const db = require("../../db/index");
const router = express.Router();

router.post('/SignUp', (req, res) => {
    var body = req.body;
    console.log(body);
    var params = [body.id, body.name, body.pw, body.email, 0];
    var sql = 'INSERT INTO user VALUES (?, ?, ?, ?, ?)';
    db.connection.query(sql, params, (err, results) => {
        if(err) console.log(err);
        console.log(results);
    });
});

module.exports = router;