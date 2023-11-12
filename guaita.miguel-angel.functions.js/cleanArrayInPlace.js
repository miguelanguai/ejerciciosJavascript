"use strict";
/*
function cleanArrayInPlace(arrayToClean){
    for(let i=0;i<arrayToClean.length;i++){
        if(typeof arrayToClean[i] === "undefined")
            console.log("index "+i+" "+arrayToClean[i]+": undefined");
        if (typeof arrayToClean[i] === "object"){
            console.log ("index "+i+" "+arrayToClean[i]+": null")          
        }
        
    }
    
}
*/
function cleanArrayInPlace(arrayToClean){
    let invElemNum=0;
    for (let i=0;i<arrayToClean.length;i++){
        if(arrayToClean[i] !== null && arrayToClean[i] !== undefined){
            //si no es null o undefined, es igual a 
            arrayToClean[i]=arrayToClean[i+invElemNum];
            console.log(arrayToClean[i]);
        }else{
            //bucle para ver cuantos elementos siguen siendo null o undefined
            for (let j=arrayToClean[i];j<arrayToClean.length;j++){
                if(arrayToClean[j]=== null || arrayToClean[j]=== undefined){
                    invElemNum++;arrayToClean.length--;
                } else {
                    break;
                }
            }
        }
        arrayToClean[i]=arrayToClean[i+invElemNum];
    }
    return arrayToClean;        
}
    
    



let arrayToClean= [ 3, , , , 4, undefined, 5, null, { a: 6 }, [ 7, 8, null, 9 ], 10 ];;
cleanArrayInPlace(arrayToClean);
//console.log(arrayToClean);

