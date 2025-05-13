
import express from 'express';
import bmiRoutes from './routes/bmi-route.js';

const app = express();
const PORT = 3000;

app.use('/', bmiRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
