let randomValue = Math.floor((Math.random() * 3) + 1); 
function winnerButton(id) {
  if (id == randomValue) {
    alert("You find it!")
  } else {
    alert("Try again!")
  }
}
