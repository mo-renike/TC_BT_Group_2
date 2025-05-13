import express from 'express';
import validateBMI from '../middleware/validateBMI.js'
import calBMI from "../controllers/bmi-function.js"

const router = express.Router();

     const getBmi = (req, res) => {
    const { unit, weight, height } = req.query;
    const result = calBMI(unit, parseFloat(weight), parseFloat(height));
    res.json(result);
  };

router.get('/bmi',validateBMI, getBmi);


export default router;
