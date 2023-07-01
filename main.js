import "./src/components/generic/reset.css";
import "./src/components/styles/settings/colors.css";
import "./src/components/styles/elements/base.css";
import CardGame from "./src/components/CardGame";
import PlayerScore from "./src/components/PlayerScore";
import BoardGame from "./src/components/objects/BoardGame";
import PlayerName from "./src/components/PlayerName";
import ScoreBoard from "./src/components/objects/ScoreBoard";
import CardFrontBack from "./src/components/CardFrontBack";

// selecionando a div -> root
const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
  "beforeend",
  `
  ${ScoreBoard()}
  ${BoardGame(2)}`
);
