"use strict";
function uts(title){ //title parameter might be useless (MA)
    
    let testsFailed=0;
            //number of tests failed

    console.log("text testNum | Pass/Fail | score | machineActive [ expectedResponse | response]");
    console.log("---");

    //prueba migue
    // let numPrompt = prompt("Give me a score to start the test from", 1);
    // runTestFromPromptGiven(numPrompt);

    function runTest(testNum, score, machineActive, expectedResponse) {
        let response = getResponse(score, machineActive);
    
        let result = response === expectedResponse ? "Pass" : "Fail";
    
        console.log(`${testNum} | ${result} | ${score} | ${machineActive} | 
        ${expectedResponse} | ${response}`);
    
        if (result === "Fail") {
          testsFailed++;
        }
    }
    //I didn't know if I had to do testing here or in each main-* file, so I did
    //it here as it's the file for testing
    runTest(1, 15, true, "That was a terrible score - total fail!");
    runTest(2, 20, true, "You know some things, but it's a pretty bad score. Needs improvement");
    runTest(3, 75, false, "Machine isn't active. Switch it on.");
    runTest(4, 75, true, "That's a great score, you really know your stuff.");
    runTest(5, 89, true, "That's a great score, you really know your stuff.");
    runTest(6, 35, true, "You know some things, but it's a pretty bad score. Needs improvement");
    runTest(7, 40, true, "You did a passable job, not bad!");

    console.log("---");
    console.log("Fails: "+testsFailed);


    //lo pedimos al usuario

    // function runTestFromPromptGiven(numPrompt){
    //   for (let i=1; numPrompt<=100;i++, numPrompt++){
    //     runTest(i, numPrompt, true, "That's a great score, you really know your stuff.");
    //     console.log("En bucle de runTestFromPromptGiven");
    //   }
    // }

}
  