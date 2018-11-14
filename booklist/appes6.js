class Books{
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
        author = document.querySelector('#author').value = '';
        isbn   = document.querySelector('#isbn').value = '';
    }

}

class Store{

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

    }
    static addBooks(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBooks(){

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

    //add to local storage
    Store.addBooks(book);
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
})

