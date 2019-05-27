function computerPlay(){
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)]; 
}

function playRound(playerSelection, computerSelection) {
    //makes inputs case sensitive
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    //checks input boundaries
    if( (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors")
        || (computerSelection != "rock" && computerSelection != "paper" && computerSelection != "scissors"))
        return "WRONG INPUT";    

    if(playerSelection == computerSelection){
        return "it's a tie!";
    }
    else if( (playerSelection == "rock" && computerSelection == "scissors") 
        ||  (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")){
        return "player wins";
    }
    else{
        return "computer wins";
    }
}
console.log(playRound("rock", computerPlay()));