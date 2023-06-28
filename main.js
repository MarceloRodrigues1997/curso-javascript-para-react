import "./src/components/generic/reset.css";
import CardGame from "./src/components/CardGame";
import "./src/components/styles/settings/colors.css";
import "./src/components/styles/elements/base.css";

// selecionando a div -> root
const $root = document.querySelector("#root");
const $htmlCardGame = CardGame();

$root.insertAdjacentHTML("beforeend", $htmlCardGame); // Não usar innerHTML
