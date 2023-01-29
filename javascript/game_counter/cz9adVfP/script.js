let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let homeScore = 0;
let guestScore = 0;

function homePlusOne() {
  console.log("Hello World");
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}

function homePlusThree() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

function homePlusTen() {
  homeScore += 10;
  homeScoreEl.textContent = homeScore;
}

function guestPlusOne() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}

function guestPlusThree() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}

function guestPlusTen() {
  guestScore += 10;
  guestScoreEl.textContent = guestScore;
}
