//Função que expande o "Sobre Mim"
const saibaMais = document.querySelector(".saibaMais");
const btnSobre = document.querySelector("#quisSaber");

btnSobre.addEventListener("click",  function (e){
    saibaMais.classList.add('soubeMais')
    btnSobre.remove();
});