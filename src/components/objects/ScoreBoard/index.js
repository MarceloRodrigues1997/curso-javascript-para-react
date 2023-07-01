import PlayerName from "../../PlayerName";
import "./style.css";

function ScoreBoard() {
  return /*HTML*/ `
    <header class="score-board">
    ${PlayerName("Player1")}
    ${PlayerName("Player2")} 
    </header>    
    `;
}

export default ScoreBoard;
