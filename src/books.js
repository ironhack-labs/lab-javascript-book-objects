// Iteration 1 | Books Array
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
function getBookDetails(book) {
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}

// Example usage:
// console.log(getBookDetails(booksArray[3]));

// Iteration 3 | Delete Language
booksArray.forEach(book => {
  delete book.details.language;
});

// console.log(booksArray);

// Iteration 4 | Estimated Reading Time
booksArray.forEach(book => {
  const readingTime = Math.ceil((book.pages * 500) / 90);
  book.readingTime = readingTime;
});

// console.log(booksArray);

// Iteration 5 | Books Dictionary
function booksByAuthor(dictionary) {
  const result = [];

  for (const author in dictionary) {
    dictionary[author].forEach(book => {
      result.push({
        title: book[0],
        pages: book[1],
        author: author
      });
    });
  }

  return result;
}