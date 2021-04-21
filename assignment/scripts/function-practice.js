console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, for example 'Hello, Jo!'
function helloName( name ) {
  return 'Hello, ' + name;
}
// Remember to call the function to test
console.log(helloName('Tucker'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  console.log( 'in addNumbers', firstNumber, secondNumber );
  return (firstNumber + secondNumber);
} //end addNumbers
console.log(addNumbers(2,3));


// 4. Function to multiply three numbers & return the result
function multiplyThree( x, y, z ){
  console.log( 'in multiplyThree', x, y, z );
  return ((x * y) * z);
} // end multiplyThree
console.log(multiplyThree(2,3,4));


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  console.log( 'in isPositive', number );
  if ( number > 0 ){
    return true;
  } // end greater than 0
  else if ( number < 0) {
    return false;
  } //end less than zero
  else {
    return false; // "if 0"
  } // end if 0
} //end isPositive

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  console.log( 'in getLast', array );
  if (array) {
  return array[array.length-1];
} // end array with entries
  else {
  return 'undefined';
} // end empty array
} // end getLast

const numbersList = [ 2, 7, 1, 4, 6 ];
const emptyNumbersList = [ ];

console.log(getLast(numbersList));
console.log(getLast(emptyNumbersList));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
/*
function find( value, array ){
  let i = 0;
  while ( i <= array.length ) {
    if ( value === array[i] ) {
      i++;
      return true;
    } else {
      i++;
      return false;
    }
  }
}
*/
// curious why the above didn't work, i'll remove it if i figure it out on my own

function find( value, array ) {
  console.log ( 'in find', value, array );
  let i = 0;
  for ( value of array ) {
    if ( value === array[i] ) {
      i++;
      return true;
    } // end true
      else {
      i++;
      return false;
    } // end false
  } // end loop
} // end find

console.log(find( 7, numbersList ));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  console.log( 'in isFirstLetter', letter, string );
  if ( letter === string[0] ) {
    return true;
  } // end true
    else {
    return false;
  } // end false
} // end isFirstLetter

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  console.log( 'in sumAll', array );
  let sum = 0;
  // TODO: loop to add items
  for (i = 0; i < array.length; ++i) {
    sum += array[i];
  } //end loop to add
  return sum;
} // end sumAll

console.log(sumAll(numbersList));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.


let secondNumberList = [ 9, 4, 7, -3 ];
let thirdNumberList = [ -9, -4, -7, -3];

function dupeArray( array ) {
  let newArray = [];
  console.log( 'in dupeArray', array );
  for (i = 0; i < array.length; ++i) {
  if ( array[i] > 0 ) {
    newArray[i] = array[i];
  } else if (array[i] < 0) {
    // do nothing
  } // end else if
} // end loop
  return newArray;
} //end dupeArray

console.log(dupeArray(secondNumberList));
console.log(dupeArray(thirdNumberList));


// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
