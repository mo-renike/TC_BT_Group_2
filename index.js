import express from 'express';
const bmiRoute = require("./routes/bmi-route")
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
	res.send('Welcome to our express.js server');
});
app.get('/home', (req, res) => {
	res.send('Welcome home');
});
app.get('/friend', (req, res) => {
	res.send('Hello friend');
});

app.use("/bmi", bmiRoute )
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
