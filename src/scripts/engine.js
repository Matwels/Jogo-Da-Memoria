const emojis = [
   "😴",
   "😴",
   "🤑",
   "🤑",
   "👻",
   "👻",
   "💩",
   "💩",
   "😻",
   "😻",
   "🐕",
   "🐕",
   "🍕",
   "🍕",
   "🍙",
   "🍙"
];
let openCards = [];

/*faz uma função de randomização dos emojis*/
let shuffleEmojis = emojis.sort(()=> (Math.random() > 0.5) ? 2: -1); 

for (let i = 0; i < emojis.length; i++) {
    /*cria um elemento div no html*/
    let box = document.createElement("div");  
     /*atribui o nome da classe ao elemento criado*/
    box.className = "item"; 
    /*vai guardar o emojis randomizados no elemento criado*/
    box.innerHTML = shuffleEmojis[i];  
     /* criar comportamento de click*/
    box.onclick = handleClick; 
    document.querySelector(".game").appendChild(box);
    
}
function handleClick(){

    /*cria um classe para guardar cartas abertas, comparando com if*/
    if (openCards.length < 2){
        this.classList.add("boxOpen");

        /*guarda no vetor*/
        openCards.push(this); 
    }

    /* chama função que verifica se deu match*/
    if (openCards.length == 2){
        setTimeout(checkMatch, 500);

    }
}

function checkMatch(){
    /* adiciona classe boxMatch se a condição if for True, mantendo a carta a mostra */
    if(openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch"); 
        openCards[1].classList.add("boxMatch");
    /* remove a classe boxOPen se a consição if for False, virando de volta a carta */
    } else {
        
        openCards[0].classList.remove("boxOpen"); 
        openCards[1].classList.remove("boxOpen");
    }

    /* reseta para poder escolher outras cartas */
    openCards = []; 
     
    /* para verificar se virou todas as cartas */
    if (document.querySelectorAll(".boxMatch").length == emojis.length) { 
        alert("Parabens!!! Você venceu o jogo")
    }
}