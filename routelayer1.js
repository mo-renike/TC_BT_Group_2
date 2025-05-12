const app = express();

// BMI Calculation function
export function calculateBMI(weight, height) {
    const bmiRange = weight/(height**2);
    return parseFloat(bmiRange.toFixed(1));// round to 1 decimal place
}

// Function to get BMI category
export function getCategory(bmiRange) {
    switch (bmiRange) {
        case "bmiRange < 18.5":
             return "Underweight";
             break;
        case "bmiRange <= 24.9":
            return "Normal weight";
            break;
        case "bmiRange <= 29.9":
             return "Overweight";
             break;
            default:
            return "Obese";
    }
};

// This end point is to fetch the query
app.get ('/find', (req, res) => {
    const weight = parseFloat(req.query.weight);
    const height = parseFloat(req.query.height);


    const bmiRange = calculateBMI(weight, height);
    const category = getCategory(bmiRange);

    return res.json({weight, height, bmiRange, category});
});
