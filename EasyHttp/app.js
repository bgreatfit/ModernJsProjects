const easyhttp = new EasyHttp();
// easyhttp.get('https://jsonplaceholder.typicode.com/posts',function(posts){
//    console.log(posts);
// });
easyhttp.fetch('https://jsonplaceholder.typicode.com/posts',function(posts){
   console.log(posts);
});

easyhttp.get('https://jsonplaceholder.typicode.com/posts').then(function(posts){
    console.log(posts);
 })
 .catch(function(err){

 })


//post
 
function status(){
    if(response.status >= 200 && response.status < 300){
       return Promise.resolve(response);
    } else{
        return Promise.reject(new Error(response.statusText));
    }
}
function json(response){
    return response.json();
}
fetch('url')
.then(status)
.then(json)
.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(err);
})

fetch(url,{
    method:'post',
    headers:{
    "Content-Type":"application/x-www-form; charset=UTF-8"
    },
    body:""
})
.then(json)
    
