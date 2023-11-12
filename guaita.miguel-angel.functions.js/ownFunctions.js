"use strict";
//Sort arrays by type first bigints, then booleans, then numbers, then strings

function sortArrayByType(arrayOriginal) {
    const arrLength = arrayOriginal.length;
    //tneemos 4 tipos de variables
    const arrBigint = [];
    //arrayOriginal[arrLength]=arrBigint;

    const arrBoolean = [];
    //arrayOriginal [arrLength+1]=arrBoolean;

    const arrNum = [];
    //arrayOriginal [arrLength+2]=arrNum;

    const arrString = [];
    //arrayOriginal [arrLength+3]=arrString;

    //sacar datos de arrayOriginal y meterlos en cada uno
    for (let i = 0; i < arrayOriginal.length;) {
        switch (typeof arrayOriginal[i]) {
            case "string":
                arrString.push(arrayOriginal.shift());
                break;
            case "number":
                arrNum.push(arrayOriginal.shift());
                break;
            case "bigint":
                arrBigint.push(arrayOriginal.shift());
                break;
            case "boolean":
                arrBoolean.push(arrayOriginal.shift());
                break;
            default:
                console.log("jajja pringao");
                break;
        }
    }
    console.log(arrBigint);
    console.log(arrBoolean);
    console.log(arrNum);
    console.log(arrString);
    console.log(arrayOriginal);//esta vacio en este punto

    function pushArrToOriginal(arrayToBePushed) {
        for (const i of arrayToBePushed) {
            arrayOriginal.push(i);
        }
        arrayToBePushed.length = 0;
        console.log(arrayOriginal);
    }

    pushArrToOriginal(arrBigint);
    pushArrToOriginal(arrBoolean);
    pushArrToOriginal(arrNum);
    pushArrToOriginal(arrString);


}

const arrA = ["a", true, 5, 8, true, "holis", "adiosis", false, 10n, 10n, "b", true, 10n, 56, "ahora te cambias"];
sortArrayByType(arrA);
console.log(arrA);
//console.log(sortArrayByType(arrA));
