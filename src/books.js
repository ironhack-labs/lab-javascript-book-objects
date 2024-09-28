// Iteration 1 | Books Array

const book_1 = {
  title: "The Old Man and the Sea",
  pages: 128,
  author: "Ernest Hemingway",
  details: {
    language: "English",
    description:
      "One of Hemingway's most famous works, it tells the story of Santiago...",
  },
};

const book_2 = {
  title: "The Airbnb Story",
  pages: 256,
  author: "Leight Gallagher",
  details: {
    language: "English",
    description:
      "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
  },
};

const book_3 = {
  title: "Educated - A Memoir",
  pages: 352,
  author: "Tara Westover",
  details: {
    language: "English",
    description: "Educated is an account of the struggle for self-invention...",
  },
};

const book_4 = {
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
const booksArray = [book_1, book_2, book_3, book_4];

// Iteration 2 | Book Details
function getBookDetails(bookNumber) {
  // Your code here:

  return `${bookNumber["title"]} - ${bookNumber["author"]} - ${bookNumber["pages"]} pages`;
}

getBookDetails(book_4);

// Iteration 3 | Delete Language
// Your code here:
booksArray.forEach((book) => {
  delete book.details.language;
});

// Iteration 4 | Estimated Reading Time
// Your code here:

booksArray.forEach((book) => {
  time = (book.pages * 500) / 90;
  book.readingTime = Math.ceil(time);
  console.log(booksArray);
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

function booksByAuthor(dictionary) {
  const dictionaryArray = [];
  for (property in dictionary) {
    console.log(property);

    dictionary[property].forEach((book) => {
      const dictionaryObject = {
        title: book[0],
        pages: book[1],
        author: property,
      };
      dictionaryArray.push(dictionaryObject);
    });
  }
  return dictionaryArray;
}
const result = booksByAuthor(dictionary);
console.log(result);

// Bonus: Iteration 6 | Average Page Count
function averagePageCount(dictionaryArray) {
  // Your code here:
  let sum = 0;
  let counter = 0;
  dictionaryArray.forEach((book) => {
    sum += book.pages;
    counter++;
  })
  return sum/counter;
}

//average page count = sum of all books' pages / number of books
