const color = document.getElementsByClassName('color');

const paleta = document.getElementById('color-palette');

const quadroPixel = document.getElementById('pixel-board');

const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = document.createElement('div');
  const colunas = document.createElement('div');
  colunas.classList.add('one');
  quadroPixel.appendChild(colunas);
  const numeroPixels = [1, 2, 3, 4, 5];
  for (let i = 0; i < numeroPixels.length; i++) {
    numeroPixels[i] = document.createElement('div');
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.backgroundColor = 'white';
    colunas.appendChild(pixel);
  }
}

const input = document.getElementById('board-size');

const button2 = document.getElementById('generate-board');

const button = document.getElementById('clear-board');

const colorBlack = document.createElement('div');
colorBlack.classList.add('color');
colorBlack.classList.add('selected');
colorBlack.style.backgroundColor = 'black';
paleta.appendChild(colorBlack);

const color2 = document.createElement('div');
color2.classList.add('color');
color2.classList.add('colorM');
color2.style.backgroundColor = 'red';
paleta.appendChild(color2);

const color3 = document.createElement('div');
color3.classList.add('color');
color3.classList.add('colorM');
color3.style.backgroundColor = 'purple';
paleta.appendChild(color3);

const color4 = document.createElement('div');
color4.classList.add('color');
color4.classList.add('colorM');
color4.style.backgroundColor = 'green';
paleta.appendChild(color4);

button.addEventListener('click', () => {
  const cor = document.getElementsByClassName('pixel');
  for (let i = cor.length - 1; i >= 0; i--) {
    cor[i].style.backgroundColor = 'white';
  }
});

paleta.addEventListener('click', (event) => {
  const cor = document.querySelector('.selected');
  cor.classList.remove('selected');
  event.target.classList.add('selected');
});

quadroPixel.addEventListener('click', (event) => {
  const selecionada = document.querySelector('.selected');
  event.target.style.backgroundColor = selecionada.style.backgroundColor;
});

function remover() {
  const pixels = document.getElementsByClassName('one');
  for (let i = pixels.length - 1; i >= 0; i--) {
    quadroPixel.removeChild(pixels[i]);
  } return quadroPixel;
}

button2.addEventListener('click', () => {
  let valor = input.value;
  if (valor <= 0 || valor == null) {
    alert('Board inválido!');
    input.value = '';
  } else {
    if (valor <= 5) {
      valor = 5;
    } if (valor >= 50) {
      valor = 50;
    }
    const quadroPixel = remover();
    for (let i = 0; i < valor; i += 1) {
      valor[i] = document.createElement('div');
      const vertical = document.createElement('div');
      vertical.classList.add('one');
      quadroPixel.appendChild(vertical);
      for (let i = 0; i < valor; i += 1) {
        valor[i] = document.createElement('div');
        const horizontal = document.createElement('div');
        horizontal.classList.add('pixel');
        horizontal.style.backgroundColor = 'white';
        vertical.appendChild(horizontal);
      }
    } input.value = '';
  }
});

window.onload = function getRamdomColor() {
  const pixelCor = document.getElementsByClassName('colorM');
  for (let i = 0; i < pixelCor.length; i += 1) {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    pixelCor[i].style.backgroundColor = randomColor;
  }
};
