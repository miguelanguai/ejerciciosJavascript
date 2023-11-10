"use strict";
//1. Last loop value
let i = 3;

while (i) {
  alert( i-- );
}//last printed is 1

//2. Which values does the while loop show?
let i2 = 0;
while (++i2 < 5) alert( i2 );//this shows 4 times

let i3 = 0;
while (i3++ < 5) alert( i3 );//this shows 5 times

//3. Output even numbers in the loop
for (let j =2;j<=10;j++){
    if (j%2===0){
        alert(j);
    }
}

//4: Replace for with while
let k=0;
while(k<3){
    alert(`number ${i}!`);
    k++;
}

//5. Repeat until the input is correct
let res;
do{
    res=prompt("Enter a number greater than 100");
}while(res<100&&res)

//6. Output prime numbers
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}