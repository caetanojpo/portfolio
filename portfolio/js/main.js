//Função que expande o "Sobre Mim"
const saibaMais = document.querySelector(".saibaMais");
const btnSobre = document.querySelector("#quisSaber");

btnSobre.addEventListener("click",  function (e){
    saibaMais.classList.add('soubeMais')
    btnSobre.remove();
    const elementos = [
        {tag: 'p', texto: 'Através de estudos com Direito Digital e LGPD conheci a área da T.I., que foi o que despertou minha paixão pela computação, por isso, pretendo poder conciliar as duas disciplinas. Essa transição está se mostrando mais um desafio, dos muitos que ainda vou enfrentar, que estou determinado a conquistar!'}
    ];
    const {tag, texto} = elementos[0];
    const btnCria = document.createElement(tag);
    btnCria.innerHTML = texto;
    saibaMais.appendChild(btnCria);
});
