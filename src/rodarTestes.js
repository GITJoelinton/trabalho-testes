function rodarTestesUnitarios() {
  const resultados = [];

  for (const nomeTeste in window.testesUnitarios) {
    try {
      window.testesUnitarios[nomeTeste]();
      resultados.push({ nome: nomeTeste, status: "passou" });
    } catch (e) {
      resultados.push({ nome: nomeTeste, status: "falhou", erro: e.message });
    }
  }

  mostrarResultado("Testes Unitários", resultados);
}

function rodarTestesComponent() {
  const resultados = [];

  for (const nomeTeste in window.testesComponent) {
    try {
      window.testesComponent[nomeTeste]();
      resultados.push({ nome: nomeTeste, status: "passou" });
    } catch (e) {
      resultados.push({ nome: nomeTeste, status: "falhou", erro: e.message });
    }
  }

  mostrarResultado("Testes de Componente", resultados);
}

function mostrarResultado(titulo, resultados) {
  const container = document.getElementById("testes-resultados");
  container.innerHTML = `<strong>${titulo}:</strong><ul></ul>`;
  const ul = container.querySelector("ul");

  resultados.forEach(({ nome, status, erro }) => {
    const li = document.createElement("li");
    li.textContent = `${nome}: ${status}`;
    li.className = status === "passou" ? "test-pass" : "test-fail";

    if (erro && status === "falhou") {
      li.textContent += ` - ${erro}`;
    }

    ul.appendChild(li);
  });
}

document.getElementById("rodarTestesUnitBtn").addEventListener("click", rodarTestesUnitarios);
document.getElementById("rodarTestesComponentBtn").addEventListener("click", rodarTestesComponent);
