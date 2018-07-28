//RPS game 
//start date - 27/07/2018
//project - 1

const items = {
  0: 'rock',
  1: 'paper',
  2: 'scissors',
};
function numGen() {
  n = Math.floor(Math.random()*2);
  return n
}

console.log(items[numGen()]);
// console.log();

