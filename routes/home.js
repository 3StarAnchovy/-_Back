const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.json(
		{
			test: "im home2"
		}
	);
	console.log("home get!");
})

module.exports = router;
