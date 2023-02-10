// this keeps track of the three options the user can choose from
const playerOptions = ["Bato", "Papel", "Gunting"];
//this variable represent the initial player and computer choice
let choices = {
  playerChoice: null,
  computerChoice: null
};
//Where the player makes their choice
//loop over buttons and add event listener to each
document.getElementById('Bato').addEventListener('click', getsChoice);
document.getElementById('Papel').addEventListener('click', getsChoice);
document.getElementById('Gunting').addEventListener('click', getsChoice);
//this function updates playerChoice value with corresponding button pressed
function getsChoice(e){
  let choice = e.innerHTML;
  if(choice === "Bato"){
    choices.playerChoice = playerOptions[0];
  } else if(choice === "Papel"){
    choices.playerChoice = playerOptions[1];
  } else{
    choices.playerChoice = playerOptions[2];
  }
  compareChoices();
  return choices.playerChoice;
}
//this function is where the computer randomly generates a choice
const computerChooses = () => {
  let randomIndex = Math.floor(Math.random() * playerOptions.length);
  choices["computerChoice"] = playerOptions[randomIndex];
  return choices.computerChoice;
}
//this function serves to define the logic to determine the winner
const compareChoices = () => {
  computerChooses();
  if(choices.playerChoice === choices.computerChoice){
  gameResult("We have a tie!");
  }
  if(choices.playerChoice === playerOptions[0] && choices.computerChoice === playerOptions[1]){
  gameResult("Talo ka! HAHAHA! The computer chose " + choices.computerChoice + " and the player chose " + choices.playerChoice + ".");
  } else if(choices.playerChoice === playerOptions[0] && choices.computerChoice === playerOptions[2]){
  gameResult("WOW PANALO! The computer chose " + choices.computerChoice + " and the player chose " + choices.playerChoice + ".");
  }
  if(choices.playerChoice === playerOptions[1] && choices.computerChoice === playerOptions[0]){
  gameResult("WOW PANALO! The computer chose " + choices.computerChoice + " and the player chose " + choices.playerChoice + ".");
  } else if(choices.playerChoice === playerOptions[1] && choices.computerChoice === playerOptions[2]){
  gameResult("Talo ka! HAHAHA! The computer chose " + choices.computerChoice + " and the player chose " + choices.playerChoice + ".");
  }
  if(choices.playerChoice === playerOptions[2] && choices.computerChoice === playerOptions[0]){
  gameResult("Talo ka! HAHAHA! The computer chose " + choices.computerChoice + " and the player chose " + choices.playerChoice + ".");
  } else if(choices.playerChoice === playerOptions[2] && choices.computerChoice === playerOptions[1]){
  gameResult("WOW PANALO! The computer chose " + choices.computerChoice + " and the player chose " + choices.playerChoice + ".");
  }
}
//this function displays the result
const gameResult = (result) => {
  const displayText = document.createElement('p');
  displayText.innerText = result;
  document.body.appendChild(displayText);
}