const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const cors = require('cors');

const homeRouter = require('./routes/home');
const cctvRouter = require('./routes/cctv');
const weatherRouter = require('./routes/weather/weather')
const userRouter = require('./routes/User/User')
//const testRouter = require('./routes/test/test')

app.use(bodyParser.json());
app.use(cors());

//레거시
// app.use('/', (req, res) => {
// 	res.json({ test: "im home" });
// })

// app.get('/', (req, res) => {
// 	res.send('hihi');
// })

app.use('/',homeRouter);
app.use('/Cctv',cctvRouter);
app.use('/Weather',weatherRouter);
app.use('/User',userRouter);
//app.use('/Test',testRouter);
app.listen(port, () => {
	console.log(`듣고있어용 ${port}`);
})
