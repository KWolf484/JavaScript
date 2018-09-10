//RPS game 
//start date - 27/07/2018
//project - 1

const items = {
  0: 'rock',
  1: 'paper',
  2: 'scissors',
};
function p1() {
  p1 = Math.floor(Math.random()*3) 
  return p1
};
function p2() {
  p2 = Math.floor(Math.random()*3) 
  return p2
};
console.log(p1());
console.log(p2());
// console.log();

