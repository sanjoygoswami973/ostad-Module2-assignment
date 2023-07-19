
/* ===============Question1================*/
// Snippet 1:

const add = (a, b) => {
    return a + b;
};

const result1 = add(3, 4);
console.log(result1);

//   The value of result1 will be 7

/* ===============Question2================*/
// Snippet 2:
const greet = (name) => {
    return {name};
  };
  
  const message = greet("Alice");
  console.log(message);
  
  //  The value of the message will be an object: { name: "Alice" }.
  
/* ===============Question3================*/
// Snippet 3:
const calculateArea = (radius) => {
    const PI = 3.14159;
    const area = PI * radius * radius;
    return area;
  };
  
  const area = calculateArea(5);
  console.log(area);

  //  The value of area will be 78.53975
  
/* ===============Question4================*/
// Snippet 4:
const multiply = (a, b) => a * b;

const result2 = multiply(2, 5);
console.log(result2);
//  The value of result2 will be 10

/* ===============Question5================*/
// Snippet 5:
const isEven = (num) => {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };
  
  const evenNumber = isEven(8);
  console.log(evenNumber);
  //  The value of evenNumber will be true
  
/* ===============Question6================*/
// Snippet 6:
const sayHello = () => {
    return "Hello!";
  };
  
  const hello = sayHello();
  console.log(hello);
  // The value of hello will be the string "Hello!"
  
/* ===============Question7================*/
// Snippet 7:
const calculateSquare = (num) => num * num;

const squaredNumber = calculateSquare(4);
console.log(squaredNumber);
// The value of squaredNumber will be 16

/* ===============Question8================*/
// Snippet 8:
const divide = (a, b) => {
    if (b === 0) {
      return "Error: Division by zero.";
    }
    return a / b;
  };
  
  const result3 = divide(10, 2);
  const result4 = divide(8, 0);
  console.log(result3);
  console.log(result4);
  // The value of result3 will be 5, and the value of result4 will be "Error: Division by zero."