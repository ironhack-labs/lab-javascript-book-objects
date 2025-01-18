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
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}

// Iteration 3 | Delete Language
// Your code here:
booksArray.forEach((book) => {
  delete book.details.language;
});

console.log(booksArray);

// Iteration 4 | Estimated Reading Time
// Your code here:
booksArray.forEach((book) => {
  booksArray.forEach((book) => {
    // Calculate reading time in minutes
    const readingTimeInMinutes = Math.round((book.pages * 500) / 90);

    // Add the readingTime property to the book object
    book.readingTime = readingTimeInMinutes;
  });

  // Verify that each book has the readingTime property
  booksArray.forEach((book) => {
    console.log(`"${book.title}" - Reading Time: ${book.readingTime} minutes`);
  });

  // Log the entire updated array
  console.log(JSON.stringify(booksArray, null, 2));
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
  // Your code here:
  const result = [];

  for (const author in dictionary) {
    const books = dictionary[author];
    for (const book of books) {
      result.push({
        title: book[0],
        pages: book[1],
        author: author,
      });
    }
  }
  return result;
}
const books = booksByAuthor(dictionaryExample);
console.log(books);
// Bonus: Iteration 6 | Average Page Count
function averagePageCount(books) {
  // Your code here:
  if (books.length === 0) {
    return 0; // Return 0 si esta vacío
  }

  const totalPages = books.reduce((sum, book) => sum + book.pages, 0);
  return totalPages / books.length;
}
