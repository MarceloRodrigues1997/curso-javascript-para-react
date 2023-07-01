import "./style.css";

// JSX -> Pequisar sobre
function CardGame(icon = "alura-pixel", alt = "Logo da Alura") {
  return `
    <div class="card-game">
      <img src="./src/components/images/${icon}.png" alt="${alt}">  
    </div>
    `;
}

export default CardGame;
