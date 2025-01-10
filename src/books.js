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
  if (!book) return null;
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}

console.log(getBookDetails(booksArray[0]));

// Iteration 3 | Delete Language
// Your code here:
function deleteLanguage(arr) {
  arr.forEach((element, index) => {
    delete arr[index].details.language;
  });
  return arr;
}
deleteLanguage(booksArray);
console.log(booksArray); //its happening: that the nature of forEach is not to modify the Array = THATS WHY we need that index in the for each declaration

// Iteration 4 | Estimated Reading Time
// Your code here:
// function estReadingTime(arr) {
//   if (!arr.length) return null;
//   let readingTime = 0;
//   for (i = 0; i < arr.length; i++) {
//     readingTime = arr[i].pages * 90;

//   }
//   return readingTime;

// }
function estReadingTime(arr) {
  if (!arr.length) return null;
  arr.forEach((book) => {
    book.readingTime = Math.ceil((book.pages * 500) / 90);
  });
  return arr;
}
estReadingTime(booksArray);

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

function booksByAuthor() {
  // Your code here:
}

// Bonus: Iteration 6 | Average Page Count
function averagePageCount() {
  // Your code here:
}
