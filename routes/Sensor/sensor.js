const express = require('express');
const router = express.Router();
const db = require("../../db/index");

router.post('/', (req, res) => {
    let body = req.body;
    console.log(body);

    //body.id, body.ec_value, body.tem, body.hum, body.water_level
    const params = [body.id, body.ec_value, body.tem, body.hum, body.water_level,];
    const sql = 'INSERT INTO sensor_value VALUES (?,?,?,?,?,now())'
    db.connection.query(sql,params, (err, results) =>
    {
        if(err)
        {
            console.log(err);
            res.json({'result' : 'false'});
        }
        else
            res.json({'result' : 'true'});
        console.log(results);
    })
});

module.exports = router;
