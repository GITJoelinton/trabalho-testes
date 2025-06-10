const frases = [
  "Acredite em si mesmo e todo o resto virá naturalmente.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Não espere por oportunidades, crie-as.",
  "A persistência é o caminho do êxito.",
  "Grandes realizações começam com um simples passo.",
  "Seja a mudança que você deseja ver no mundo.",
  "Não desista, as melhores coisas levam tempo.",
  "Você é mais forte do que pensa.",
  "O fracasso é apenas uma oportunidade para recomeçar com mais experiência.",
  "Transforme seus sonhos em planos."
];

const historicoLista = document.getElementById("historico-lista");
const fraseAtualElemento = document.getElementById("fraseAtual");
const mensagemSection = document.getElementById("mensagemFeedback");
const mensagemTexto = document.getElementById("mensagemTexto");

const inputFrasePersonalizada = document.getElementById("inputFrasePersonalizada");
const btnAdicionarFrase = document.getElementById("btnAdicionarFrase");

function gerarFraseAleatoria() {
  const indice = Math.floor(Math.random() * frases.length);
  return frases[indice];
}

function adicionarHistorico(texto) {
  const li = document.createElement("li");
  li.textContent = texto;
  historicoLista.appendChild(li);
}

function mostrarMensagem(texto) {
  mensagemTexto.textContent = texto;
  mensagemSection.style.display = "block";
}

function esconderMensagem() {
  mensagemSection.style.display = "none";
}

document.getElementById("btnGerarFrase").addEventListener("click", () => {
  const frase = gerarFraseAleatoria();
  fraseAtualElemento.textContent = frase;
  adicionarHistorico(frase);

  if (document.getElementById("mostrarMensagens").checked) {
    mostrarMensagem("Frase gerada com sucesso!");
  } else {
    esconderMensagem();
  }
});

btnAdicionarFrase.addEventListener("click", () => {
  const novaFrase = inputFrasePersonalizada.value.trim();

  if (novaFrase.length === 0) {
    alert("Por favor, digite uma frase antes de adicionar.");
    return;
  }

  frases.push(novaFrase);

  fraseAtualElemento.textContent = novaFrase;
  adicionarHistorico(novaFrase);

  inputFrasePersonalizada.value = "";

  if (document.getElementById("mostrarMensagens").checked) {
    mostrarMensagem("Frase personalizada adicionada com sucesso!");
  } else {
    esconderMensagem();
  }
});

document.getElementById("limparHistoricoBtn").addEventListener("click", () => {
  historicoLista.innerHTML = "";
  esconderMensagem();
});
