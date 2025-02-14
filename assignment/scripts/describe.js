// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// variable 'number' is set to one
// number is incremented with '++' operator to two
// if statement tests if number is greaterthan or equal to 2
//console.log will output 'yes' because variable number is 2

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// variable 'name' is equal to 'Dane'
// if statement test to see if variable is equal to 'Mary'
// since variable dosen't if statement will be false and output the else condition
// console.log will output 'How do you do?'
//

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// viarable 'code' is set to 123
// if statement will test if variable 'code is equal to 123' since id dose variable 'secret' will be set to 'super and code multipled by 2 to 246
// 2nd if statement since code is less than 250 the condition will not run and secret will not be changed
// console.log will display 'super'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// variable isStudent is set to true, variable age is set to 34, and variable zip is set to 55407
// first condition of the if statement will fail because both conditions are not true moving to the next else statement
// 1st else statement will fail because both isStudent is true and age is greater than 30
// 2nd else statement will be true since isStudent is true and console.log will output 'Welcome to Prime!'


// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

// colorOne should be set to 'blue' and color Two should be set to 'red' per instructions
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;


// colorTwo should also be set to 'purple' withing the if statement per instructions

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*

// using const to set time will not allow it to be changed and will always read as 4
let temp = 40;
const time = 4;


//

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// the console.log for each condtion need to be swapped so since the condition minAge <= age being true will display 'enter' and the else will display 'no entry'

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

