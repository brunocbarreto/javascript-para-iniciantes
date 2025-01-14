// Exercício 01

/* function funcaoTimeOut() {

   return new Promise((resolve) => {
   
      setTimeout(() => {
         console.log("Tempo esgotado!")
         resolve()
      }, 2000)
   
   })

}

async function funcaoPrincipal() {

   console.log("Início")

   await funcaoTimeOut()

   console.log("Fim")

}

funcaoPrincipal() */

// Exercício 02

/* fetch('https://jsonplaceholder.typicode.com/users')
.then(resposta => resposta.json())
.then(posts => console.log(posts))
.catch(erro => console.log('Erro:',erro)); */

// Exercício 03

/* async function getTituloPostUm(){
   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
   const data = await response.json();
   return data[0].title;
}

getTituloPostUm().then(console.log); */

// Exercício 04

/* const novoPost = {
   title: 'Meu Post',
   body: 'Este é o corpo do meu post',
   userId: 1
   };
   
   fetch('https://jsonplaceholder.typicode.com/posts',{
      method:'POST',
      headers: {
         'Content-Type':'application/json'
      },
      body:JSON.stringify(novoPost)
   })
   .then(resposta => resposta.json())
   .then(post => console.log(post))
   .catch(erro => console.log('Erro: ',erro)); */

// Exercício 5

function retornaNumero(){
   return new Promise((resolve,reject) => {
      setTimeout(() => {
         resolve(10);
      },3000);
   });
}

retornaNumero()
  .then(value => console.log(value))
  .catch(error => console.error('Erro: ', error))
  .finally(() => console.log('Promise manipulada'));