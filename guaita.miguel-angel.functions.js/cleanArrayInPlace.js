"use strict";
function cleanArrayInPlace(arrayToClean){
    for(let i=0;i<arrayToClean.length;i++){
        if(typeof arrayToClean[i] === "undefined")
            console.log("index "+i+" "+arrayToClean[i]+": undefined");
        if (typeof arrayToClean[i] === "object"){
            console.log ("index "+i+" "+arrayToClean[i]+": null")          
        }
        
    }
    
}
let arrayToClean= [ 3, , , , 4, undefined, 5, null, { a: 6 }, [ 7, 8, null, 9 ], 10 ];;
cleanArrayInPlace(arrayToClean);
console.log(arrayToClean);

