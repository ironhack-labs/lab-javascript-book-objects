// Iteration 1 | Books Array

// Book 1
// title: The Old Man and the Sea
// pages: 128
// author: Ernest Hemingway
// details: {
//    language: English
//    description: One of Hemingway's most famous works, it tells the story of Santiago...
// }

// Book 2
// title: The Airbnb Story
// pages: 256
// author: Leight Gallagher
// details: {
//    language: English
//    description: This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...
// }

// Book 3
// title: Educated - A Memoir
// pages: 352
// author: Tara Westover
// details: {
//    language: English
//    description: Educated is an account of the struggle for self-invention...
// }

// Book 4
// title: The Art of Learning
// pages: 288
// author: Josh Waitzkin
// details: {
//    language: English
//    description: The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.
// }


// Your code here:
class BookDetails{
    constructor(language, description) {
        this.language = language;
        this.description = description;
    }
}
class Book {
    constructor(title, pages, author, details) {
        this.title = title;
        this.pages = pages;
        this.author = author;
        this.details = details;
    }
}

const desc1 = "One of Hemingway's most famous works, it tells the story of Santiago..."
const desc2 = "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
const desc3 = "Educated is an account of the struggle for self-invention..."
const desc4 = "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.";
const booksArray = [
    new Book("The Old Man and the Sea", 128, "Ernest Hemingway", new BookDetails("English", desc1)),
    new Book("The Airbnb Story", 256, "Leight Gallagher", new BookDetails("English", desc2)),
    new Book("Educated - A Memoir", 352, "Tara Westover", new BookDetails("English", desc3)),
    new Book("The Art of Learning", 352, "Josh Waitzkin", new BookDetails("English", desc4)),
];




// Iteration 2 | Book Details
function getBookDetails(book) {
    // Your code here:
    return `${book.title} - ${book.author} - ${book.pages} pages`;
}



// Iteration 3 | Delete Language
// Your code here:
booksArray.forEach(book => {
    delete book.details.language;
});
console.log(booksArray);



// Iteration 4 | Estimated Reading Time
// Your code here:
booksArray.forEach(book => {
    book["readingTime"] = Math.ceil((book.pages * 500) / 90);
});
console.log(booksArray);



// Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/
const dictionary = {
    "J. K. Rowling": [
        ["Harry Potter and the Philosopher's Stone", 223],
        ["Harry Potter and the Chamber of Secrets", 251],
        ["Harry Potter and the Prisoner of Azkaban", 317],
        ["Harry Potter and the Goblet of Fire", 636],
    ],
    "Neal Stephenson": [
        ["Cryptonomicon", 928],
        ["Anathem", 1008],
        ["Fall; or, Dodge in Hell", 896],
    ],
    "Malcolm Gladwell": [
        ["Outliers", 320],
        ["Blink", 287],
    ],
};

function booksByAuthor(dic) {
    // Your code here:
    const authorKeys = Object.keys(dic);
    const bookObjects = [];
    for (let i = 0; i < authorKeys.length; i++) {
        const author = authorKeys[i];
        const books = dic[author];
        books.forEach(element => {
            bookObjects.push(new Book(element[0], element[1], author, null));
        });            
    }
    return bookObjects;
}
booksByAuthor(dictionary);



// Bonus: Iteration 6 | Average Page Count
function averagePageCount(books) {
    // Your code here:
    return books.reduce((accumulator, current) => accumulator + current.pages, 0) / books.length;
}
console.log(averagePageCount(booksByAuthor(dictionary)));