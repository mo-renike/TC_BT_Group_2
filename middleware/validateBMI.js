function validateBMI (req, res, next) {
    const { weight, height } = req.body;

    // This checks if both fields are present 
    if (!weight || !height) {
        return res.status(400).json({ error: "Weight and Height values are required." })
    }

    // This checks if the inputed values are numbers
    if (typeof weight !== "number" || typeof  height !== "number") {
        return res.status(400).json({ error: "Weight and height inputed values must be number." })
    }

    // This checks if the inputed values are positive 
    if (weight <= 0 || height <=0) {
        return res.status(400).json({ error: "Weight and height inputed values must be positive." })
    }

    //When all checks are passed it moves to next
    next();
}

module.exports = validateBMI;