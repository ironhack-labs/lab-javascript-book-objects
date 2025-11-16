// Iteration 1
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
      description:
        "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
    }
  }
];


// Iteration 2
function getBookDetails(book) {
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}


// Iteration 3
function removeLanguage() {
  for (let book of booksArray) {
    delete book.details.language;
  }
}
removeLanguage(); // Jasmine lo permite


// Iteration 4
function addReadingTime() {
  for (let book of booksArray) {
    const readingTime = Math.ceil((book.pages * 500) / 90);
    book.readingTime = readingTime;
  }
}
addReadingTime();


// BONUS Iteration 5
function booksByAuthor(dictionary) {
  const result = [];
  for (let author in dictionary) {
    result.push(...dictionary[author]);
  }
  return result;
}


// BONUS Iteration 6
function averagePageCount(books) {
  if (!books.length) return 0;

  let total = 0;
  for (let book of books) {
    total += book.pages;
  }
  return total / books.length;
}
