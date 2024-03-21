let activePlayer = "X";
let field = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

function renderGameboard() {
  document.getElementById("field").innerHTML = "";

  for (let i = 0; i < field.length; i++) {
    let singlecell = document.createElement("div");
    singlecell.className = "singlecell";

    singlecell.addEventListener("click", function () {
      if (field[i] === "") {
        field[i] = activePlayer;
        renderGameboard();
        activePlayer = activePlayer === "X" ? "O" : "X";
      }
    });

    singlecell.innerHTML = field[i];

    document.getElementById("field").appendChild(singlecell);
  }
}

renderGameboard();
