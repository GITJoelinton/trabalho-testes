function teste_1_adicionaItemHistorico() {
  const hist = document.getElementById("historico-lista");
  const count = hist.children.length;
  adicionarHistorico("Teste 1");
  if (hist.children.length !== count + 1) throw new Error("Não adicionou");
}

function teste_2_ultimoItemTextoCorreto() {
  const texto = "Teste 2";
  adicionarHistorico(texto);
  const ult = document.getElementById("historico-lista").lastChild.textContent;
  if (ult !== texto) throw new Error("Texto incorreto");
}

function teste_3_limparHistorico() {
  const hist = document.getElementById("historico-lista");
  adicionarHistorico("Limpável");
  hist.innerHTML = "";
  if (hist.children.length !== 0) throw new Error("Não limpou");
}

function teste_4_mostrarMensagem() {
  mostrarMensagem("Mensagem de teste");
  const msg = document.getElementById("mensagemFeedback");
  if (msg.style.display !== "block") throw new Error("Não mostrou mensagem");
}

function teste_5_esconderMensagem() {
  esconderMensagem();
  const msg = document.getElementById("mensagemFeedback");
  if (msg.style.display !== "none") throw new Error("Não escondeu mensagem");
}

function teste_6_toggleFeedbackVisivel() {
  document.getElementById("mostrarMensagens").checked = true;
  mostrarMensagem("Teste");
  if (document.getElementById("mensagemFeedback").style.display !== "block") {
    throw new Error("Feedback deveria aparecer");
  }
}

function teste_7_toggleFeedbackInvisivel() {
  document.getElementById("mostrarMensagens").checked = false;
  esconderMensagem();
  if (document.getElementById("mensagemFeedback").style.display !== "none") {
    throw new Error("Feedback deveria desaparecer");
  }
}

function teste_8_fraseGeradaVaiParaDOM() {
  document.getElementById("btnGerarFrase").click();
  const atual = document.getElementById("fraseAtual").textContent;
  if (!frases.includes(atual)) throw new Error("Frase não atualizada no DOM");
}

function teste_9_fraseGeradaVaiParaHistorico() {
  const antes = document.getElementById("historico-lista").children.length;
  document.getElementById("btnGerarFrase").click();
  const depois = document.getElementById("historico-lista").children.length;
  if (depois <= antes) throw new Error("Frase não adicionada ao histórico");
}

function teste_10_checkboxFunciona() {
  const checkbox = document.getElementById("mostrarMensagens");
  checkbox.checked = !checkbox.checked;
  const esperado = checkbox.checked;
  if (document.getElementById("mostrarMensagens").checked !== esperado) {
    throw new Error("Checkbox não atualizou");
  }
}

window.testesComponente = {
  teste_1_adicionaItemHistorico,
  teste_2_ultimoItemTextoCorreto,
  teste_3_limparHistorico,
  teste_4_mostrarMensagem,
  teste_5_esconderMensagem,
  teste_6_toggleFeedbackVisivel,
  teste_7_toggleFeedbackInvisivel,
  teste_8_fraseGeradaVaiParaDOM,
  teste_9_fraseGeradaVaiParaHistorico,
  teste_10_checkboxFunciona
};
