function insertInArray(arrayIn, indexThatIsBefore, arrayOrPrimitiveToInsert){
    let arrayOut=[];
    /* arrayOut takes all the arrayIn indexes until indexThatIsBefore,
    included, and saves the next index*/
    let oldArrLength=0;
    for(let i=0;i<=indexThatIsBefore;i++){
        arrayOut[i]=arrayIn[i];
        oldArrLength++;
    }
    console.log("Old array length: "+ oldArrLength);
    console.log(arrayOut);
    arrayOut.push(arrayOrPrimitiveToInsert);
    console.log(arrayOut);
    
    for(let i=arrayOut.length;i<=oldArrLength+1;i++){
        arrayOut[i]=arrayIn[i-1];
        console.log(arrayOut[i]);
    }

    return arrayOut;
}
let arrayToShow=insertInArray(["manzana","platano","sandia","pera","melocoton"],3,"cereza");
console.log(arrayToShow);

