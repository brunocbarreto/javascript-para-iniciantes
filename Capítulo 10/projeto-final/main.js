const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');
const filterInput = document.querySelector('#filter-input');

function storeTaskInLocalStorage(task){
   let tasks;

   if(localStorage.getItem('tasks') === null){
      tasks = [];
   } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
   }

   tasks.push(task);
   localStorage.setItem('tasks',JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(taskItem){
   let tasks;

   if(localStorage.getItem('tasks') === null){
      tasks = [];
   } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
   }

   let taskText = taskItem.textContent.slice(0,-1);

   tasks.forEach(function(task,index){
      if(taskText === task){
         tasks.splice(index,1);
      }
   });

   localStorage.setItem('tasks',JSON.stringify(tasks));
}

function addTask(e){
   e.preventDefault();

   if(taskInput.value.trim()){
      const li = document.createElement('li');
      li.textContent = taskInput.value;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
      deleteButton.classList.add('delete');
      li.appendChild(deleteButton);

      taskList.appendChild(li);

      storeTaskInLocalStorage(taskInput.value);

      taskInput.value = "";
   } else {
      alert('Por favor, digite uma tarefa.');
   }
}

function deleteTask(e){
   if(e.target.classList.contains('delete')){
      if(confirm('Tem certeza de que deseja excluir esta tarefa?')){
         e.target.parentElement.remove();

         removeTaskFromLocalStorage(e.target.parentElement);
      }
   }
}

function getTasks () {
   let tasks;

   if(localStorage.getItem('tasks') === null){
      tasks = [];
   } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
   }

   tasks.forEach(function(task){
      const li = document.createElement('li');
      li.textContent = task;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
      deleteButton.classList.add('delete');

      li.appendChild(deleteButton);

      taskList.appendChild(li);
   });
}

function filterTasks(e){
   const text = e.target.value.toLowerCase();

   document.querySelectorAll('#task-list li').forEach(function(task){
      const item = task.firstChild.textContent;
      
      if(item.toLowerCase().indexOf(text) !== -1){
         task.style.display = 'block';
      } else {
         task.style.display = 'none';
      }
   });
}

document.addEventListener('DOMContentLoaded',getTasks);

filterInput.addEventListener('keyup', filterTasks);

taskList.addEventListener('click',deleteTask);

form.addEventListener('submit',addTask);