// Step 1: Prompt the user to enter their choice (Rock, Paper, or Scissors)

// Step 2: Validate the user's input to ensure it is one of the valid choices: "rock", "paper", or "scissors"

// Step 3: Define the possible choices ("rock", "paper", "scissors") and randomly select one for the computer

// Step 4: Check if the user's choice is the same as the computer's choice
//         - If yes, print "It's a tie!"

// Step 5: Use game rules to determine the winner if it's not a tie:
//         - Rock beats Scissors
//         - Scissors beat Paper
//         - Paper beats Rock
//         - Print "You win!" if the user wins or "Computer wins!" if the computer wins

// Step 6: Display both the user's choice and the computer's choice to show the results


let userInput = prompt("enter rock, paper, and scissors: ").toLowerCase();

let choices = ["rock", "paper", "scissors"];

if (!choices.includes(userInput)){
    console.log("please input a valid choice");
}else{
    let computerChoices = choices[Math.floor(Math.random() * 3)];

    if(computerChoices === userInput){
        console.log("Its a tie!")
    }else if(
        (userInput === "rock" && computerChoices === "scissors")||
        (userInput === "scissors" && computerChoices === "paper")||
        (userInput === "paper" && computerChoices === "rock")
    ){
        console.log("You win, you entered:", userInput, "and computers input is:", computerChoices)
    }else{
        console.log("You lose! You entered:", userInput, "and the computer's input is:", computerChoices);

    }
}