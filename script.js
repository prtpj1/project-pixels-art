let colors = document.getElementsByClassName('color');
let pixels = document.getElementsByClassName('pixel');
let pBoard = document.getElementById('pixel-board');

colors[0].style.backgroundColor = 'black';
colors[1].style.backgroundColor = 'red';
colors[2].style.backgroundColor = 'blue';
colors[3].style.backgroundColor = 'green';

colors[0].classList.add('selected');

function pickColor(event) {
  let colorSelected = document.querySelector('.selected');
  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

colors[0].addEventListener('click', pickColor);
colors[1].addEventListener('click', pickColor);
colors[2].addEventListener('click', pickColor);
colors[3].addEventListener('click', pickColor);

function createGrid(size) {
  pBoard.style.setProperty('--size', size);
  let selectedPixel = document.getElementsByClassName('color selected');
  for (let i = 0; i < size * size; i += 1) {
    let divPixel = document.createElement('div');
    divPixel.classList.add('pixel');

    divPixel.addEventListener('click', function (event) {
      let color = selectedPixel[0].style.backgroundColor;
      event.target.style.backgroundColor = color;
    });

    pBoard.appendChild(divPixel);
  }
}
createGrid(5);
