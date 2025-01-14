// OBS: Este arquivo .js é dividido em seções. Cada seção é composta por um comentário de linha, um número, hífen e o título da seção antes da própria seção.
// Para fazer sentido mantenha ativa apenas uma seção (Você pode comentar as outras seções enquanto executa uma seção).

// 1 - Selecionando Elementos

let introduction = document.getElementById("title_1");

introduction.style.color = "blue"; // Verificando se o elemento foi selecionado

let paragraphs = document.getElementsByClassName("paragraph");

// Verificando se o elemento foi selecionado (Linhas 14 a 20)

paragraphs[0].innerHTML = "Hello World!";

paragraphs[1].innerHTML = "Bruno";

paragraphs[2].innerHTML = "(99)97777-7777";

paragraphs[3].innerHTML = "e-mail@provider.com";

function myFunction() {
  const list = document.getElementsByTagName("div")[0];
  list.getElementsByTagName("p")[1].innerHTML = "+55(11)97777-6666";
}

document.querySelector("p").style.backgroundColor = "red";

// 2 - Exercícios de Manipulação de Conteúdo

let text = document.getElementById("myBtn").textContent;

// Get Element by Id

document.getElementById("title_1").innerHTML = text;

// Get Elements By Class Name

let paragraphs2 = document.getElementsByClassName("paragraph");

paragraphs2[0].innerHTML = text;

paragraphs2[1].innerHTML = text;

paragraphs2[2].innerHTML = text;

paragraphs2[3].innerHTML = text;

// Get Elements By Tag Name

function myFunction() {
  const list = document.getElementsByTagName("div")[0];
  list.getElementsByTagName("p")[0].innerHTML = text;
  list.getElementsByTagName("p")[1].innerHTML = "+55(11)97777-6666";
}

// Query Selector

document.querySelector("h1").innerHTML = text;

// 3 - Manipulação de Atributos

let link = document.querySelector("a");
link.setAttribute("href", "https://www.novosite.com");

let imgSRC = document.querySelector("img");
imgSRC.setAttribute("src", "corporate-web-site-template.jpg");
imgSRC.setAttribute("width", "800");
imgSRC.setAttribute("height", "284");

// 4 - Manipulação de Estilos

document.getElementById("title_1").style.color = "orange";

let paragraph_2 = document.getElementById("paragraph-2");

paragraph_2.style.color = "gray";

let div = document.getElementById("div");

div.style.backgroundColor = "blue";

// 5 - Trabalhando com Eventos

function myFunction() {
  const list = document.getElementsByTagName("div")[0];
  list.getElementsByTagName("p")[0].innerHTML = "Bruno Barreto";
}
