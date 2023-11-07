function getResponse(score,isMachineOn){
    let response;

    isMachineOn == false ? response = "Machine isn't active. Switch it on" :
        score < 0 || score > 100 ? response = "This is not possible, an error has occurred":
        score < 20 ? response = "That was a terrible score - total fail!":
        score < 40 ? response = "You know some things, but it's a pretty bad score. Needs improvement":
        score < 70 ? response = "You did a passable job, not bad!":
        score < 90 ? response = "What an amazing score! Did you cheat? Are you for real?" : response = "What an amazing score! Did you cheat? Are you for real?";

    return response;
}

