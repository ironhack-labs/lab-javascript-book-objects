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
function getBookDetails(bookObj) {
const { title, author, pages} = bookObj;
return `${title} - ${author} - ${pages} pages`;
}

// Iteration 3 | Delete Language
booksArray.forEach((book) => delete book.details.language);


// Iteration 4 | Estimated Reading Time
// Your code here:
booksArray.forEach((book) => {
  const {pages} = book;
  const readingTime = Math.ceil((pages * 500) / 90);
  book.readingTime = readingTime;
});



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

  // Your code here:
function booksByAuthor(dictionary) {
  const booksArray = [];

  for (const author in dictionary) {
    const books = dictionary[author];

    for (const bookInfo of books) {
      const [title, pages] = bookInfo;

      const bookObj = {
        title: title,
        pages: pages,
        author: author,
      };

      booksArray.push(bookObj);
    }
  }
  return booksArray;
}



// Bonus: Iteration 6 | Average Page Count
function averagePageCount(booksArray) {
  // Your code here:
const total = booksArray.reduce((acc, book) => {
  return acc + book.pages;
}, 0);

return total/booksArray.length;
}