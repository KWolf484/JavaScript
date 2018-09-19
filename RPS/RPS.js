//RPS game 
//start date - 27/07/2018
//project - 1

const choice = {
  0: 'Rock',
  1: 'Paper',
  2: 'Scissors',
};
// attempt at user input via buttons
choice[0] = getElementById
// random number gen for RPS choice, two players. Poss AI func
// p1 = Math.floor(Math.random()*3) 
// p2 = Math.floor(Math.random()*3)
// test for draw output
// p1 = 0
// p2 = 0


function gameRules(p1, p2) {
  document.getElementById('p1Result').innerHTML = "Player One: " + choice[p1];
  document.getElementById('p2Result').innerHTML = "Player Two: " + choice[p2];
  if (choice[p1] === choice[p2]) {
<<<<<<< HEAD
    document.getElementById('gameResult').innerHTML = "It\'s a Draw! <br />" + "Player One Chose: " + choice[p1] + "<br />Player Two Chose: " + choice[p2]
=======
    document.getElementById('gameResult').innerHTML = "It\'s a Draw! " 
    + "<br />" 
    + "Player One Choose: " + choice[p1]
    + "<br />" 
    + "Player Two Choose: " + choice[p2]
>>>>>>> 38f36662dc1a045a2e04137e92c6f64c160f0586
  }

  else if (choice[p1] === choice[0] && choice[p2] === choice[1] || choice[p2]
    === choice[0] && choice[p1] === choice[1]) {
    document.getElementById('gameResult').innerHTML = choice[1] + " Beats " + choice[0]
  }

<<<<<<< HEAD
  else if (choice[p1] === choice[1] && choice[p2] === choice[2] || choice[p1] === choice[2]) { document.getElementById('gameResult').innerHTML = choice[2] +" Beats " + choice[1] 
=======
  else if (choice[p1] === choice[1] && choice[p2] === choice[2] || choice[p1] === choice[2] && choice[p2] === choice[1]) {

>>>>>>> 38f36662dc1a045a2e04137e92c6f64c160f0586
  }


  

};


gameRules(p1, p2)

