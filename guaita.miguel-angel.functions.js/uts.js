"use strict";
function uts(){ 
    let testNum=1;
    let testsFailed=0;
            //number of tests failed

    console.log("text testNum | Pass/Fail | [ expectedResponse | response]");
    console.log("---");

    function runTest(expectedResponse, arrayToTest) {
        let response=arrayToTest;
    
        //let result = response === expectedResponse ? "Pass" : "Fail";
        //this doesn't work for arrays

        //we need to check every index in both arrays and compare them
        let result="Pass";
        for (let i=0;i<expectedResponse.length;i++){
            if (!(response[i]===expectedResponse[i])){
                result = "Fail";
                break;
            }
        }
    
        console.log(`${testNum} | ${result} | ${expectedResponse} | ${response}`);
        
        testNum++;
        if (result === "Fail") {
          testsFailed++;
        }
    }
    

    let correctAnswer=["manzana","platano","sandia","pera","cereza","melocoton"];
    let arrayToTest1=insertInArray(["manzana","platano","sandia","pera","melocoton"],3,"cereza");
    let arrayToTest2=insertInArray(["hoja","platano","sandia","pera","melocoton"],3,"cereza");
    runTest(correctAnswer,arrayToTest1);
    runTest(correctAnswer,arrayToTest2);

    console.log("---");
    console.log("Fails: "+testsFailed);

}
  