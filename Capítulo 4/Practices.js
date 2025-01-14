// =========================================================================

/* function saudacao (nome)
{
   console.log('Olá, ' + nome + '!');
}

saudacao('Bruno'); */

// =========================================================================

/* let cor = 'Verde';// variável global

function mostrarCor()
{
   console.log(cor);
}

mostrarCor(cor);// Imprime: "Verde" */

// =========================================================================

/* function mostrarCarro()
{
   let carro = "Audi";// variável local
   console.log(carro);
}

mostrarCarro();// Imprime: "Audi"
console.log(carro);// Erro: carro is not defined */

// =========================================================================

/* function testarLet()
{
   if(true)
   {
      let y = 5;// y tem escopo de bloco
   }

   console.log(y);// Erro: y is not defined
}

testarLet(); */

// =========================================================================

/* const numeros = [1,2,3,4,5];
const quadrados = numeros.map(function(n){
   return n * n;
})

console.log(quadrados);// Imprime: [1, 4, 9, 16, 25] */

// =========================================================================

/* function cumprimentar(callback)
{
   console.log('Olá');
   callback();
}

function dizerNome()
{
   console.log('Bruno');
}

cumprimentar(dizerNome); */

// =========================================================================



// =========================================================================