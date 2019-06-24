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
        return 0;
    }
    else if( (playerSelection == "rock" && computerSelection == "scissors") 
        ||  (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")){
        return 1;
    }
    else{
        return 2;
    }
}

function game(){
    let p_score = 0;
    let c_score = 0;
    let tie = 0;

    for(i = 0; i < 5; ++i){
        let player = prompt("enter an option");
        let res = playRound(player, computerPlay());

        if(res == 1)
            p_score++;
        else if(res == 2)
            c_score++;
        else
            tie++
        console.log("Player: " + p_score + " Computer: " + c_score + " Tie: " + tie);
    }
}

const buttons = document.querySelectorAll('button');
const res = document.getElementById("result");
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        res.textContent = playRound(button.id.toString(), computerPlay());
  });
});


// game();