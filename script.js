let quadroPixel = document.getElementById("pixel-board");

let color = document.getElementsByClassName("color");

const input = document.getElementById("board-size");

const button2 = document.getElementById("generate-board");

let paleta = document.getElementById("color-palette");

let pixel = document.getElementsByClassName("pixel");

let button = document.getElementById("clear-board");

let colorBlack = document.createElement("div");
colorBlack.classList.add("color");
colorBlack.classList.add("selected");
colorBlack.style.backgroundColor = "black";
paleta.appendChild(colorBlack);

let colorRed = document.createElement("div");
colorRed.classList.add("color");
colorRed.style.backgroundColor = "red";
paleta.appendChild(colorRed);

let colorPurple = document.createElement("div");
colorPurple.classList.add("color")
colorPurple.style.backgroundColor = "purple";
paleta.appendChild(colorPurple);

let colorGreen = document.createElement("div");
colorGreen.classList.add("color");
colorGreen.style.backgroundColor = "green";
paleta.appendChild(colorGreen);

button.addEventListener('click', function(){
    let cor = document.getElementsByClassName("pixel");
    for (let i = cor.length - 1; i >= 0; i--){
        cor[i].style.backgroundColor = "white";
        }
});

paleta.addEventListener('click', function(event){
 let cor = document.querySelector('.selected');
    cor.classList.remove('selected');
    event.target.classList.add("selected");
});

quadroPixel.addEventListener('click',function (event){
    let selecionada = document.querySelector(".selected");
    event.target.style.backgroundColor = selecionada.style.backgroundColor;
    });

