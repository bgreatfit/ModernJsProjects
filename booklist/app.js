//Book Class
function Book(title,author,isbn){
     this.title = title;
     this.author = author;
     this.isbn   = isbn;
}


//UI Class
function UI(){}

UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
        //create row
        const row = document.createElement('tr');
        //insert column
        row.innerHTML = `<td>${book.title}</td>
                         <td>${book.author}</td>
                         <td>${book.isbn}</td>
                         <td><a class="delete" href="#">X</a></td>`;
        list.appendChild(row);
        this.storeInLocalStorage(book);

}
UI.prototype.storeInLocalStorage = function (book){
    let books;
    if(localStorage.getItem('book') === null){
        books = [];
    }else{
        books = JSON.parse(localStorage.getItem('books'));
    }
    books.push(book);
 
    localStorage.setItem('books',JSON.stringify(books))
 }
UI.prototype.showAlert = function(msg,className){
    const div = document.createElement('div');
    const container = document.querySelector('.container');
    const form  =  document.querySelector('#book-form');
    div.className = `alert ${className}`;
    const text = document.createTextNode(msg);
    div.appendChild(text);
    
    container.insertBefore(div,form);
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }
        ,3000);

}
UI.prototype.clearList = function(){
    document.querySelector('#title').value = '';
    author = document.querySelector('#author').value = '';
    isbn   = document.querySelector('#isbn').value = '';
}
UI.prototype.deleteItem = function(target){
    if(target.classList.contains('delete')){
        target.parentElement.parentElement.remove();
     }
}

//create submit event listener
document.querySelector('#book-form').addEventListener('submit',function(e){
    
    //get form values
    const title = document.querySelector('#title').value,
    author = document.querySelector('#author').value,
    isbn   = document.querySelector('#isbn').value;
    //initialize class
    const book = new Book(title,author,isbn);
    const ui = new UI();
    
    if(title == '' || author == '' || isbn == ''){

       ui.showAlert('Pls, fell all the input field','error')
    }else{
        
        //add book to list
        ui.addBookToList(book);
        ui.showAlert('Book Added!','success');
        //clearlist
        ui.clearList();
    }
    
    e.preventDefault();
});
document.getElementById('book-list').addEventListener('click',function(e){
    const ui = new UI();
    //delete item
    ui.deleteItem(e.target);
    ui.showAlert('Book Removed!','success');
    e.preventDefault();

    console.log(ui);
})

