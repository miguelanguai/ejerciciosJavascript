"use strict";
function test(){ 
    let testsFailed=0;
    console.log("---");
    console.log("testNum | Pass/Fail | [ expectedResponse | response]");
    console.log("---");

    function runTest(testNum, expectedResponse, response) {
        function compareTwoArrays(arrayA, arrayB){

            if (arrayA.length!==arrayB.length){
                return false;
            }

            for (let i=0;i<arrayA.length;i++){
                if (!(arrayA[i]===arrayB[i])){
                    return false;
                }
            }
            return true;
        }
        let result = compareTwoArrays(response,expectedResponse) ? "Pass" : "Fail";
    
        console.log(`${testNum} | ${result} | ${expectedResponse} | ${response}`);
        
        if (result === "Fail") {
          testsFailed++;
        }
    }

    //
    const arr1=[1, "hola", 10n, 10n, 5n, "adios", true, 67, false];
    sortArrayByType(arr1);

    const arr2=[,"hello",true,6n, false, "bye",,54,3n,"world",false,,"hi"];
    sortArrayByType(arr2);

    //falta de un tipo de elemento
    const arr3 = [2n, 3, "falta booleano"];
    sortArrayByType(arr3);

    //otro igual
    const arr4 = [4, true, "falta bigInt"];
    sortArrayByType(arr4);

    const arr5 = ["hi",["example of Array inside Array",5]];
    sortArrayByType(arr5);

    runTest(1, [10n,10n,5n,true, false, 1,67,"hola","adios"],arr1);
    runTest(2, [6n,3n,true,false,false,54,"hello","bye","world","hi"], arr2);
    runTest(3, [2n, 3, "falta booleano"], arr3);
    runTest(4, [true, 4, "falta bigInt"],arr4);

    const arrayToCompare = ["hola",5,6,7];
    runTest(5, ["hola", [5,6,[7]]],arrayToCompare);

    console.log("---");
    console.log("Fails: "+testsFailed);

}
  