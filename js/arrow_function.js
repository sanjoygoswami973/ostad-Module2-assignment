// Step 1: Create the calculateSquare arrow function
const calculateSquare = (num) => num * num;

// Step 2: Call the calculateSquare function with different numbers
const number1 = 5;
const number2 = 8;
const number3 = 12;

const result1 = calculateSquare(number1);
const result2 = calculateSquare(number2);
const result3 = calculateSquare(number3);

// Step 3: Print the results to the console
console.log("Square of", number1, ":", result1);
console.log("Square of", number2, ":", result2);
console.log("Square of", number3, ":", result3);

// Output:
// Square of 5 : 25
// Square of 8 : 64
// Square of 12 : 144
