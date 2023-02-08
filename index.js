let homeScore = 0;
let guestScore = 0;

function addOneHome() {
  // Increment the home score by 1
  homeScore++;
  // Set the home score to the incremented value
  document.getElementById("homeScore").innerHTML = homeScore;
}

function addOneGuest() {
  // Increment the guest score by 1
  guestScore++;
  // Set the guest score to the incremented value
  document.getElementById("guestScore").innerHTML = guestScore;
}

function addTwoHome() {
  // Increment the home score by 2
  homeScore += 2;
  // Set the home score to the incremented value
  document.getElementById("homeScore").innerHTML = homeScore;
}

function addTwoGuest() {
  // Increment the guest score by 2
  guestScore += 2;
  // Set the guest score to the incremented value
  document.getElementById("guestScore").innerHTML = guestScore;
}

function addThreeHome() {
  // Increment the home score by 3
  homeScore += 3;
  // Set the home score to the incremented value
  document.getElementById("homeScore").innerHTML = homeScore;
}

function addThreeGuest() {
  // Increment the guest score by 3
  guestScore += 3;
  // Set the guest score to the incremented value
  document.getElementById("guestScore").innerHTML = guestScore;
}
