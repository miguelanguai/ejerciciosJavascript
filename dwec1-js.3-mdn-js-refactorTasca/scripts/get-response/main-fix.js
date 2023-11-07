function getResponse(score,isMachineOn){
    let response;
    if (isMachineOn) {
        response = "Machine is active";

        
      if (score < 0 || score > 100){
        response = "This is not possible, an error has occurred";
      } else if (score < 20) {
        response = "That was a terrible score - total fail!";
      } else if (score < 40) {
        response = "You know some things, but it's a pretty bad score. Needs improvement";
      } else if (score < 70) {
        response = "You did a passable job, not bad!";
      } else if (score < 90) {
        response = "That's a great score, you really know your stuff.";
      } else if (score <= 100) {
        response = "What an amazing score! Did you cheat? Are you for real?";
      } 
    } else response = "Machine isn't active. Switch it on.";
    return response;
}

