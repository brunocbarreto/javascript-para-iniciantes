// Exercícios de Formulários e Validações

// 4 - Verificação de acordo

let checkBox = document.getElementById("meuCheckbox");

document.getElementById("meuFormulário").addEventListener("submit", function(event) {

    event.preventDefault();

    if (!checkBox.checked) {
      alert("Você precisa concordar com os termos e condições para continuar.");
      return false;
    } else {
      alert("Formulário submetido com sucesso!");
    }
  });