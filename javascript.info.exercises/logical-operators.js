"use strict";
//1. Result of OR
alert (null||2||undefined);//2

//2. What's the result of OR'ed alerts?
alert (alert(1)||2||alert(3));//first alert and 2

//3. What's the result of AND?
alert (1&& null&&2);//null is printed

//4. What is the result of AND'ed alerts?
alert (alert(1) && alert(2)); //1 y undefined

//5- the result of OR AND OR
alert (null || 2&&3 || 4);//3

//6. Check the range between
if (age>=14 && age <=90) 

//7. Check the range outside
if (!(age>=14 && age <=90)) 

//8. A question about if
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' ); //only first

//9. Check the login
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}