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

const booksArray = [];
let book1 = {
  title: "The Old Man and the Sea",
  pages: 128,
  author: "Ernest Hemingway",
  details: {
    language: "English",
    description:
      "One of Hemingway's most famous works, it tells the story of Santiago..",
  },
};

let book2 = {
  title: "The Airbnb Story",
  pages: 256,
  author: "Leight Gallagher",
  details: {
    language: "English",
    description:
      "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
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
booksArray.push(book1, book2, book3, book4);

// Iteration 2 | Book Details
function getBookDetails(book1) {
  let str = `${book1.title} - ${book1.author} - ${book1.pages} pages`;
  return str;
}

getBookDetails(book1);

// Iteration 3 | Delete Language
let booksArray2 = booksArray;

// Your code here:
for (let i = 0; i < booksArray2.length; i++) {
  delete booksArray2[i].details.language;
}

// Iteration 4 | Estimated Reading Time
// Your code here:
for (let i = 0; i < booksArray.length; i++) {
  booksArray[i].readingTime = Math.ceil((booksArray[i].pages * 500) / 90);
}

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

[{ title: "Outliers", pages: 320, author: "Malcolm Gladwell" }, {}];

function booksByAuthor(dictionary) {
  // Your code here:
  let newArr = [];
  let authorNames = Object.keys(dictionary);
  for (let i = 0; i < authorNames.length; i++) {
    let authorName = authorNames[i];
    let booksOfAuthor = dictionary[authorName];
    for (let j = 0; j < booksOfAuthor.length; j++) {
      let book = booksOfAuthor[j];
      newArr.push({ title: book[0], pages: book[1], author: authorName });
    }
  }
  return newArr;
}

// Bonus: Iteration 6 | Average Page Count
function averagePageCount(booksArray) {
  // Your code here:
  let sum = 0;
  for (let i = 0; i < booksArray.length; i++) {
    sum += booksArray[i].pages;
  }
  let avg = sum / booksArray.length;
  return avg;
}
