// Iteration 1 | Books Array

class Book {
    constructor(title, pages, author, details) {
      this.title = title;
      this.pages = pages;
      this.author = author;
      this.details = details;
    }
}

class Details {
  constructor(language, description) {
    this.language = language;
    this.description = description;
  }
}

const book1 = new Book("The Old Man and the Sea", 128, "Ernest Hemingway",
  new Details("English", "One of Hemingway's most famous works, it tells the story of Santiago..."));

const book2 = new Book("The Airbnb Story", 256, "Leight Gallagher",
  new Details("English", "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."));

const book3 = new Book("Educated - A Memoir", 352, "Tara Westover",
  new Details("English", "Educated is an account of the struggle for self-invention..."));

const book4 = new Book("The Art of Learning", 288, "Josh Waitzkin",
    new Details("English", "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."));

// Your code here:
const booksArray = [book1, book2, book3, book4];




// Iteration 2 | Book Details
function getBookDetails(book) {
  // Your code here:
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}



// Iteration 3 | Delete Language
// Your code here:

for(let i = 0; i < booksArray.length; i++) {
  const book = booksArray[i];

  delete(book.details.language);
}

console.log(booksArray);

// Iteration 4 | Estimated Reading Time
// Your code here:

for(let i = 0; i < booksArray.length; i++) {
  const book = booksArray[i];

  book["readingTime"] = Math.ceil((book.pages * 500) / 90);
}

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

function booksByAuthor() {
  // Your code here:
  
}



// Bonus: Iteration 6 | Average Page Count
function averagePageCount() {
  // Your code here:
  
}
