let activePlayer = "X";
let lastPlayer = "";
let field = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

function checkLoser() {
  const losingConditions = [
    [0, 1, 2],
    [1, 2, 3],
    [4, 5, 6],
    [5, 6, 7],
    [8, 9, 10],
    [9, 10, 11],
    [12, 13, 14],
    [13, 14, 15],
    [0, 4, 8],
    [1, 5, 9],
    [2, 6, 10],
    [3, 7, 11],
    [4, 8, 12],
    [5, 9, 13],
    [6, 10, 14],
    [7, 11, 15],
    [4, 9, 14],
    [0, 5, 10],
    [1, 6, 11],
    [5, 10, 15],
    [2, 5, 8],
    [3, 6, 9],
    [7, 10, 13],
    [6, 9, 12],
  ];

  for (let combo of losingConditions) {
    if (
      field[combo[0]] !== "" &&
      field[combo[0]] === field[combo[1]] &&
      field[combo[1]] === field[combo[2]]
    ) {
      alert(lastPlayer + " hat verloren!");
      resetGameboard();
      return;
    }
  }

  if (!field.includes("")) {
    alert("Unentschieden");
    resetGameboard();
  }
}

function resetGameboard() {
  field = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
  activePlayer = "X";
  renderGameboard();
}

function renderGameboard() {
  document.getElementById("field").innerHTML = "";

  for (let i = 0; i < field.length; i++) {
    let singlecell = document.createElement("div");
    singlecell.className = "singlecell";

    singlecell.addEventListener("click", function () {
      if (field[i] === "") {
        field[i] = activePlayer;
        lastPlayer = activePlayer;
        renderGameboard();
        activePlayer = activePlayer === "X" ? "O" : "X";

        setTimeout(function() {
            renderGameboard();
            checkLoser(activePlayer);
        }, 0);
        
      }
    });

    singlecell.innerHTML = field[i];

    document.getElementById("field").appendChild(singlecell);
  }
}

renderGameboard();
