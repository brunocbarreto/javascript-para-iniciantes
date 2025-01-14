// Prática 01
/*
function greeting(name){
   alert('Olá ' + name);
}

function processUserInput(callback){
   var name = prompt('Por favor, insira seu nome.');
   callback(name);
}

processUserInput(greeting);
*/

// Prática 02

/* let promise = new Promise((resolve,reject) => {
   let condition = true;

   if(condition){
      resolve("Operação concluída com sucesso!");

   } else {
      reject("Operação falhou!");
   }
});

promise
.then(message => console.log(message))
.catch(errorMessage => console.log(errorMessage)); */

// Prática 03

// Realizando um Request a uma API Real

/* fetch('https://jsonplaceholder.typicode.com/posts')
.then(resposta => resposta.json())
.then(postagens => console.log(postagens))
.catch(erro => console.log('Erro:',erro)); */

const novaPostagem = {
title: 'Minha nova postagem',
body: 'Este é o corpo da minha nova postagem.',
userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts',{
   method:'POST',
   headers: {
      'Content-Type':'application/json'
   },
   body:JSON.stringify(novaPostagem)
})
.then(resposta => resposta.json())
.then(postagem => console.log(postagem))
.catch(erro => console.log('Erro: ',erro));


