## BMI Calculator
A BMI calculator is a tool used to compute a person's Body Mass Index (BMI), which is a simple numerical value that helps assess whether someone has a healthy body weight for their height.

## Overview
This BMI Calculator API is a tool built using **Node.js** and **Express**. It allows users to calculate their Body Mass Index (BMI) using weight and height inputs and returns both the BMI value and the corresponding health category.

## What the Project Does
- Accepts height and weight as inputs (in metric or imperial units)
- Calculates BMI using the standard formula
- Returns both the BMI value and the health category (e.g., Normal weight, Overweight)
- Supports both GET and POST requests

## BMI Formula

- **Metric units**:  
  \[
  \text{BMI} = \frac{\text{weight (kg)}}{[\text{height (m)}]^2}
  \]

- **Imperial units**:  
  \[
  \text{BMI} = \frac{\text{weight (lb)} \times 703}{[\text{height (in)}]^2}
  \]

**Example**:  
If a person weighs 70 kg and is 1.75 m tall:  
BMI = 70 / (1.75 × 1.75) = **22.86**

---

## BMI Categories (WHO Standard)

| BMI Range      | Category       |
|----------------|----------------|
| Below 18.5     | Underweight    |
| 18.5 – 24.9    | Normal weight  |
| 25.0 – 29.9    | Overweight     |
| 30.0 and above | Obese          |



## Installation
To run the project locally:
1. **Clone the repository**:

```bash
git clone https://github.com/mo-renike/TC_BT_Group_2.git

```
2. **Navigate into the project directory**:
cd TC_BT_Group_2
3. **Install dependencies**:
```bash
npm install
```
4. **Start the development server:**
```bash
npm start






