// Iteration 1 | Books Array

let book1 = {
  title: "The Old Man and the Sea",
  pages: 128,
  author: " Ernest Hemingway",
  details: {
    language: "English",
    description:
      "One of Hemingway's most famous works, it tells the story of Santiago...",
  },
};

let book2 = {
  title: "The Airbnb Story",
  pages: 256,
  author: " Leight Gallagher",
  details: {
    language: "English",
    description:
      " This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
  },
};

let book3 = {
  title: "Educated - A Memoir",
  pages: 352,
  author: "Tara Westover",
  details: {
    language: "English",
    description: "Educated is an account of the struggle for self-invention...",
  },
};

let book4 = {
  title: "The Art of Learning",
  pages: 288,
  author: "Josh Waitzkin",
  details: {
    language: "English",
    description:
      "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.",
  },
};

let booksArray = [];
// Your code here:
booksArray.push(book1, book2, book3, book4);
/* const booksArray = [book1, book2, book3, book4]; */

console.log(booksArray);

// Iteration 2 | Book Details
function getBookDetails(book) {
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}

// Iteration 3 | Delete Language
// Your code here:

booksArray.forEach((elem) => {
  delete elem.details.language;
});

// Iteration 4 | Estimated Reading Time
// Your code here:
booksArray.forEach((elem) => {
  elem.readingTime = 0;
});

for (let i = 0; i < booksArray.length; i++) {
  booksArray[i].readingTime = parseInt((booksArray[i].pages * 500) / 90);
}
console.log(booksArray);

// Bonus: Iteration 5 | Books Dictionary

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
  let result = [];
  for (let i = 0; i < Object.keys(dictionary).length; i++) {
    for (let j = 0; j < dictionary[Object.keys(dictionary)[i]].length; j++) {
      result.push({
        title: dictionary[Object.keys(dictionary)[i]][j][0],
        pages: dictionary[Object.keys(dictionary)[i]][j][1],
        author: Object.keys(dictionary)[i],
      });
    }
  }
  return result;
}

// Bonus: Iteration 6 | Average Page Count
function averagePageCount(books) {
  let result = 0;
  let count = 0;
  for (let i = 0; i < books.length; i++) {
    result = result + books[i].pages;
    count++;
  }
  return result / count;
}
