//alerts are annoying, lets use console.log
console.log('welcome');
// This will now log to your console.

// Create a function that updates a DOM element.

function change(){
  // Function body. where it all goes down.
  document.getElementById('foo').innerHTML = 'Welcome';
}
//
var name = 'Lucille'; // Store a string in var
var numberOfWidgets = 10; // number
var isCodingCool = true;
console.log('name');

var letsdoit = [7, 'hello', 10, 'Yes', 16, 'Good', true, 'Thanks', false];
console.log(letsdoit[10]);
// for(i=0;i<letsdoit.length(); i++){
//   alert(letsdoit[i]);
// }


/* Create some variables, store some data in them, output them to the console.
  */

  // Multi-dimensional array.

  var meat = ['ham', 'bologna', 'turkey'];
  var fruit = ['oranges', 'apples', 'grapes'];
  var food = [meat,fruit];
  console.log(food[1][0]); // logs 'oranges' to the console.
/*
  Below code is the same as the above code.
  var food = [['ham', 'bologna', 'turkey'], ['oranges', 'apples', 'grapes'] ]
  */

  // Object creation

  var user = {
    firstName: 'Lucille',
    Age: 40,
    LastName: 'Bluth',
    hasHair: true,
    // 'has-feet'= true,
  };
// Access properties of user object using dot notation
console.log(user.firstName); // logs Lucille
// We can also access properties of the user object using bracket notation.
console.log(user['firstName']); // log Lucille
// console.log(user['has-feet']); // NEED to use square bracket because 'has-feet' is a special variable in this case.

/* In-class Exercise  */

var firstNumber = 500;
var secondNumber = (110-10)+100;
var total = firstNumber + secondNumber;
console.log(total);

var firstString = 'Good';
var secondString = 'Morning';
var together = firstString + secondString;
alert('together');

var theObject = {
  myFirstName: 'Matt',
  myLastName: 'Tounkara',
  fingerCount: 10,
  interests: ['basketball', 'fishing', 'traveling'],
};
console.log(theObject.interests[2]);
