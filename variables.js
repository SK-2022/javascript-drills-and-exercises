// Exercise 1: Variable Declaration and Initialization
// Create three variables named firstName, lastName, and age. Initialize them with your own information (your first name, last name, and age).

const firstName = "Mika";
const lastName = "Chiusiwa";
let age = 27;



// Exercise 2: Variable Reassignment
// Change the value of the age variable to your current age plus 5.

age+= 5

// Exercise 3: String Concatenation
// Create a variable named fullName and assign it the value of your full name by concatenating firstName and lastName.

const fullName = firstName + lastName;

// Exercise 4: Numeric Operations
// Create a variable named num1 and assign it a numeric value. Then create another variable named num2 and assign it a different numeric value. Perform the following operations and store the results in separate variables:
let num1 = 2;
let num2 = 3;

// Addition of num1 and num2
let sum = num1 + num2;

// Subtraction of num1 from num2
let difference = num2 - num1;

// Multiplication of num1 and num2
let product = num1 * num2;

// Division of num1 by num2
let quotient = num1 / num2 ;

// Exercise 5: Type Checking
// Use the typeof operator to check the data type of each of the variables you've created in the previous exercises.

typeof lastName
typeof age
typeof fullName
typeof num1
typeof num2
typeof sum
typeof difference
typeof product
typeof quotient

// Exercise 6: Null and Undefined
// Create two variables, x and y, and explicitly assign one of them null and leave the other one without any assignment. Check their data types using typeof and explain the result.
let x = null
let y

//x has been assigned the value of nothing, an empty value if you will. y has been declared but nothing has been assigned hence it returns undefined .

// Exercise 7: Constants
// Declare a constant variable named PI and assign it the value of the mathematical constant π (pi). Try to reassign a new value to PI and observe what happens.
const PI = 3.1415926535


// Exercise 8: Practice Prompt 
// Write some JavaScript that prompts the user
// for their favorite color. Once the user has
// submitted a favorite color, log that color to the
// console along with a friendly message.

//ANSWER
// const favoriteColor = prompt("What's your favorite color?","" )
// console.log(`Awesome! My favorite color is ${favoriteColor} too!`)

// Exercise 9: Creating String
// Create a string that contains both single quotes and double quotes.
let interestingString = "I'll make this string simple"