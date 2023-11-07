const nome = "Guilheme";

function getEventoAleatorio(){
    const numeroAleatorio = Math.floor(Math.random() * 3);

    if(numeroAleatorio === 0){
        return "Maratona";
    } else if(numeroAleatorio === 1){
        return "Triathlon";
    }else{
        return "Pentathlon";
    };
};

function getDiasTreino(eventoEscolhido) {
    if (eventoEscolhido === "Maratona") {
      return "50";
    } else if (eventoEscolhido === "Triathlon") {
      return "100";
    } else if (eventoEscolhido === "Pentathlon") {
      return "200";
    };
  };


function logEvento(nome, evento) {
console.log(`${nome} vai participar do evento: ${evento}`);
};

function logTempo(nome, dias) {
console.log(`${nome} terá ${dias} dias para se preparar.`);
};


const eventoEscolhido = getEventoAleatorio();
const diasDeTreino = getDiasTreino(eventoEscolhido);

logEvento(nome, eventoEscolhido);
logTempo(nome, diasDeTreino);

