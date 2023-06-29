import "./src/components/generic/reset.css";
import "./src/components/styles/settings/colors.css";
import "./src/components/styles/elements/base.css";
import CardGame from "./src/components/CardGame";
import PlayerScore from "./src/components/PlayerScore";
import BoardGame from "./src/components/objects/BoardGame";

// selecionando a div -> root
const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(6);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);
