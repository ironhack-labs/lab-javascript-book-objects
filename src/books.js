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
// title: Pride and Prejudice
// pages: 279
// author: Jane Austen
// details: {
//    language: English
//    description: One of the most popular novels in the English language...
// }

// Book 4
// title: Educated - A Memoir
// pages: 352
// author: Tara Westover
// details: {
//    language: English
//    description: Educated is an account of the struggle for self-invention...
// }

// Book 5
// title: The Art of Learning
// pages: 288
// author: Josh Waitzkin
// details: {
//    language: English
//    description: The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.
// }

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
    title: "Pride and Prejudice",
    pages: 279,
    author: "Jane Austen",
    details: {
      language: "English",
      description: "One of the most popular novels in the English language...",
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
function getBookDetails(dicObj) {
  // Your code here:
  //console.log(`${dicObj.title} - ${dicObj.author} - ${dicObj.pages} pages`);
  return `${dicObj.title} - ${dicObj.author} - ${dicObj.pages} pages`;
}

// Iteration 3 | Delete Language
// Your code here:
booksArray.forEach((elem) => {
  for (const key in elem) {
    if (elem.details.language);
    delete elem.details.language;
  }
});
// Iteration 4 | Estimated Reading Time
// Your code here:
booksArray.forEach((elem) => {
  let time = Math.ceil((elem.pages * 500) / 90);
  if (elem.pages) {
    elem.readingTime = time;
    // console.log(booksArray);
    return booksArray;
  }
});

//console.log(booksArray);
// Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an dicObject containing books grouped by author. 
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

function booksByAuthor(dicObj) {
  // Your code here:
  let bookArr = [];
  /*DONE WITH FOREACH*/

  // Object.keys(dicObj).forEach((mainElem) => {
  //   dicObj[mainElem].forEach((bookElem) => {
  //     bookArr.push({
  //       title: bookElem[0],
  //       pages: bookElem[1],
  //       author: mainElem,
  //     });
  //   });
  // });
  // console.log(bookArr);
  // return bookArr;

  /*DONE WITH FOR..IN -> FOR..OF*/

  for (const mainElem in dicObj) {
    for (const bookElem of dicObj[mainElem]) {
      bookArr.push({
        title: bookElem[0],
        pages: bookElem[1],
        author: mainElem,
      });
    }
  }
  console.log(bookArr);
  return bookArr;
}

// Bonus: Iteration 6 | Average Page Count
function averagePageCount(bookArr) {
  // Your code here:
  let totalPages = 0;
  for (let i = 0; i < bookArr.length; i++) {
    if (bookArr[i].pages) {
      totalPages += bookArr[i].pages;
    }
  }
  //console.log(totalPages / bookArr.length);
  return totalPages / bookArr.length;
}
