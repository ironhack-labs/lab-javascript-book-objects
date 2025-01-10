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
    author: "Leigh Gallagher",
    details: {
      language: "English",
      description:
        "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
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

// console.log(booksArray);

// Iteration 2 | Book Details
function getBookDetails(book) {
  // Your code here:
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}

// console.log(getBookDetails(booksArray[0]));

// Iteration 3 | Delete Language
// Your code here:
function deleteLanguage(booksArray) {
  booksArray.forEach((book) => {
    delete book.details.language;
  });
  return booksArray;
}
console.log(deleteLanguage(booksArray));

// Iteration 4 | Estimated Reading Time
// Your code here:
function estimateReadingTime(booksArray) {
  booksArray.forEach((book) => {
    book.readingTime = Math.ceil((book.pages * 500) / 90);
  });
  return booksArray;
}
estimateReadingTime(booksArray);
//console.log(estimateReadingTime(booksArray));

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

// console.log();

//Bonus later

// console.log(dictionary["J. K. Rowling"][2][0])
/**
let testArr = [];
for (let auth in dictionary) {
  let arrK = dictionary[auth];
  arrK.forEach((element) => {
    testArr.push({ title: element[0], pages: element[1], author: auth });
    console.log(`${auth} - ${element[0]} - ${element[1]}`)
  });
  return testArr;
}
*/

function booksByAuthor(dictionary) {
  const books = [];
  for (author in dictionary) {
    let arrK = dictionary[author];
    arrK.forEach((element) => {
      books.push({ title: element[0], pages: element[1], author });
    });
    console.log("ORIGINAL", dictionary);
    console.log("BOOKS", books);
  }
  return books;

  //for (book in author) {
  // console.log(`book: ${author[0]}`);
  // }
}
// console.log(booksByAuthor(dictionary));

// Bonus: Iteration 6 | Average Page Count
function averagePageCount(books) {
  // Your code here:

  let totalPages = 0;
  let numberOfBooks = books.length;

  for (let i = 0; i < numberOfBooks; i++) {
    totalPages += books[i].pages / numberOfBooks;
  }

  return totalPages;
}
