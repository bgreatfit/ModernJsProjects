const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const clearbtn = document.querySelector('.clear-tasks');
const taskList = document.querySelector('.collection');



//load all event listeners
loadEventListeners();
function loadEventListeners(){
  form.addEventListener('submit',addTask);
  taskList.addEventListener('click',deleteTask);
  clearbtn.addEventListener('click',clearTask);
  filter.addEventListener('keydown',filterTask);

  //DOM EVENT Loaded  
  document.addEventListener('DOMContentLoaded',getTasks);
  
}
//get Task
function getTasks(){
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  if(tasks !== null){
    tasks.forEach(function(task){
    //create TaskList
    const list = document.createElement('li');
    list.className = 'collection-item';
    list.appendChild(document.createTextNode(task));


    //create link
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    list.appendChild(link);
    taskList.appendChild(list);

    });

  
  }
}
function addTask(e){
  e.preventDefault();
  new_task = taskInput.value;
  if(new_task === ''){
    alert('Enter Task');
    return;
  }
  //create TaskList
  const list = document.createElement('li');
  list.className = 'collection-item';
  list.appendChild(document.createTextNode(new_task));


  //create link
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  list.appendChild(link);
  console.log(list);
  taskList.appendChild(list);

  storeTaskinLocalStorage(new_task);
  taskInput.value = '';
  e.preventDefault();
}
//store Task in Local Storage
function storeTaskinLocalStorage(task){
   let tasks;
   if(localStorage.getItem('tasks') === null){
     tasks = [];
   }else{
     tasks = JSON.parse(localStorage.getItem('tasks'));
   }
   tasks.push(task);
   localStorage.setItem('tasks',JSON.stringify(tasks));


}



//delete Task
function deleteTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you Sure ?')){
        e.target.parentElement.parentElement.remove();
    }
    removeTaskFromLocalStorage(e.target.parentElement.parentElement);

  }
}

function removeTaskFromLocalStorage(taskList){
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  if(tasks !== null){
    tasks.forEach(function(task,index){
      if(taskList.textContent == task){
         tasks.splice(index,1);
      }

    });
    JSON.stringify(localStorage.setItem('tasks',JSON.stringify(tasks)));
  }

}


//clear Task
function clearTask(e){
  e.preventDefault();
 // taskList.innerHTML = '';
 while(taskList.firstChild){
       taskList.firstChild.remove();

 }
 clearTaskFromLocalStorage();
}
//clear task from LS
function clearTaskFromLocalStorage(){
  localStorage.clear();
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
