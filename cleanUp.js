// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
// Moved the console.log() and the closing curly braces to a line of their own for a cleaner look. 
function askForName() { 
  console.log("Hello, what is your name?") 
}

askForName()


// EX 2:
// Added semi colon to end of variable declaration line and indended that line and the return line so the function contents can be read clearly.
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  return sum;
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);
addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);


// EX 3:
// Changed func to function so we can define our function with proper syntax. 
// Added a space between closing parenthesis and opening curly braces for cleaner look. 
// Put closing curly braces on a line of its own.
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();


//  EX 4:
// Moved opening curly braces to top line of function declaration. 
// Indented all contents of the function for easier reading and removed closing curly braces indentation.
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  return avg
}