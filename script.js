const symbols = ["⚡", "💰", "🏛️", "👑", "🔱"];
const reels = [
  document.getElementById("reel1"),
  document.getElementById("reel2"),
  document.getElementById("reel3")
];
const resultText = document.getElementById("resultText");
const coinsDisplay = document.getElementById("coins");
const spinSound = document.getElementById("spinSound");
const jackpotSound = document.getElementById("jackpotSound");

let coins = 100;

function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function spin() {
  if (coins < 10) {
    resultText.textContent = "❌ Koin tidak cukup!";
    return;
  }

  coins -= 10;
  coinsDisplay.textContent = coins;
  resultText.textContent = "";
  spinSound.play();

  let results = [];

  for (let i = 0; i < reels.length; i++) {
    const symbol = getRandomSymbol();
    reels[i].textContent = symbol;
    results.push(symbol);
  }

  setTimeout(() => {
    if (results.every(s => s === results[0])) {
      coins += 50;
      coinsDisplay.textContent = coins;
      resultText.textContent = "🎉 JACKPOT! +50 koin!";
      jackpotSound.play();
    } else {
      resultText.textContent = "😢 Belum hoki!";
    }
  }, 300);
}
