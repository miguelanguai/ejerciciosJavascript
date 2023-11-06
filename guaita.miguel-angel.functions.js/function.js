function insertInArray(arrayIn, indexThatIsBefore, arrayOrPrimitiveToInsert){
    let arrayOut=[];
    let arrayInLength=0;

    //copies arrayIn until indexThatIsBefore in arrayOut
    for(let i=0;i<=indexThatIsBefore;i++){
        arrayOut[i]=arrayIn[i];
        arrayInLength++;
    }

    //put the arrayOrPrimitiveToInsert in arrayOut

    //measure length of element to add(if primitive or element)
    //by defect, it's 1 because I think it's not an array
    //(and a primitive will be 1 element in an array)
    let elementInputLength=1;
    if (Array.isArray(arrayOrPrimitiveToInsert)){
        //if array, it occupies the array's length (the elements it contains)
        elementInputLength=arrayOrPrimitiveToInsert.length;
        for (let j=0;j<elementInputLength;j++){
            arrayOut.push(arrayOrPrimitiveToInsert[j]);
        }
    } else{
        //if not an array, a push of the element to arrayOut
        arrayOut.push(arrayOrPrimitiveToInsert);
    }
    
    //put the last part of the original array to arrayOut
    for (let i=indexThatIsBefore+1;i<arrayIn.length;i++){
        //iterator starts in indexThatIsBefore +1
        //limit is at the length of original array
        
        arrayOut[i+elementInputLength]=arrayIn[i];
        //arrayOut index is iterator+elements' length that were added
        //It's the same as the arrayIn iterator
    }

    return arrayOut;
}
let arrayToShow=insertInArray(["manzana","platano","sandia","pera","melocoton"],3,"cereza");
//let arrayToShow=insertInArray(["manzana","platano","sandia","pera","melocoton"],3,["cerdo","vaca"]);
console.log(arrayToShow);

