// Iteration 1 | Books Array

// Your code here:
const booksArray = [
  {
    title: "The Old Man and the Sea",
    pages: 128,
    author: "Ernest Hemingway",
    details: {
      language: "English",
      description:
        "One of Hemingway's most famous works, it tells the story of Santiago...",
    },
  },

  {
    title: "The Airbnb Story",
    pages: 256,
    author: "Leight Gallagher",
    details: {
      language: "English",
      description:
        "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
    },
  },
  {
    title: "Pride and Prejudice",
    pages: 279,
    author: "Jane Austen",
    details: {
      language: "English",
      description: "One of the most popular novels in the English language...",
    },
  },
  {
    title: "Educated - A Memoir",
    pages: 352,
    author: "Tara Westover",
    details: {
      language: "English",
      description:
        "Educated is an account of the struggle for self-invention...",
    },
  },
  {
    title: "The Art of Learning",
    pages: 288,
    author: "Josh Waitzkin",
    details: {
      language: "English",
      description:
        "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.",
    },
  },
];

// Iteration 2 | Book Details
function getBookDetails(book) {
  // Your code here
  let result = `${book.title} - ${book.author} - ${book.pages} pages`;
  return result;

  // Expected result: TITLE - AUTHOR - PAGES pages
}

// Iteration 3 | Delete Language
// Your code here:
for (let book of booksArray) {
  delete book.details.language;
}
console.log(booksArray);

// Iteration 4 | Estimated Reading Time
// Your code here:

// reading time = (number of pages * 500) / 90
for (let book of booksArray) {
  book.readingTime = Math.ceil((book.pages * 500) / 90);
}
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

function booksByAuthor(dictionary) {
  let result = [];
  let author = Object.keys(dictionary);
  let bookDetails = Object.values(dictionary);

  //book title: bookDetails[author][book][0]

  let tempObj = {};

  // loop over every author in the object
  for (let i = 0; i < author.length; i++) {
    // loop over the books
    const bookTemp = bookDetails[i];
    // for (let i = 0; i < bookTemp.length; i++) {
    for (let book in bookTemp) {
      // create an object where you give the book title
      tempObj.title = bookTemp[book][0];
      // give the pages
      tempObj.pages = bookTemp[book][1];
      // give author
      tempObj.author = author[i];
      result.push(tempObj);
      tempObj = {};
    }
  }
  return result;
}

// Bonus: Iteration 6 | Average Page Count
function averagePageCount(booksArray) {
  // Your code here:
  //average page count = sum of all books pages / number of books

  let result = 0;
  let sum = 0;
  for (let book in booksArray) {
    sum += booksArray[book]["pages"];
  }

  return sum / booksArray.length;
}
