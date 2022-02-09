const { json } = require('body-parser');
const request = require('request');


const getWeatherData = (req,callback) => {
	const url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst';
	let queryParams = '?' + encodeURIComponent('serviceKey') + '=' +
		'hdzJlamqcI9RadMq1bNFB06T1dXVd5zzs6/dN50zUW2fpJMTfxlgs8yI54BIstOyE3VXPC9Hw1uCb7yD7VblVA=='; /*Service Key*/
	queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
	queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000'); /**/
	queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /**/
	queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent(req.body.date); /**/
	queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent(req.body.time); /**/
	queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent(req.body.latitude); /**/
	queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent(req.body.longitude); /**/
	console.log(url + queryParams);
	request(
		{
			url : url + queryParams,
			method : 'GET',
			headers : {
				'Accept': 'application/json'
			}
		}, function(err,response,body)
		{
			console.log(body);
			callback({
					data : body
			})
		}
	)
}

module.exports = getWeatherData;
