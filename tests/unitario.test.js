function teste_gerarFrase_retornaFraseValida() {
  const frase = gerarFraseAleatoria();
  if (!frases.includes(frase)) throw new Error("Frase inválida");
}

function teste_gerarFrase_tipoString() {
  const frase = gerarFraseAleatoria();
  if (typeof frase !== "string") throw new Error("Frase não é string");
}

function teste_gerarFrase_naoVazia() {
  const frase = gerarFraseAleatoria();
  if (frase.trim() === "") throw new Error("Frase está vazia");
}

function teste_gerarFrase_diferenteVezes() {
  const a = gerarFraseAleatoria();
  const b = gerarFraseAleatoria();
  if (a === b) console.warn("Frases iguais (pode ser aleatório, mas improvável)");
}

function teste_frases_minimoDez() {
  if (frases.length < 10) throw new Error("Menos de 10 frases disponíveis");
}

function teste_frases_todasSaoString() {
  const erradas = frases.filter(f => typeof f !== "string");
  if (erradas.length > 0) throw new Error("Nem todas são strings");
}

function teste_frases_semNullsOuUndefined() {
  if (frases.some(f => f == null)) throw new Error("Contém null ou undefined");
}

function teste_frases_unicas() {
  const set = new Set(frases);
  if (set.size !== frases.length) throw new Error("Frases repetidas detectadas");
}

function teste_frases_comMaisDe10Letras() {
  if (frases.some(f => f.length < 10)) throw new Error("Frase com menos de 10 letras");
}

function teste_frases_semNumeros() {
  if (frases.some(f => /\d/.test(f))) throw new Error("Frase contém número");
}

window.testesUnitarios = {
  teste_gerarFrase_retornaFraseValida,
  teste_gerarFrase_tipoString,
  teste_gerarFrase_naoVazia,
  teste_gerarFrase_diferenteVezes,
  teste_frases_minimoDez,
  teste_frases_todasSaoString,
  teste_frases_semNullsOuUndefined,
  teste_frases_unicas,
  teste_frases_comMaisDe10Letras,
  teste_frases_semNumeros
};
