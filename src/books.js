// Your code here:
const booksArray = [
  {
    title: "The Old Man and the Sea",
    pages: 128,
    author: " Ernest Hemingway",
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
      language: " English",
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
        " Educated is an account of the struggle for self-invention...",
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
function getBookDetails(booksArray) {
  console.log(
    `${booksArray.title} - ${booksArray.author} - ${booksArray.pages} pages`
  );
  return `${booksArray.title} - ${booksArray.author} - ${booksArray.pages} pages`;

  // Your code here:
}

function deleteLanguage(booksArray) {
  booksArray.forEach((book) => {
    if (book.details && book.details.language) {
      delete book.details.language;
    }
  });
  console.log("booksArray");
  console.log(booksArray);
}

// Iteration 3 | Delete Language
// Your code here:

// Iteration 4 | Estimated Reading Time
// Your code here:
function addReadingTime(booksArray) {
  booksArray.forEach((book) => {
    const pages = parseInt(book.pages, 10);
    const readingTimeMinutes = (pages * 500) / 90;

    book.readingTime = Math.round(readingTimeMinutes);
  });
}

addReadingTime(booksArray);
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
  let books = [];

  // Iterate through each author in the dictionary
  for (let author in dictionary) {
    if (dictionary.hasOwnProperty(author)) {
      // For each author, iterate through their books
      dictionary[author].forEach((book) => {
        let bookObj = {
          title: book[0],
          pages: book[1],
          author: author,
        };
        // Add the book object to the array
        books.push(bookObj);
      });
    }
  }

  return books;
}

// Bonus: Iteration 6 | Average Page Count
function averagePageCount() {
  // Your code here:
}
