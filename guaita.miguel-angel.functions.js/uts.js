"use strict";
function uts(){ 
    let testsFailed=0;
            //number of tests failed

    console.log("testNum | Pass/Fail | [ expectedResponse | response]");
    console.log("---");

    function runTest(testNum, expectedResponse, arrayToTest) {
        let response=arrayToTest;
    
        //let result = response === expectedResponse ? "Pass" : "Fail"; this
        //doesn't work for arrays

        //we need to check every index in both arrays and compare them
        /*
        let result="Pass"; for (let i=0;i<expectedResponse.length;i++){ if
        (!(response[i]===expectedResponse[i])){ result = "Fail"; break;
            }
        }
        */
        function compareTwoArrays(arrayA, arrayB){
            for (let i=0;i<arrayA.length;i++){
                if (!(arrayA[i]===arrayB[i])){
                    return false;
                }
            }
            return true;
        }
        let result = compareTwoArrays(response,expectedResponse) ? "Pass" : "Fail";
    
        console.log(`${testNum} | ${result} | ${expectedResponse} | ${response}`);
        
        testNum++;
        if (result === "Fail") {
          testsFailed++;
        }
    }
    

    let correctAnswer=["manzana","platano","sandia","pera","cereza","melocoton"];
    let arrayToTest1=insertInArray(["manzana","platano","sandia","pera","melocoton"],3,"cereza");
    let arrayToTest2=insertInArray(["hoja","platano","sandia","pera","melocoton"],3,"cereza");
    runTest(1, correctAnswer,arrayToTest1);
    runTest(2, correctAnswer,arrayToTest2);

    console.log("---");
    console.log("Fails: "+testsFailed);

}
  