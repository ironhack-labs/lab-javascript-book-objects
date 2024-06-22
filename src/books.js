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
const booksArray = [];

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
// to delete property
booksArray.push(book1, book2, book3, book4);
// for (let i = 0; i < booksArray.length; i++) {
//   for (const property in booksArray[i]) {}
//   }

// Iteration 2 | Book Details
function getBookDetails(bookObj) {
  console.log(
    `${bookObj.title} - ${bookObj.author} - ${bookObj.pages} - pages`
  );
  return `${bookObj.title} - ${bookObj.author} - ${bookObj.pages} pages`;
}

// Iteration 3 | Delete Language
for (let i = 0; i < booksArray.length; i++) {
  delete booksArray[i].details.language;
}
// Iteration 4 | Estimated Reading Time
for (let i = 0; i < booksArray.length; i++) {
  booksArray[i].readingTime = Math.ceil((booksArray[i].pages * 500) / 90);
  // console.log(Math.ceil(booksArray[i].pages * 500) / 90);
}

// console.log(booksArray);

// Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/ // dictionary[property][0][0],
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

//  // [
//   // {
//   //   title: "Harry Potter and the Philosopher's Stone",
//   //   pages: 223,
//   //   author: "J. K. Rowling",
//   // },
//   // {
//   //   title: "Harry Potter and the Chamber of Secrets",
//   //   pages: 251,
//   //   author: "J. K. Rowling",
//   // },
//   // {
//   //   title: "Harry Potter and the Prisoner of Azkaban",
//   //   pages: 317,
//   //   author: "J. K. Rowling",
//   // },

function booksByAuthor(dictionary) {
  const book = [];

  for (const property in dictionary) {
    for (let i = 0; i < dictionary[property].length; i++) {
      book.push({
        title: dictionary[property][i][0],
        page: dictionary[property][i][1],
        author: property,
      });
    }
  }
  return book;
}
booksByAuthor(dictionary);
// Bonus: Iteration 6 | Average Page Count
function averagePageCount() {
  // Your code here:
}
// arr.push({ author: property });
//     arr.push({ title: property });
//     arr.push({ pages: property });
