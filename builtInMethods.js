// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

// The includes() method is called on the string "Hello World"
// The argument passed through the method is the string "Hello", and this method will evaluate if the argument is included in the given string
// The return value is a boolean, which in this case is: true
"Hello World".includes("Hello");

// The endsWith() method is called on the string "Hello World"
// The argument passed through the method is the string "Hello", and this method will evaluate if the argument is the ending of the given string
// The return value is a boolean, which in this case is: false
"Hello World".endsWith("Hello");

// The endsWith() method is called on the string "Hello World"
// The argument passed through the method is the string "rld", and this method will evaluate if the argument is the ending of the given string
// The return value is a boolean, which in this case is: true
"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

// The toUpperCase() method is called on the cityOfResidence variable, which stores the string object "San Francisco". 
// The toUpperCase() method returns the string in all upper case lettering. It does not change the original string.
// In this example, the return value is "SAN FRANCISCO"
// The console.log() statement prints the return value to the console.
var cityOfResidence = "San Francisco";
console.log(cityOfResidence.toUpperCase());

// The substr() method is called on the stateOfResidence variable, which stores the string object "California". 
// The substr() method extracts a part of a string using arguments 0 and 3. These represent the index starting position and the length of characters to extract. It does not change the original string.
// In this example, the return value is "Cal", because the index starting position is 0 and the length is 3.
// The console.log() statement prints the return value to the console.
var stateOfResidence = "California";
console.log(stateOfResidence.substr(0, 3));



// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

// The push() method is called on the numbers variable, which is an array that stores several numbers.
// The push() method will add the given argument to end of the array and it returns the new length of the array.
// In this case, the number 7 is the argument
// The console.log() statement prints the contents of the array with the added element.
var numbers = [2, 7, 3, 18];
numbers.push(7);
console.log(numbers);

// The splice() method is called on the mod0Names variable, which is an array that stores strings.
// The splice() method will change the contents of an array by removing or replacing existing elements and/or adding new elements.
// In this case, the first argument given is 2, the index position which indicates the start. The second argument is 1, which is the deleteCount. This indicates the number of elements in the array to remove.
// The console.log() statement prints the new contents of the array with the removed element.
var mod0Names = ["Matthew", "Laura", "Adam", "Jamie", "Ricky"];
mod0Names.splice(2, 1);
console.log(mod0Names);
  