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
      description: "One of Hemingway's most famous works, it tells the story of Santiago..."
    }
  },
  {
    title: "The Airbnb Story",
    pages: 256,
    author: "Leight Gallagher",
    details: {
      language: "English",
      description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
    }
  },
  {
    title: "Educated - A Memoir",
    pages: 352,
    author: "Tara Westover",
    details: {
      language: "English",
      description: "Educated is an account of the struggle for self-invention..."
    }
  },
  {
    title: "The Art of Learning",
    pages: 288,
    author: "Josh Waitzkin",
    details: {
      language: "English",
      description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
    }
  }
];

for (let row = 0; row < booksArray.length; row++) {
  booksArray[row].readingTime = Math.ceil((booksArray[row].pages * 2) / 3);
}
console.log(booksArray);








// Iteration 2 | Book Details
function getBookDetails(book) {
  // should return a string in the format "TITLE - AUTHOR - PAGES pages"
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}


// Iteration 3 | Delete Language
// Your code here:

booksArray.forEach(book => {
  delete book.details.language

});
// console.log(booksArray)
// Iteration 4 | Estimated Reading Time
// Your code here:

// for (let row = 0; row < booksArray.length; row++) {
//   console.log(booksArray[row].pages)
//   booksArray[row].readingTime = ((booksArray[row].pages * 500) / 90);

// }
// console.log(booksArray)
booksArray.forEach(libro => {
  libro.readingTime = Math.ceil((libro.pages * 500) / 90);
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

function booksByAuthor(dictionary) {
  const books = [];
  const authors = Object.keys(dictionary);
  authors.forEach(author => {
    dictionary[author].forEach(book => {
      books.push({ author: author, title: book[0], pages: book[1] });
    });
  }); return books;
}
const result = booksByAuthor(dictionary);
console.log(result);


// Bonus: Iteration 6 | Average Page Count
function averagePageCount(booksArray) {
  // Your code here:
  let miNumberBook = booksArray.length;
  let miAverageBook = 0;
  let totalAllBook = 0;
  for (let row = 0; row < booksArray.length; row++) {
    totalAllBook += (booksArray[row].pages)
    // console.log(miAverageBook)
  }
  return miAverageBook = (totalAllBook / miNumberBook)
}
console.log(averagePageCount(booksArray))