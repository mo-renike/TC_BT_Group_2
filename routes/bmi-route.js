const express = require('express');
const router = express.Router();

// const { calculateBmiGet } = require('../controllers/bmiController');

router.get('/bmi',() => {
    console.log("bmiRoute")
})


export default router;
