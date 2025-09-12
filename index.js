// Declaration des variables de score des joueurs
var humanScore = 0;
var computerScore = 0;

function getComputerChoice(){
let x = '' ;
    if(Math.random() <= 0.3)
    {
        x = "rock";
    }
    else if(Math.random() <= 0.7)
    {
        x = "paper"
    }
    else if(Math.random()<= 0.9)
    {
        x = "scissor"
    } 
    console.log(x);
    return x;

}



function getHumanChoice(){

    let x = prompt('Rock, Paper, Scissor').toLowerCase();

    console.log(x);
    return x;

}





function playRound(humanChoice, computerChoice){

    if(humanChoice === computerChoice){
        // return "Egalité!!!"
        console.log("Egalité")
    }
    else if(
        (humanChoice === 'rock' && computerChoice === 'scissor')
        || (humanChoice === 'paper' && computerChoice === 'rock')
        || (humanChoice === 'scissor' && computerChoice === 'paper')
    )
    {
        humanScore+= 1;
        console.log("You win, "+humanChoice+ " bats "+computerChoice+ " !!!")
        

        // return 'You win, '+humanChoice+ 'bats '+computerChoice+ '!!!';
    }
    else{
        computerScore+= 1;
        console.log("L'IA win, "+computerChoice+ " bats "+humanChoice+ " !!!")
    }

    console.log("Human Score: "+humanScore+ ", IA Score: "+computerScore+ ".");

}



for(var i= 1; i<=5; i++){
        console.log("----- Manche " + i + " -----");
        var computerSelection = getComputerChoice();
        var humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);


}

if(humanScore < computerScore)
{
    console.log("L'IA a gagné la partie!!!")

}else if(humanScore > computerScore){

    console.log("Vous avez gagné la partie!!!")
}
else{
    console.log("Hélas match nul! Pas de vainqueur pour cete partie.")
}