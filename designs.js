function makeGrid(height, width) {
    const table = document.getElementById("pixelCanvas");
    let gridTable = '';
    for (let i = 0; i < height; i++) {
        gridTable += '<tr class="row-' + i + '">';
        for (let j = 0; j < width; j++) {
            gridTable += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
        }
        gridTable += '</tr>';
    }
    table.innerHTML = gridTable;
    addOnClickEventForCells();
}

function addOnClickEventForCells() {
    const colorPick = document.getElementById("colorPicker");
    const squares = document.getElementsByClassName('cell');
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function (event) {
            let selectedCell = event.target;
            selectedCell.style.backgroundColor = colorPick.value;
        });
    }
}

document.getElementById('sizePicker').onsubmit = function () {
  event.preventDefault();
  const height = document.getElementById('inputHeight').value;
  const width = document.getElementById('inputWidth').value;
  makeGrid(height, width);
};
makeGrid(25, 30);
