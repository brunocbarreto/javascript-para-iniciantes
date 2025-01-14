// Exercícios de Formulários e Validações

// 5 - Formulário de Feedback

let campoNome = document.getElementById("nome");
let campoEmail = document.getElementById("email");
let campoFeedback = document.getElementById("feedback");

let nomeValidado = false;
let emailValidado = false;
let feedbackValidado = false;

document.getElementById("formulárioFeedback").addEventListener("submit", function(event) {

    event.preventDefault();

    if (campoNome.value === "") {
      alert("Por favor, insira seu nome.");
      return false;
    } else {
      nomeValidado = true;
    }

    if (!campoEmail.value.includes("@") || !campoEmail.value.includes(".")) {
      alert("Por favor, insira um e-mail válido.");
      return false;
    } else {
      emailValidado = true;
    }

    if (campoFeedback.value === "") {
      alert("Por favor, preencha o campo Feedback.");
      return false;
    } else {
      feedbackValidado = true;
    }

    if (nomeValidado && emailValidado && feedbackValidado)
    {
      alert("Obrigado pelo seu feedback!");
      nomeValidado = false;
      emailValidado = false;
      feedbackValidado = false;
    }
});


