let colors = document.getElementsByClassName('color');
let pixels = document.getElementsByClassName('pixel');
let pBoard = document.getElementById('pixel-board');

colors[0].style.backgroundColor = 'black';
colors[1].style.backgroundColor = 'red';
colors[2].style.backgroundColor = 'blue';
colors[3].style.backgroundColor = 'green';

function createGrid(size) {
  pBoard.style.setProperty('--size', size);
  for (let i = 0; i < size * size; i+=1) {
    let divPixel = document.createElement('div');
    divPixel.classList.add('pixel');
    pBoard.appendChild(divPixel);
  }
}

createGrid(5);



/* let colorPixel = document.querySelector('pixelColored');
let line = '';

function createBox(className) {
    let box = document.createElement("div");
    box.className = className;
    return box;
  }
  
for(let i = 0; i < pixels.length; i+=1) {
    line = line + colorPixel;
    
}

document.querySelector('pixelColored')
 */