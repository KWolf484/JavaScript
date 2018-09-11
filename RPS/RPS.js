//RPS game 
//start date - 27/07/2018
//project - 1

const choice = {
  0: 'rock',
  1: 'paper',
  2: 'scissors',
};
p1 = Math.floor(Math.random()*3) 
p2 = Math.floor(Math.random()*3)


function gameRules(p1, p2) {
  document.getElementById('p1Result').innerHTML = "Player one: " + choice[p1];
  document.getElementById('p2Result').innerHTML = "Player two: " + choice[p2];
  if (choice[p1] === choice[p2]) {
    document.getElementById('gameResult').innerHTML = "Its a Draw! " + choice[p1] + " " + choice[p2] }
  else if (choice[p1] === choice[0] && choice[p2] === choice[2]) {
    document.getElementById('gameResult').innerHTML = "Rock bets Scissors, player one won"}
  else if (choice[p1] > choice[p1]) {
    document.getElementById('gameResult').innerHTML = "Player one won with " + choice[p1]}
  else { document.getElementById('gameResult').innerHTML = "Player 2 won with " + choice[p2] + " *" + choice[p1] + "*"}
};


console.log(gameRules(p1, p2))

