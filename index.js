import calBMI from './controllers/bmi-function.js';
import express from 'express';
import bmiRoutes from './routes/bmiRoute.js';

const app = express();
const PORT = 3000;

app.use('/api/bmi', bmiRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
