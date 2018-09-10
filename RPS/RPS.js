//RPS game 
//start date - 27/07/2018
//project - 1

const items = {
  0: 'rock',
  1: 'paper',
  2: 'scissors',
};
function gameRules(x, y) {
  items[0] > items[1]
  items[1] > items[2]
  items[2] > items[0]
};
function p1() {
  p1 = Math.floor(Math.random()*3) 
  return p1
};
function p2() {
  p2 = Math.floor(Math.random()*3) 
  return p2
};

//document.getElementById("p1Result").innerHTML = items[p1()];
//document.getElementById("p2Result").innerHTML = items[p2()];

document.write(p1());

