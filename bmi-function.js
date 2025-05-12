function calBMI(unit, weight, height) {
  // Validate all the input types i.e weight and height
  if (typeof weight !== 'number' || typeof height !== 'number' ||
      isNaN(weight) || isNaN(height)) {
    return { error: 'Weight and height must be valid numbers.' };
  }
  // Validate to make sure there is no negative number
  if (weight <= 0 || height <= 0) {
    return { error: 'Weight and height must be greater than zero.' };
  }

  // Calculation of the BMI in either metric or imperial unit
  let bmi;
  if (unit === 'metric') {
    // kg / m²
    bmi = weight / (height * height);
  } else if (unit === 'imperial') {
    // 703 × lbs / in²
    bmi = (703 * weight) / (height * height);
  } else {
    return { error: "Unit must be either 'metric' or 'imperial'." };
  }

  //  Calculate the BMI based on WHO categories
  let category;
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 25.0) {
    category = 'Normal weight';
  } else if (bmi < 30.0) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }

  // Round BMI to two decimal
  bmi = parseFloat(bmi.toFixed(2));
  // Return the value of BMI and the category they stand for 
  return {
    bmi: bmi,
    category: category
  };
}


export default calBMI;