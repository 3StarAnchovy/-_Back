const request = require('request');
const express = require('express');
const getWeatherData = require('./getWeatherData');
const router = express.Router();



router.post('/', (req, res) => {
	var weatherData;
	getWeatherData(req, ({data} = {}) =>
		{
			return (res.json(data));
		});
	// const url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst';
	// let queryParams = '?' + encodeURIComponent('serviceKey') + '=' +
	// 	'hdzJlamqcI9RadMq1bNFB06T1dXVd5zzs6/dN50zUW2fpJMTfxlgs8yI54BIstOyE3VXPC9Hw1uCb7yD7VblVA=='; /*Service Key*/
	// queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
	// queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000'); /**/
	// queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /**/
	// queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent(req.body.date); /**/
	// queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent(req.body.time); /**/
	// queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent(req.body.latitude); /**/
	// queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent(req.body.longitude); /**/

	// fetch(url + queryParams,
	// 	{
	// 		headers:
	// 		{
	// 			'Accept': 'application/json'
	// 		}
	// 	}).then(res => res.json()).then(data => {
	// 		if (data.response.header.resultCode == '00') {
	// 			//console.log(data)
	// 			weatherData = data;
	// 		}
	// 	})
	console.log(req.body);
	console.log("weather get!");

})

module.exports = router;
