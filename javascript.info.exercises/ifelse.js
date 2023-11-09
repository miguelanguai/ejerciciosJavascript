//1. if (a string with zero)
if ("0") {
    alert( 'Hello' );
  }
  //will alert be shown? Yes, it will

//can you read what I write in comments?

//2. The name of Javascript
let response = prompt('What is the "official" name of JavaScript?',"");
if (response =="ECMAScript"){
  alert("Right!");
}else  alert("You don't know? ECMASCript!");

//3. Show the sign
let response2 = prompt("write a number");
if (response2>0){
  alert(1);
}else if(response2 ==0){
  alert(0);
}else alert (-1);

//4. Rewrite if else into?
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
