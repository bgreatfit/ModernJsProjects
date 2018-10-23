const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const clearbtn = document.querySelector('.clear-tasks');
const taskList = document.querySelector('.collection');



//load all event listeners
loadEventListeners();
showTask();
function loadEventListeners(){
  form.addEventListener('submit',addTask);
  taskList.addEventListener('click',deleteTask);
  clearbtn.addEventListener('click',clearTask);
  filter.addEventListener('keydown',filterTask);
  
}
//persit Task 
function showTask(){
  // show Task
 //create TaskList
 const tasksRes = JSON.parse(localStorage.getItem('tasks'));
 if(tasksRes !== ''){
  tasksRes.forEach(function(task){
     const list = document.createElement('li');
     list.className = 'collection-item';
     list.appendChild(document.createTextNode(task));
   
   
     //create link
     const link = document.createElement('a');
     link.className = 'delete-item secondary-content';
     link.innerHTML = '<i class="fa fa-remove"></i>';
     list.appendChild(link);
     console.log(list);
     taskList.appendChild(list);
     console.log(task);
  })
 }
}
function addTask(e){
  e.preventDefault();
  const task = taskInput.value;
  if(task === ''){
    alert('Enter Task');
    return;
  }
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks',JSON.stringify(tasks));
  
 
};


// function addTask(e){
//   e.preventDefault();
//   new_task = taskInput.value;
//   if(new_task === ''){
//     alert('Enter Task');
//     return;
//   }
  
  



//   e.preventDefault();
// }

//delete Task
function deleteTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you Sure ?')){
        e.target.parentElement.parentElement.remove();
    }

  }
}


//clear Task
function clearTask(e){
  e.preventDefault();
 // taskList.innerHTML = '';
 while(taskList.firstChild){
       taskList.firstChild.remove();

 }
}

//filter Task
function filterTask(e){
   text = e.target.value.toLowerCase();
   li = document.querySelectorAll('.collection-item');
   li.forEach(function(task) {
      item = task.firstChild.textContent;
     if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
     }else{
      task.style.display = 'none';
     }
   });
}









// let lists = document.querySelectorAll('.collection-item');
// lists.forEach(function(item,index){
//  item.firstElementChild.addEventListener('click',onclick);
// });
// let ul = document.querySelector('.collection').addEventListener('click',onclick);
// function onclick(e){
//   if(e.target.parentElement.classList.contains('delete-item')){
//     e.target.parentElement.parentElement.remove()
    
//   }
// }
// sessionStorage.setItem('key','string'); 

// //localStorage.setItem('name','mike');
// sessionStorage.setItem('dd','gggg');
// const name = localStorage.getItem('name');
// const key = sessionStorage.getItem('key','string'); 
// localStorage.clear();
// console.log(name,key,'name'); 

//add taske.pr
// let tasks;
// document.getElementById('task-form').addEventListener('submit',function(e){
//   const task = document.getElementById('task').value;
//   if(localStorage.getItem('tasks') === null){
//     tasks = [];
//   }else{
//     tasks = JSON.parse(localStorage.getItem('tasks'));
//   }
//   tasks.push(task);
//   localStorage.setItem('tasks',JSON.stringify(tasks));
  
//   console.log(task)
// e.preventDefault();
// });
// const task = JSON.parse(localStorage.getItem('tasks'))
// task.forEach(function(task){
//    console.log(task);
// })














//console.log(lists[0])