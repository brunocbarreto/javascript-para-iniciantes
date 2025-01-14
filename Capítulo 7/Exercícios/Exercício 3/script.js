// Exercícios de Formulários e Validações

// 3 - Validação de senha:

let campoNome = document.getElementById("nome");
let campoEmail = document.getElementById("email");
let campoSenha = document.getElementById("pass");

let nomeValidado = false;
let emailValidado = false;
let SenhaValidada = false;

document
  .getElementById("formCriacaoConta")
  .addEventListener("submit", function (event) {
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

    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!regex.test(campoSenha.value)) {
      alert(
        "A senha precisa de pelo menos 8 caracteres, incluindo uma letra e um número."
      );
    } else {
      SenhaValidada = true;
    }

    if (nomeValidado && emailValidado && SenhaValidada) {
      alert("Conta criada com sucesso!");
      nomeValidado = false;
      emailValidado = false;
      SenhaValidada = false;
    }
  });