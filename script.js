// quando a pagina carregar vai ter selecionada a cor da class
window.onload = funtion(corDoPixel){
document.getElementsByClassName("selected")
}

// qunaod clicar na paleta vai selecionar a cor 

button.addEventListener('click', mudarCorPixel);

tiposDeCor(["black","red","purple","green"]);

function (mudarCorPixel){
    let pixel = document.getElementsByClassName("pixel");
    for (let i of pixel){
        i.addEventListener("click",function(localClick)) {
            console.log("oi"):
            let corEscolhida = document.querySelector(".selected")
            ler cor = corEscolhida.style.backgroundcolor;
            console.log(corEscolhida);

            console.log(cor);
            localClick.target.style.color = cor;
        }
    }
}
mudarCorPixel();