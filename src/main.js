import "./style.css";

import randomColor from "randomcolor";

document.getElementById("generate").addEventListener("click", function () {
  const rows = parseInt(document.getElementById("rows").value);
  const columns = parseInt(document.getElementById("columns").value);
  // validatie
  if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
    alert("Please enter valid numbers for rows and columns!");
    return;
  }

  const gridContainer = document.getElementById("grid-container");
  const colorList = document.getElementById("color-list");
  gridContainer.innerHTML = ""; // bestaande grid wissen
  colorList.innerHTML = ""; // bestaande lijst wissen
  // grid aanmaken
  gridContainer.style.display = "grid";
  gridContainer.style.gridTemplateRows = `repeat(${rows}, auto)`; // Maintain padding for rows
  gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

  // grid maken en kleuren geven
  for (let i = 1; i <= rows * columns; i++) {
    const div = document.createElement("div");
    div.textContent = i;

    const color = randomColor();
    div.style.backgroundColor = color;

    // lijst met kleuren
    const listItem = document.createElement("li");
    listItem.textContent = color;
    colorList.appendChild(listItem);
    listItem.style.backgroundColor = color;

    gridContainer.appendChild(div);
  }
});
