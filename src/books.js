// Iteration 1 | Books Array
// Create an array containing 4 objects representing books with the specified properties
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

// Iteration 2 | Book Details
/**
 * Returns a formatted string with book details
 * @param {Object} book - The book object
 * @returns {String} - Formatted string with title, author and pages
 */
function getBookDetails(book) {
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}

// Example usage:
// console.log(getBookDetails(booksArray[0]));
// Expected output: "The Old Man and the Sea - Ernest Hemingway - 128 pages"

// Iteration 3 | Delete Language
// Iterate over the booksArray and delete the language property from each book
for (let i = 0; i < booksArray.length; i++) {
  delete booksArray[i].details.language;
}

// Verify the language property has been deleted
console.log(booksArray);

// Iteration 4 | Estimated Reading Time
// Add a readingTime property to each book based on the formula
for (let i = 0; i < booksArray.length; i++) {
  // Calculate reading time: (pages * 500) / 90, rounded up
  const readingTimeMinutes = Math.ceil((booksArray[i].pages * 500) / 90);
  booksArray[i].readingTime = readingTimeMinutes;
}

// Verify the readingTime property has been added
console.log(booksArray);

// Bonus: Iteration 5 | Books Dictionary
const dictionaryExample = {
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

/**
 * Transforms a dictionary of books into an array of book objects
 * @param {Object} dictionary - Object with authors as keys and arrays of book info as values
 * @returns {Array} - Array of book objects with title, pages, and author properties
 */
function booksByAuthor(dictionary) {
  const booksArray = [];
  
  // Method 1: Using Object.keys()
  // const authors = Object.keys(dictionary);
  // for (let i = 0; i < authors.length; i++) {
  //   const author = authors[i];
  //   const books = dictionary[author];
  //   
  //   for (let j = 0; j < books.length; j++) {
  //     booksArray.push({
  //       title: books[j][0],
  //       pages: books[j][1],
  //       author: author
  //     });
  //   }
  // }
  
  // Method 2: Using for...in loop
  for (const author in dictionary) {
    const books = dictionary[author];
    
    for (let i = 0; i < books.length; i++) {
      booksArray.push({
        title: books[i][0],
        pages: books[i][1],
        author: author
      });
    }
  }
  
  return booksArray;
}

// Example usage:
// console.log(booksByAuthor(dictionaryExample));

// Bonus: Iteration 6 | Average Page Count
/**
 * Calculates the average page count of all books in the array
 * @param {Array} books - Array of book objects
 * @returns {Number} - Average page count
 */
function averagePageCount(books) {
  let totalPages = 0;
  
  for (let i = 0; i < books.length; i++) {
    totalPages += books[i].pages;
  }
  
  return totalPages / books.length;
}

// Example usage:
// console.log(averagePageCount(booksArray));
// console.log(averagePageCount(booksByAuthor(dictionaryExample)));