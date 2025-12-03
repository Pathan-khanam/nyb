// Snacks array
const snacks = ["Pizza", "Burger", "Fries", "Donut", "Taco", "Noodles"];

// Snack powers
const power = [8, 7, 5, 3, 9, 6];

// Play function
function play(playerIndex) {
  const playerSnack = snacks[playerIndex];
  const playerPower = power[playerIndex];

  // Computer chooses random snack
  const compIndex = Math.floor(Math.random() * snacks.length);
  const compSnack = snacks[compIndex];
  const compPower = power[compIndex];

  let message = `You choose: <b>${playerSnack}</b> (Power ${playerPower})<br>
    Computer choose: <b>${compSnack}</b> (Power ${compPower})<br><br>`;

  if (playerPower > compPower) {
    message += "🎉 <span style='color:green'>You WIN!</span>";
  } else if (playerPower < compPower) {
    message += "💀 <span style='color:red'>You LOSE!</span>";
  } else {
    message += "🤝 It's a DRAW!";
  }

  document.getElementById("result").innerHTML = message;
}