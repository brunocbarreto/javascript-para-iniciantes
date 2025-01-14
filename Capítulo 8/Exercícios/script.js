// 1 - Trabalhando com JSON:

/* let person = {
   nome: 'Natalia',
   idade: 30,
   cidade:'São Paulo',
   Available: true,
   Itens: ["Clothes","Watch", "Phone", "Keys", "Wallet"],
   SoftSkills: {
      Comunication: true,
      Leadership: true,
      Focus: true,
      FavoriteSkill: "Focus"
   }
};

let personString = JSON.stringify(person);

console.log(personString);
console.log("");

let obj = JSON.parse(personString);

console.log(obj); */

// 2 - Salvando Dados do Armazenamento Local:

/* let messageInput = document.getElementById("message");

document.getElementById("formMessage").addEventListener("submit", function(event) {

   event.preventDefault();

localStorage.setItem('message', messageInput.value);
let messageData = localStorage.getItem('message');
console.log(messageData);

}); */

// 3 - Recuperando Dados do Armazenamento Local

let messageInput = document.getElementById("message");

document.getElementById("formMessage").addEventListener("submit", function(event) {

   event.preventDefault();

localStorage.setItem('message', messageInput.value);
let messageData = localStorage.getItem('message');
console.log(messageData);

});

document.getElementById("btn-001").addEventListener("click",function(){
   let text = localStorage.getItem("message");
   alert(text);
})

// 4 - Exclusão de Dados do Armazenamento Local 

document.getElementById("btn-002").addEventListener("click",function(){
   localStorage.removeItem("message");
   document.getElementById("message").value = "";
})

// 5 - Armazenando Objetos no Armazenamento Local:

let objetoPessoa = {
   nome: "José",
   idade: 25
}

let jsonPessoa = JSON.stringify(objetoPessoa);
localStorage.setItem("objetoPessoa", jsonPessoa);

let objetoPessoa2 = localStorage.getItem("objetoPessoa");

let objetoPessoa3 = JSON.parse(objetoPessoa2);

console.log(objetoPessoa3);


