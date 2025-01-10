// Iteration 1 | Books Array

const BooksArray = [
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

// console.log(BooksArray)

// Iteration 2 | Book Details

let testObj = {
  title: "The Art of Learning",
  pages: 288,
  author: "Josh Waitzkin",
  details: { dasd: "adasd" },
};

function getBookDetails(bookObj) {
  return `${bookObj.title} - ${bookObj.author} - ${bookObj.pages} pages`;
}
// console.log(getBookDetails(testObj))

// Iteration 3 | Delete Language
BooksArray.forEach((element) => {
  delete element.details.language;
  // console.log(element)
});

// Iteration 4 | Estimated Reading Time
BooksArray.forEach((element) => {
  element.readingTime = Math.floor((element.pages * 500) / 90);
  // console.log(element)
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

let testArr = [];
for (let auth in dictionary) {
  let booksArr = dictionary[auth];
  booksArr.forEach((book) => {
    testArr.push({
      title: book[0],
      pages: book[1],
      author: auth,
    });
  });
}
// console.log(testArr)

// Bonus: Iteration 6 | Average Page Count
function averagePageCount() {
  let sumPages = 0;
  let countPage = 0;

  for (let auth in dictionary) {
    let booksArr = dictionary[auth];
    booksArr.forEach((book) => {
      let pageCount = book[1];
      sumPages += pageCount;
      countPage++;
      console.log(`${pageCount} and sum ${sumPages} and count is ${countPage}`);
    });
  }
  return sumPages / countPage;
}
console.log(averagePageCount(dictionary));
