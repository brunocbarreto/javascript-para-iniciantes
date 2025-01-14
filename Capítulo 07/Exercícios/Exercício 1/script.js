// Exercícios de Formulários e Validações

// 1 - Verificação de entrada vazia:

let campoNome = document.getElementById("nome");

document.getElementById("meuFormulário").addEventListener("submit", function(event) {

    event.preventDefault();

    if (campoNome.value === "") {
      alert("Por favor, insira seu nome.");
      return false;
    } else {
      alert("Formulário submetido com sucesso!");
    }
  });
  
  
  