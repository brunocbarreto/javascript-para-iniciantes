// Parte 1 - Selecionando e Manipulando Elementos do DOM

/* let heading = document.getElementById('main-heading');
heading.textContent = 'Novo título';

let div = document.getElementById('main');
div.innerHTML = '<p>Este é um novo parágrafo.</p>';

let link = document.querySelector('a');
link.setAttribute('href','https://www.novosite.com');

div.style.color = 'blue'; */

// Parte 2 - Adicionando Eventos a Elementos

/* let button = document.getElementById('myButton');

button.addEventListener('click',function(){
   console.log('O botão foi clicado!');
});

let paragraph = document.getElementById('myParagraph');

paragraph.addEventListener('mouseover',function(){
   console.log('O mouse está sobre o parágrafo!');
});

let input = document.getElementById('myInput');

input.addEventListener('change', function(){
   console.log(`O valor do input foi alterado para: ${this.value}`);
});

let form = document.getElementById('myForm');

form.addEventListener('submit', function(event){
   event.preventDefault();

   console.log('Formulário submetido!');
});

window.addEventListener('keydown',function(event){
   console.log(`Você pressionou a tecla: ${event.key}`);
}); */

// Parte 3 - Alterando Estilos e Classes

/* let meuElemento = document.getElementById('meuElemento');

meuElemento.style.color="green";

meuElemento.style.fontSize = "20px";

meuElemento.style.backgroundColor = "#f0f0f0";

// meuElemento.classList.add("vermelho");

// meuElemento.classList.remove("vermelho");

// meuElemento.classList.add("verde-fundocinza-20px");

meuElemento.classList.toggle("verde-fundocinza-20px");

let estiloComputado = window.getComputedStyle(meuElemento);

console.log(estiloComputado.color);
console.log(estiloComputado.fontSize);
console.log(estiloComputado.backgroundColor); */