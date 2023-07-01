import CardFrontBack from "../../CardFrontBack";
import "./style.css";

function BoardGame(amountCards) {
  const $htmlCardFrontBack = CardFrontBack();
  const $htmlContents = $htmlCardFrontBack.repeat(amountCards);

  return `
  <section class=board-game>
  ${$htmlContents}
  </section>
  `;
}

export default BoardGame;
