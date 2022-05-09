const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let body = req.body;
    console.log(body);
    res.json({'test': 'Success'});
});

module.exports = router;