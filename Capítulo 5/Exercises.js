
// Exercícios de Objetos e Arrays

// Manipulação de Objetos

/* let estudante = {
   nome: 'Bruno',
   idade: 31,
   curso: 'Análise e Desenvolvimento de Sistemas'
};

// console.log(estudante)

estudante.idade = 32;

console.log(estudante) */

// Acicionando propriedades a um Objeto

/* let estudante = {
   nome: 'Bruno',
   idade: 31,
   curso: 'Análise e Desenvolvimento de Sistemas'
};

estudante.semestre = 2

console.log(estudante) */

// Manipulação de Arrays

/* frutas = ["Manga", "Goiaba", "Laranja"];

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

frutas.push("Mamão");
console.log(frutas);

frutas.shift();
console.log(frutas); */

// Métodos de Arrays-join e slice

/* frutas = ["Manga", "Goiaba", "Laranja"];

stringFrutas = frutas.join(', ')
console.log(stringFrutas) */

/* frutas = ["Manga", "Goiaba", "Laranja"];

frutasSelecionadas = frutas.slice(1,3);

console.log(frutasSelecionadas); */

// Métodos de Iteração - map

let numeros = [2,3,4,5,6];

let numerosAoQuadrado = numeros.map(function(numero){
   return numero * numero;
});

console.log(numerosAoQuadrado)

