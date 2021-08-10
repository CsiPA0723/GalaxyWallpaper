import "./style.css";
import Galaxy from "./Galaxy";

function main() {
  // Get a reference to the container element
  const container = document.querySelector<HTMLCanvasElement>("#c");

  const galaxy = new Galaxy(container);

  // start the animation loop
  galaxy.start();
}

main();
