const rollTheDice = () => {
  const dice1 = document.querySelector(".img1");
  const dice2 = document.querySelector(".img2");
  const result = document.querySelector('h1');

  dice1.src = dice2.src = "diceroll.gif"; 
  result.textContent = "Rolling...";

  setTimeout(() => {
    const num1 = Math.ceil(Math.random() * 6);
    const num2 = Math.ceil(Math.random() * 6);

    dice1.src = `./images/dice${num1}.webp`;
    dice2.src = `./images/dice${num2}.webp`;

    result.textContent = num1 === num2 ? "It's a Draw" : num1 > num2 ? "Player 1 wins!" : "Player 2 wins!";
  }, 50);
};

const editNames = () => {
  const player1 = prompt("Change Player 1 Name", "Player 1").trim();
  const player2 = prompt("Change Player 2 Name", "Player 2").trim();

  if (!player1 || !player2) {
    alert('Please enter valid names');
    return;
  }

  document.querySelector("p.Player1").textContent = player1;
  document.querySelector("p.Player2").textContent = player2;
};