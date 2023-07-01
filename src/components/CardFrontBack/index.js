import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack() {
  return `
    <article class="card-front-back">
    ${CardGame()}
    ${CardGame("JavaScript", "Logo do JavaScript")}
    </article>
    `;
}

export default CardFrontBack;
