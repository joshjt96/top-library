// Array to store books
let myLibrary = [
    { title: 'Moby Dick', author: 'Herman Melville', pages: '427', read: 'No' },
    { title: 'The Hobbit', author: 'J.R.R Tolkien', pages: '295', read: 'No' },
];

// Object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

// Function to take user input and store this new book object in the myLibrary array
function addToLib(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBook();
};

// Function to display books on page
function displayBook() {
    const books = document.querySelector('.books');

    // for loop to remove previously displayed card before looping over array again
    const removeCard = document.querySelectorAll('.card');
    console.log('Show the node count of current card divs....', removeCard);
    for (let i = 0; i < removeCard.length; i++) {
        removeCard[i].remove();
    };

    // ForEach loop to display the object values to the cards
    myLibrary.forEach(myLibrary => {
        const card = document.createElement('div');
        card.classList.add('card');
        books.appendChild(card);
        for (let key in myLibrary) {
            console.log(`${key}: ${myLibrary[key]}`);
            const para = document.createElement('p');
            para.textContent = (`${key}: ${myLibrary[key]}`);
            card.appendChild(para);
        }
    });
};

// addToLib('The Great Gatsby', 'F Scott Fitzgerald', '427', false);
// addToLib('Example', 'Noone', '427', false);
// addToLib('Hello', 'There', '427', false);
// addToLib('Issme', 'Mario', '427', false);

// New book button that displays form when clicked:
form.style.display = 'none';
const btn = document.getElementById('new-book');
btn.addEventListener('click', () => {
    const form = document.getElementById('form');
    if (form.style.display == 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});

// Query selector/event listener to add user input to array:
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', userInput);

// Function to get value of user input and add this to variables
function userInput() {
    let titleInput = document.getElementById('title').value;
    let authorInput = document.getElementById('author').value;
    let pageInput = document.getElementById('page').value;
    let readInput = document.getElementById('read').value;

    // Call addToLib to add user entry
    addToLib(titleInput, authorInput, pageInput, readInput);

    // Reset form after submission
    document.getElementById('form').reset();
}

// Event listener to reset form:
const resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', () => {
    document.getElementById('book-form').reset();
});















// // Array to store books
// let myLibrary = [
//     { title: 'Moby Dick', author: 'Herman Melville', pages: '427', read: false },
//     { title: 'The Hobbit', author: 'J.R.R Tolkien', pages: '295', read: false },
// ];

// // Object constructor
// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// };

// // Function to take user input and store this new book object in the myLibrary array
// function addBookToLib(title, author, pages, read) {
//     let book = new Book(title, author, pages, read);
//     myLibrary.push(book);
// };

// addBookToLib.prototype = Object.create(Book.prototype);

// // Make form hidden on page load:
// form.style.display = 'none';

// // New book button that displays form when clicked:
// const btn = document.getElementById('newBook');
// btn.addEventListener('click', () => {
//     const form = document.getElementById('form');
//     if (form.style.display == 'none') {
//         form.style.display = 'block';
//     } else {
//         form.style.display = 'none';
//     }
// });

// // Hide form when new book is saved
// const saveBtn = document.getElementById('save');
// saveBtn.addEventListener('click', () => {
//     form.style.display = 'none';
// });

// // Event listener to call addToLib function when save button clicked
// saveBtn.addEventListener('click', () => {
//         let book = new Book();
//         myLibrary.push(book);
//     });

//     // forEach loop that loops through the array and displays the objects (arrow function, console log)
// myLibrary.forEach(books => console.table(books));
// // forEach loop with DOM to display books on frontend:
// // myLibrary.forEach (function(books){
// //     let bookInfo = document.createElement('p');
// //     bookInfo.textContent = books;
// //     document.body.appendChild(bookInfo);
// // })