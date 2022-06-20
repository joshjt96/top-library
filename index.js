// Array to store books
let myLibrary = [
    { title: 'Moby Dick', author: 'Herman Melville', pages: '427', read: false },
    { title: 'The Hobbit', author: 'J.R.R Tolkien', pages: '295', read: false },
];

// Object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return this.title + ' by ' + this.author + ' is ' + this.pages + ' pages long, and I ' + this.read + ' read it.'
    };
};
// Function to take user input and store this new book object in the myLibrary array
function addBookToLib() {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
};

// forEach loop that loops through the array and displays the objects (arrow function, console log)
myLibrary.forEach(books => console.table(books));
// forEach loop with DOM to display books on frontend:
// myLibrary.forEach (function(books){
//     let bookInfo = document.createElement('p');
//     bookInfo.textContent = books;
//     document.body.appendChild(bookInfo);
// })

// const mobyDick = new Book('Moby Dick', 'Herman Melville', '427', 'have not')
// const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'have not')