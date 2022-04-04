const request = require('request');
const express = require('express');
const mysql = require("mysql");
const db = require("../../db/index");
const router = express.Router();
const user = require('./loginAction');
const encoding = require('./encodingModule');

router.post('/SignUp', (req, res) => {
    var body = req.body;
    console.log(body);
    const hasedData = encoding.encryptPassword(body.pw)
        .then((hasedData) => {
            console.log(hasedData.hased);
            var params = [body.id, body.name, hasedData.hashed, body.email, 0, hasedData.salt];
            var sql = 'INSERT INTO user VALUES (?, ?, ?, ?, ?, ?)';
            db.connection.query(sql, params, (err, results) => {
                if (err) console.log(err);
                console.log(results);
            });
        })
    console.log(hasedData);
});

router.post('/Login', (req, res) => {
    var body = req.body;
    console.log(body);
    loginSuccess = () => res.json({ 'result': 'true' });
    loginFalse = () => res.status(401).send({ 'result': 'false' });
    user.checkUser(body, loginSuccess, loginFalse);
});

module.exports = router;
//dfkdfjdf