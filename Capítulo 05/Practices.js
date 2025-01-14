// Objetos

/* let carro = {
   marca: 'Audi',
   modelo: 'A3 Sedan',
   ano: 2020,
   ligar: function () {
      console.log('O carro está ligado')
   }
};

console.log(carro.marca)
console.log(carro['modelo'])

carro.cor = 'Branco'
console.log(carro.cor)

carro.ano = 2024
console.log(carro['ano'])

delete carro.cor
console.log(carro.cor) */

// Array

/* let numeros = [1,2,3,4,5];
let nomes = ["Ana", "Beatriz", "Carlos"];
let misto = [1, "dois", true, [3,4], {nome:"João", idade: 30}]

console.log(misto[4]) */

/* let frutas = ["maçã", "banana", "cereja"]
// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);

// frutas[1]="morango";
// console.log(frutas);

frutas.shift();
// console.log(frutas);

frutas.unshift("manga");
// console.log(frutas);

frutas.splice(1,0,"kiwi")
// console.log(frutas);

let frutasTropicais = frutas.slice(0,2);
// console.log(frutasTropicais)

let frutasString = frutas.join(", ");
console.log(frutasString); */

// push

/* let frutas = ["maçã","banana"];

frutas.push("laranja");

console.log(frutas); */

// pop

/* let frutas = ["maçã","banana","laranja"];

console.log(frutas);

let frutaRemovida = frutas.pop();

console.log(frutaRemovida);

console.log(frutas); */

// unshift

/* let frutas = ["banana","laranja"];

frutas.unshift("maçã");

console.log(frutas); */

// shift

/* let frutas = ["maçã", "banana", "laranja"];

console.log(frutas);

let frutaRemovida = frutas.shift();

console.log(frutaRemovida);

console.log(frutas); */

// concat

/* let frutas1 = ["maçã", "banana"];
let frutas2 = ["laranja", "melancia"];
let todasFrutas = frutas1.concat(frutas2);
console.log(todasFrutas); */

// join

/* let frutas = ["maçã", "banana", "laranja"];
let frutasString = frutas.join(" - ");
console.log(frutasString) */

// Slice

/* let frutas = ["maçã", "banana", "laranja", "melancia"]
let algumasFrutas = frutas.slice(1,3)
console.log(algumasFrutas) */

// forEach

/* let frutas = ["maçã","banana","laranja"]
frutas.forEach(function(fruta){
   console.log(fruta)
}); */

// map

/* let numeros = [1,2,3,4];
let quadrados = numeros.map(function(numero){
   return numero * numero;
});

console.log(quadrados); */

// filter

let numeros = [1,2,3,4,5];
let numerosPares = numeros.filter(function(numero){
   return numero % 2 === 0;
});

console.log(numerosPares);



