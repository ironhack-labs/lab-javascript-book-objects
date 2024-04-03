// Iteration 1 | Books Array

const book1 = {
  title: "The Old Man and the Sea",
  pages: 128,
  author: "Ernest Hemingway",
  details: {
    language: "English",
    description:
      "One of Hemingway's most famous works, it tells the story of Santiago...",
  },
};

const book2 = {
  title: "The Airbnb Story",
  pages: 256,
  author: "Leight Gallagher",
  details: {
    language: "English",
    description:
      "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
  },
};

const book3 = {
  title: "Educated - A Memoir",
  pages: 352,
  author: "Tara Westover",
  details: {
    language: "English",
    description: "Educated is an account of the struggle for self-invention...",
  },
};

const book4 = {
  title: "The Art of Learning",
  pages: 288,
  author: "Josh Waitzkin",
  details: {
    language: "English",
    description:
      "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.",
  },
};

// Your code here:
const booksArray = [];

booksArray.push(book1, book2, book3, book4);
//console.log(booksArray);

// Iteration 2 | Book Details
/**
 * Create a function named getBookDetails() that takes one argument - the book object. The function should return a string in the following format:

"TITLE - AUTHOR - PAGES pages"
 */
function getBookDetails(book) {
  // Your code here:
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}

console.log(
  getBookDetails({
    title: "The Art of Learning",
    pages: 288,
    author: "Josh Waitzkin",
    details: {
      language: "English",
      description:
        "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.",
    },
  })
);

// Iteration 3 | Delete Language
/* Iterate over the booksArray, and delete the nested object property language from each book object.
Once done, console.log the booksArray array to confirm that the property has been deleted from all the book objects.

Note: You shouldn't change the booksArray manually, but instead, you should iterate over the array and delete the property from each book object.
*/

//Your code here:

booksArray.forEach((book) => {
  delete book.details.language;
});

//console.log(booksArray);

// Iteration 4 | Estimated Reading Time
/* 
Iterate over the booksArray, and add a new property readingTime to each book object.
The value of the readingTime should be the number of minutes it will take to read the book. The number of minutes should be an integer (i.e., no decimals).

Assuming a page consists of 500 words and that the average reader reads 90 words per minute, the estimated reading time for a book can be calculated using the following formula:

reading time in minutes = (number of pages * 500) / 90


Once done, console.log the booksArray to confirm that the property has been added to each book object.

*/
// Your code here:
function calculateReadingTime(pages) {
  const wordsPerPage = 500;
  const wordsPerMinute = 90;
  const readingTime = Math.ceil((pages * wordsPerPage) / wordsPerMinute); // Round up to nearest integer
  return readingTime;
}
//now adding it to all my objects:
booksArray.forEach((book) => {
  book.readingTime = calculateReadingTime(book.pages);
});

// Logging the updated booksArray
//sconsole.log(booksArray);
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
    for (const bookInfo of books) {
      const [title, pages] = bookInfo;
      result.push({ title, pages, author });
    }
  }

  return result;
}

const result = booksByAuthor(dictionary);
//console.log(result);

// Bonus: Iteration 6 | Average Page Count
function averagePageCount(books) {
  // Your code here:
  if (books.length === 0) {
    return 0; // should return 0 if there are no books
  }

  let totalPages = 0;
  for (let book of books) {
    totalPages += book.pages;
  }

  let average = totalPages / books.length;
  return average;
}

//! another method:
// if (books.length === 0) {
//   return 0; // should return 0 if there are no books
// }
// let sumPages = 0;
// for(let key of books){
//   sumPages += key.pages
// }

// return sumPages/books.length

console.log(averagePageCount(booksArray));
