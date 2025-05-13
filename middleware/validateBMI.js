function validateBMI(req, res, next) {
    const source = req.method === 'GET' ? req.query : req.body;
    const { unit, weight, height } = source;

    // This checks if both fields are present 
    if (!unit || !weight || !height) {
        return res.status(400).json({ error: "Weight and Height values are required." })
    }

    // This checks if the inputted values are numbers
    // if (typeof weight !== "number" || typeof  height !== "number") {
    if (isNaN(weight) || isNaN(height)) {
        return res.status(400).json({ error: "Weight and height inputted values must be number." })
    }

    // This checks if the inputted values are positive 
    if (parseFloat(weight) <= 0 || parseFloat(height) <= 0) {
        return res.status(400).json({ error: "Weight and height inputted values must be positive." })
    }

    if (unit !== 'metric' && unit !== 'imperial') {
        return res.status(400).json({ error: "Unit must be either 'metric' or 'imperial'." });
    }
    //When all checks are passed it moves to next
    next();
}

export default validateBMI;