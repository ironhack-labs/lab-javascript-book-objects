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

// const students = [
//   { name: "Bob", age: 17 },
//   { name: "Susy", age: 18 },
//   { name: "Ted", age: 18 },
//   { name: "Sarah", age: 20 },
//   { name: "Bill", age: 19 }
// ];

// Iteration 2 | Book Details
function getBookDetails(bookObj) {
  let title = bookObj.title;
  let author = bookObj.author;
  let pages = bookObj.pages;

  // Destructuring keys of an object
  // const {title, author, pages} = book

  return `${title} - ${author} - ${pages} pages`;
  // return `${book.title} - ${book.author} - ${book.pages} pages`;
}

getBookDetails(bookObj[0]); // bookObj[0].pages can access the pages in the first object inside of the array

// Iteration 3 | Delete Language
// Your code here:

// For of loop

// for (const aBook of booksArray){
//   delete aBook.details.laguage
// }

booksArray.forEach((obj) => {
  for (const aBook of booksArray) {
    delete aBook.details.language;
  }
});
console.log(booksArray);

// Iteration 4 | Estimated Reading Time
// Your code here:

// Another way to do it:
/** for (const aBook of booksArray) {
  aBook.readingTime = Math.ceil((book.pages * 500) / 90);
}
 */
booksArray.forEach((book) => {
  let readingTime = Math.ceil((book.pages * 500) / 90);
  book.readingTime = readingTime;
});
console.log(booksArray);

// for (const newKey of booksArray) {
//      newKey.readingTime;
// }
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

// need to access author every time

function booksByAuthor(dictionary) {
  const resultArray = [];

  for (const author in dict) {
    /**
     * author : string
     * dict[author] : Array of Array
     */
    console.log(author);
    console.log(dict[author]);
    const arrayOfBooks = dict[author];

    for (const book of arrayOfBooks) {
      // book: [title(string), pages]
      const singleBook = {
        title: book[0],
        pages: book[1],
        author: author,
      };
      console.log(singleBook);
      resultArray.push(singleBook);
    }
  }

  return resultArray;
}
// MY CODE TESTS:
// function booksByAuthor(dictionary) {

//   const bookObjArr = {
//     title: [],
//     pages: [],
//     author: [],
//   };

//   for (const keys in dictionary) {

//   }

// for (let i = 0; i < dictionary.length; i++) {
//   const arr = dictionary[i];
//    if ()

//   for (let j = 0; j < arr.length; j++) {
//     const book = arr[j];

//     if (dictionary.book === "title") {
//       bookObjArr.title.push(book);
//     }
//   }
// }
// return bookObjArr;

// Bonus: Iteration 6 | Average Page Count
function averagePageCount(arrayOfBooks) {
  return sumOfPages(arrayOfBooks) / arrayOfBooks.length;
}

function sumOfPages(arrayOfBooks) {
  let total = 0;
  for (const book of arrayOfBooks) {
    total += book.pages;
  }
}
averagePageCount(booksArray);
