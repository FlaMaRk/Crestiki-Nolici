
let cells = document.querySelectorAll('#field td');
let endgame = document.querySelector('#endgame');
start(cells);
function start(cells) {
  let i = 0;
  function step() {
    this.textContent = ['X', 'O'][i % 2];
    this.removeEventListener('click', step);
    let winner = win(cells);
    if (winner === "X") {
      endgame.textContent = 'Крестики побеждают';
      clear(cells);
    } else if (winner === 'O') {
      endgame.textContent = 'Нолики побеждают';
      clear(cells);
    } else if (!gamestatus(cells)) {
      endgame.textContent = 'Ничья';
      clear(cells);
    }
    i++;
  }

  function clear(cells) {
    for (let cell of cells) {
      cell.textContent = '';
      cell.addEventListener('click', step);
    }
  }

  function win(cells) {
    let rows = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let row of rows) {
      let [a, b, c] = row;
      if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
        return cells[a].textContent;
      }
    }
    return null;
  }

  function gamestatus(cells) {
    for (let cell of cells) {
      if (cell.textContent === '') {
        return true;
      }
    }
    return false;
  }

  for (let cell of cells) {
    cell.addEventListener('click',step);
}
}