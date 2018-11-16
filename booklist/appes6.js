class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn   = isbn;
    }
}
class UI{
     
    addBookToList(book){
        const list = document.getElementById('book-list');
        //create row
        const row = document.createElement('tr');
        //insert column
        row.innerHTML = `<td>${book.title}</td>
                         <td>${book.author}</td>
                         <td>${book.isbn}</td>
                         <td><a class="delete" href="#">X</a></td>`;
        list.appendChild(row);
    }
    showAlert(msg,className){
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
    deleteItem(target){
        if(target.classList.contains('delete')){
            target.parentElement.parentElement.remove();
         }
    }
    clearList(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

}

class Store extends UI{
    static getBooks(){
        let books
       if(localStorage.getItem('books') === null){
          books = [];
       }else{
           books = JSON.parse(localStorage.getItem('books'));
       }
       return books
    }
    static displayBooks(){
        const books = Store.getBooks();
        books.forEach(function(book) {
            UI.prototype.addBookToList.call(book);
        }, this);
    }
    static addBooks(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBooks(isbn){
        const books = Store.getBooks();
        if(books !== null){
            books.forEach(function(book,index){
                if(book.isbn == isbn){
                    books.splice(index,1);
                }
            },this)
        }
        localStorage.setItem('books',JSON.stringify(books));
    }


}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

//create submit event listener
document.querySelector('#book-form').addEventListener('submit',function(e){
    
    //get form values
    const title = document.querySelector('#title').value,
    author = document.querySelector('#author').value,
    isbn   = document.querySelector('#isbn').value;
    const ui = new UI();
    if(title == '' || author == '' || isbn == ''){
       ui.showAlert('Pls, fill all the input field','error')
    }else{
        
        //initialize class
        const book = new Book(title,author,isbn);
        console.log(book);
        //add book to list
        ui.addBookToList(book);
        ui.showAlert('Book Added!','success');

    //add to local storage
        Store.addBooks(book)
        //clearlist
        ui.clearList();
    }
    
    e.preventDefault();
});
document.getElementById('book-list').addEventListener('click',function(e){
    const ui = new UI();
    //delete item
    ui.deleteItem(e.target);
    //remove from local storage
    Store.removeBooks(e.target.parentElement.previousElementSibling.textContent);
    ui.showAlert('Book Removed!','success');
    e.preventDefault();
})

