import saludar from "./saludar.js";

const saludarButton = document.querySelector("#saludar-button");

saludarButton.addEventListener("click", () => {
  saludar();
});
