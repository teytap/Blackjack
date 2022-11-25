let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let playerEl = document.getElementById("player-el");
let isAlive = false;
let hasBlackjack = false;
let sum = 0;
let cards = [];
let player = { name: "John", chips: 140 };

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard === 1) {
    randomCard = 11;
    return 11;
  } else if (randomCard > 10) {
    return 10;
  } else {
    return randomCard;
  }
}

function startGame() {
  isAlive = true;
  cards = [];
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  sum = firstCard + secondCard;
  cards.push(firstCard, secondCard);
  renderGame();
}
function renderGame() {
  cardsEl.textContent = "";
  playerEl.textContent = player.name + ": $" + player.chips;
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = sum;
  if (sum < 21) {
    messageEl.textContent = "Do you want to draw a new card?";
  } else if (sum === 21) {
    messageEl.textContent = "You've got Blackjack!";
    let hasBlackjack = "true";
  } else {
    messageEl.textContent = "You're out of the game!";
    isAlive = "false";
  }
}

function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
