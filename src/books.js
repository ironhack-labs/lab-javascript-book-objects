// Iteration 1 | Books Array

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
  let bookDetails = `${book.title} - ${book.author} - ${book.pages} pages`;
  return bookDetails;
}

// Iteration 3 | Delete Language
for (let books of booksArray) {
  delete books.details.language;
  console.log(booksArray);
}

// Iteration 4 | Estimated Reading Time
for (let books of booksArray) {
  books["readingTime"] = Math.ceil((books.pages * 500) / 90);
  console.log(booksArray);
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
  var newArr = [];

  for (var authorName in dictionary) {
    dictionary[authorName].forEach((book) => {
      var title = book[0];
      var pages = book[1];
      var bookObj = {
        title: title,
        pages: pages,
        author: authorName,
      };
      newArr.push(bookObj);
    });
  }

  return newArr;
}
console.log(booksByAuthor(dictionary));

// Bonus: Iteration 6 | Average Page Count
function averagePageCount(bookArr) {
  let totalPages = 0;
  for (let i = 0; i < bookArr.length; i++) {
    totalPages += bookArr[i].pages;
    averagePage = totalPages / bookArr.length;
  }
  return averagePage;
}
