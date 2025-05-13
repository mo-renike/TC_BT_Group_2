function calBMI(unit, weight, height) {


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