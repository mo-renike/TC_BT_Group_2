import express from 'express';
import validateBMI from '../middleware/validateBMI.js'
import calBMI from "../controllers/bmi-function.js"

const router = express.Router();

// GET request to calculate BMI
const getBmi = (req, res) => {
  const { unit, weight, height } = req.query;
  const result = calBMI(unit, parseFloat(weight), parseFloat(height));
  if (result.error) {
    return res.status(400).json({ error: result.error });
  }

  res.json(result);
};

// POST request to calculate BMI
const postBmi = (req, res) => {
  const { unit, weight, height } = req.body;
  const result = calBMI(unit, parseFloat(weight), parseFloat(height));
  if (result.error) {
    return res.status(400).json({ error: result.error });
  }

  res.json(result);
};


router.get('/bmi', validateBMI, getBmi); // GET request to calculate BMI
router.post('/bmi', validateBMI, postBmi); // POST request to calculate BMI

export default router;
