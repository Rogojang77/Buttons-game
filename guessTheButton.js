let randomValue = Math.floor((Math.random() * 3) + 1); 
function findTheLuckyButton(id) {
  if (id == randomValue) {
    alert("You find it!")
  } else {
    alert("You lost!")
  }
}