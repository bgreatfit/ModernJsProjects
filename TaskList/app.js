
// let lists = document.querySelectorAll('.collection-item');
// lists.forEach(function(item,index){
//  item.firstElementChild.addEventListener('click',onclick);
// });
let ul = document.querySelector('.collection').addEventListener('click',onclick);
function onclick(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    e.target.parentElement.parentElement.remove()
    
  }
}
sessionStorage.setItem('key','string'); 

//localStorage.setItem('name','mike');
sessionStorage.setItem('dd','gggg');
const name = localStorage.getItem('name');
const key = sessionStorage.getItem('key','string'); 
localStorage.clear();
console.log(name,key,'name'); 

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