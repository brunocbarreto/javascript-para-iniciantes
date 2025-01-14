// Exercícios de Formulários e Validações

// 2 - Validação de e-mail

let campoEmail = document.getElementById("email");

document
  .getElementById("meuFormulário")
  .addEventListener("submit", function (event) {

    event.preventDefault();

    if (!campoEmail.value.includes("@") || !campoEmail.value.includes(".")) {
      alert("Por favor, insira um e-mail válido.");
      return false;
    } else {
      alert("Formulário submetido com sucesso!");
    }
});