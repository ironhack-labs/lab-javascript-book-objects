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

function getBookDetails(book) {
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}

booksArray.map((book) => {
  delete book.details.language;
  return book;
});

// Number 5
function booksByAuthor(authorDictionary) {
  const booksByAuthorArray = [];
  for (const author in authorDictionary) {
    const books = authorDictionary[author];
    books.forEach((book) => {
      booksByAuthorArray.push(book);
    });
  }
  return booksByAuthorArray;
}

booksArray.forEach((book) => {
  book.readingTime = book.pages / 2;
});

booksArray.forEach((book) => {
  book.readingTime = Math.ceil(book.pages / 2);
});

function averagePageCount(booksArray) {
  let sum = 0;
  for (let i = 0; i < booksArray.length; i++) {
    sum += booksArray[i].pages;
  }
  let avg = sum / booksArray.length;
  return avg;
}
