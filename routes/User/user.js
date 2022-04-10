const request = require('request');
const express = require('express');
const mysql = require("mysql");
const db = require("../../db/index");
const router = express.Router();
const user = require('./loginAction');
const encoding = require('./encodingModule');
const session = require('express-session');

router.post('/SignUp', (req, res) => {
    var body = req.body;
    console.log(body);
    const hasedData = encoding.encryptPassword(body.pw)
        .then((hasedData) => {
            console.log(hasedData.hased);
            var params = [body.id, body.name, hasedData.hashed, body.email, 0, hasedData.salt];
            var sql = 'INSERT INTO user VALUES (?, ?, ?, ?, ?, ?)';
            db.connection.query(sql, params, (err, results) => {
                if (err) {
                    console.log(err);
                    res.json({ 'result': 'false' });
                }
                else
                    res.json({ 'result': 'true' });
                console.log(results);
            });
        })
    console.log(hasedData);
});

router.post('/Login', (req, res) => {
    let body = req.body;
    console.log(body);
    loginCondition = (loginData) => {
        req.session.displayName = body.id;
        //console.log(req.session);
        // const sql = 'SELECT session_id FROM sessions WHERE data = ?';
        // let params = ['{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"displayName":"test12345"}'];
        // db.connection.query(sql, params, (err, results) => {
        //     if (err) console.log(err);
        //     else {
        //         console.log('session test');
        //         console.log(results[0].session_id);
        //     }
        // });
        console.log(req.sessionID);
        res.json({ 'result': loginData, 'displayName': body.id, 'sessionInfo': req.session.displayName });
    };
    user.checkUser(body, loginCondition);
});

router.post('/Logout', (req, res) => {
    req.session.destroy(() => {
        req.session;
    });
    res.json({ 'result': 'true' });
});

module.exports = router;