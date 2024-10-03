// Iteration 1 | Books Array

// Your code here:
const booksArray = [
  Book1 = {
    title: "The Old Man and the Sea",
    pages: 128,
    author: "Ernest Hemingway",
    details: {
      language: "English",
      description: " One of Hemingway's most famous works, it tells the story of Santiago...",
    },
  },
  Book2 = {
    title: "The Airbnb Story",
    pages: 256,
    author: "Leight Gallagher",
    details: {
      language: "English",
      description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
    },
  },
  Book3 = {
    title: "Educated - A Memoir",
    pages: 352,
    author: "Tara Westover",
    details: {
      language: "English",
      description: "Educated is an account of the struggle for self-invention...",
    },
  },
  Book4 = {
    title: "The Art of Learning",
    pages: 288,
    author: "Josh Waitzkin",
    details: {
      language: "English",
      description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.",
    },
  },
];




// Iteration 2 | Book Details
function getBookDetails(book) {
  // Your code here:
  return `${book.title} - ${book.author} - ${book.pages} pages`

}



// Iteration 3 | Delete Language

// Your code here:

booksArray.forEach(book => {
  for (const keys in book) {
    if (keys === "details") {
      for (const key in book[keys]) {
        if (key === "language") {
          delete book[keys][key]
        }
      }
    }
  }
});

// Iteration 4 | Estimated Reading Time
// Your code here:

booksArray.forEach(book => {
  // console.log(typeof(book.pages)); 
  //const minReadingTime= Math.round(book.pages * 500 /90)
  //console.log("minReadingTime: ",minReadingTime);
  book["readingTime"]= Math.ceil(book.pages * 500 /90)
});
// booksArray.forEach(book => {
//   console.log(book);
// });

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
  // Your code here:
  arrayToReturn=[];
  for (const key in dictionary) {
    // console.log(dictionary[key]);
    const author = key;
    dictionary[key].forEach( element => {
      // console.log("Dentro del forEach");
      arrayToReturn.push({
        title: element[0],
        pages: element[1],
        author: key,
      })
      // console.log("Fuera del forEach");
    }
  );
  }
  return arrayToReturn;
}
// booksByAuthor(dictionary);


// Bonus: Iteration 6 | Average Page Count
function averagePageCount(books) {
  // Your code here:
  let bookCounter = 0;
  let pagesCounter = 0;

  books.forEach(book => {
    bookCounter++
    // console.log(book);
    pagesCounter += book.pages;
  });
  // console.log(bookCounter);
  // console.log(pagesCounter);
  return pagesCounter / bookCounter;
}
