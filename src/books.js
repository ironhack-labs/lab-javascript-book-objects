// Iteration 1 | Books Array

// Book 1
// title: The Old Man and the Sea
// pages: 128
// author: Ernest Hemingway
// details: {
//    language: English
//    description: One of Hemingway's most famous works, it tells the story of Santiago...
// }

// Book 2
// title: The Airbnb Story
// pages: 256
// author: Leight Gallagher
// details: {
//    language: English
//    description: This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...
// }

// Book 3
// title: Educated - A Memoir
// pages: 352
// author: Tara Westover
// details: {
//    language: English
//    description: Educated is an account of the struggle for self-invention...
// }

// Book 4
// title: The Art of Learning
// pages: 288
// author: Josh Waitzkin
// details: {
//    language: English
//    description: The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.
// }


// Your code here:
// index.js

const booksArray = [
  {
      title: "The Old Man and the Sea",
      pages: 128,
      author: "Ernest Hemingway",
      description: "One of Hemingway's most famous works, it tells the story of Santiago...",
      details: {
          language: "English",
          description: "One of Hemingway's most famous works, it tells the story of Santiago..."
      }
  },
  {
      title: "The Airbnb Story",
      pages: 256,
      author: "Leight Gallagher",
      description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
      details: {
          language: "English",
          description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
      }
  },
  {
      title: "Educated - A Memoir",
      pages: 352,
      author: "Tara Westover",
      description: "Educated is an account of the struggle for self-invention...",
      details: {
          language: "English",
          description: "Educated is an account of the struggle for self-invention..."
      }
  },
  {
      title: "The Art of Learning",
      pages: 288,
      author: "Josh Waitzkin",
      description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.",
      details: {
          language: "English",
          description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
      }
  }
];

module.exports = booksArray;





// Iteration 2 | Book Details

function getBookDetails(book) {
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}

const book = {
  title: "The Art of Learning",
  pages: 288,
  author: "Josh Waitzkin",
  details: { /*...*/ }
};

console.log(getBookDetails(book));







// Iteration 3 | Delete Language
// Your code here:

booksArray.forEach(book => {
  delete book.details.language;
});

console.log(booksArray);




// Iteration 4 | Estimated Reading Time
// Your code here:


booksArray.forEach(book => {
  const readingTime = Math.round((book.pages * 500) / 90);
  book.readingTime = readingTime;
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
  let books = [];

  for (const author in dictionary) {
      if (dictionary.hasOwnProperty(author)) {
          const booksArray = dictionary[author];
          booksArray.forEach(bookInfo => {
              const [title, pages] = bookInfo;
              const book = {
                  title: title,
                  pages: pages,
                  author: author
              };
              books.push(book);
          });
      }
  }

  return books;
}

console.log(booksByAuthor);    




// Bonus: Iteration 6 | Average Page Count

  // Your code here:
  function averagePageCount(books) {
    if (books.length === 0) {
        return 0;
    }

    const totalPageCount = books.reduce((sum, book) => sum + book.pages, 0);
    return totalPageCount / books.length;
}



console.log(averagePageCount(booksArray));
