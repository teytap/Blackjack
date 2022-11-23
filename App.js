let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let firstCard = 10;
let secondCard = 4;
let card = 6;
let isAlive = "true";
let sum = firstCard + secondCard;
let cards = [firstCard, secondCard];

function startGame() {
  renderGame();
}
function renderGame() {
  cardsEl.textContent = cards;
  sumEl.textContent = sum;
  if (sum < 21) {
    messageEl.textContent = "Do you want a new card?";
  } else if (sum === 21) {
    messageEl.textContent = "You have Blackjack!";
  } else {
    messageEl.textContent = "You loose";
    isAlive = "false";
  }
}
function newCard() {
  sum += card;
  cards.push(card);
  renderGame();
}
