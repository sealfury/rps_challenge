export const rpsGame = (player1, player2) => {

  switch(player1) {
    case "rock":
      if (player2 === "scissors")
        return "Player 1 wins";
      else if (player2 === "paper")
        return "Player 2 wins"
    break;
    case "scissors":
      if (player2 === "paper")
        return "Player 1 wins";
      else if (player2 === "rock")
        return "Player 2 wins";
    break;
    case "paper": 
      if (player2 === "rock")
        return "Player 1 wins";
      else if (player2 === "scissors")
        return "Player 2 wins";
    break;
    default: 
      return "Draw"
  }
}