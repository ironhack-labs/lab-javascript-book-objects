// Iteration 1 | Books Array

// Your code here:
const booksArray = [
  //  Book 1
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
  //Book 2
  {
    title: " The Airbnb Story",
    pages: 256,
    author: "Leight Gallagher",
    details: {
      language: "English",
      description:
        "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
    },
  },

  //Book 3
  {
    title: "Educated - A Memoir",
    pages: 352,
    author: "Tara Westover",
    details: {
      language: "English",
      description:
        " Educated is an account of the struggle for self-invention...",
    },
  },
  //Book 4
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
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}

// Iteration 3 | Delete Language

for (let i = 0; i < booksArray.length; i++) {
  const book = booksArray[i];
  delete book.details.language;
}
// console.log(booksArray);
// Iteration 4 | Estimated Reading Time
for (let i = 0; i < booksArray.length; i++) {
  const book = booksArray[i];
  book["readingTime"] = Math.ceil((book.pages * 500) / 90);
}
//  console.log(booksArray);

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
  // Your code here:
  const booksAuthor = [];
  for (const key in dictionary) {
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      const arrayDeArrays = dictionary[key];
      for (let j = 0; j < arrayDeArrays.length; j++) {
        const book = arrayDeArrays[j];
        // console.log(book);
        booksAuthor.push({
          title: book[0],
          pages: book[1],
          author: key,
        });
      }
    }
  }
  return booksAuthor;
}
console.log(booksByAuthor(dictionary));

// Your code here:
function booksByAuthor(dictionary) {
  const booksArray = []; // Array to hold the book objects

  const authors = Object.keys(dictionary); // Get authors' names
  const books = Object.values(dictionary); // Get arrays of books

  authors.forEach((author, index) => {
    books[index].forEach((book) => {
      const bookObject = {
        title: book[0], // First element is the title
        pages: book[1], // Second element is the number of pages
        author: author, // Current author
      };

      booksArray.push(bookObject); // Add the book object to the array
    });
  });

  return booksArray; // Return the array of book objects
}

// Example usage:
const result = booksByAuthor(dictionary);
// console.log(result);

// function booksByAuthor(dictionary) {
//   // Your code here:
//   const aux = [];
//   for (let key in dictionary) {
//     const books = dictionary[key];
//     for (let i = 0; i < books.length; i++) {
//       const book = books[i];
//       aux.push({
//         title: book[0],
//         pages: book[1],
//         author: key,
//       });
//     }
//   }
//   return aux;
// }
// booksByAuthor(dictionary);

// Bonus: Iteration 6 | Average Page Count
function averagePageCount(dictionary) {
  // Your code here:
  const books = booksByAuthor(dictionary);
  const sum = books.reduce((acc, currentBook) => {
    return acc + currentBook.pages;
  }, 0);
  const average = sum / books.length;

  return average;
}
console.log(averagePageCount(dictionary));
