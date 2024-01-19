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
      description: "",
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
function getBookDetails(item) {
  const book = booksArray[item];

  let result = book.title + " - " + book.author + " - " + book.pages + " pages";
  console.log(result);
  return `${book.title} - ${book.author} - ${book.pages} pages`;
  // return `${booksArray[item].title} - ${booksArray[item].author} - ${booksArray[item].pages} pages`;
}

getBookDetails(2);

// Iteration 3 | Delete Language
// Your code here:

booksArray.forEach((element) => {
  delete element.details.language;
});

// Iteration 4 | Estimated Reading Time
// Your code here:

function addReadingTime(booksArray) {
  booksArray.forEach((element) => {
    let readingTime = Math.ceil((element.pages * 500) / 90);
    element.readingTime = readingTime;
    console.log(element);
  });

  return booksArray;
}

addReadingTime(booksArray);

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
  const newArray = [];

  for (const author in dictionary) {
    dictionary[author].forEach((book) => {
      newArray.push({
        title: book[0],
        pages: book[1],
        author: author,
      });
    });
  }
  return newArray;
}


// Bonus: Iteration 6 | Average Page Count
function averagePageCount(booksArray) {
  // Your code here:
  
  if(booksArray.length === 0){
    return 0
  }
  
  let sum = 0;
  for( const book of booksArray){
    sum += book.pages
  }

  // console.log(sum / booksArray.length)
  return sum / booksArray.length
}

averagePageCount(booksArray)