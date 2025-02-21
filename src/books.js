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
      description: "One of Hemingway's most famous works, it tells the story of Santiago..."
    }
  },
  {
    title: "The Airbnb Story",
    pages: 256,
    author: "Leight Gallagher",
    details: {
      language: "English",
      description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
    }
  },
  {
    title: "Educated - A Memoir",
    pages: 352,
    author: "Tara Westover",
    details: {
      language: "English",
      description: "Educated is an account of the struggle for self-invention..."
    }
  },
  {
    title: "The Art of Learning",
    pages: 288,
    author: "Josh Waitzkin",
    details: {
      language: "English",
      description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
    }
  }
];




// Iteration 2 | Book Details
function getBookDetails(book) {
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}



// Iteration 3 | Delete Language
delete booksArray[0].details.language;
delete booksArray[1].details.language;
delete booksArray[2].details.language;
delete booksArray[3].details.language;
console.log(booksArray);




// Iteration 4 | Estimated Reading Time
// Your code here:

function ReadingTime(book) {
  return Math.ceil((book.pages * 500) / 90);
}

Object.assign(booksArray[0], {readingTime: ReadingTime(booksArray[0])});
Object.assign(booksArray[1], {readingTime: ReadingTime(booksArray[1])});
Object.assign(booksArray[2], {readingTime: ReadingTime(booksArray[2])});
Object.assign(booksArray[3], {readingTime: ReadingTime(booksArray[3])});
console.log(booksArray)


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

/*Create a function named booksByAuthor() that takes one argument - dictionary which is an object having the same structure as the dictionaryExample shown above.


The function should return an array containing the book objects with the properties :

title - the title of the book (first element of the array)
pages - the number of pages of the book (second element of the array)
author - the author of the book (the dictionary key)*/

function booksByAuthor(dictionary) {
  let book = [];

  for (let key in dictionary) {
    dictionary[key].forEach(function(bookInfo) {
      book.push({title: bookInfo[0], pages: bookInfo[1], author: key})
    })
      }
  return book;
      }
    console.log(booksByAuthor(dictionary));

/*average page count = sum of all books' pages / number of books*/
// Bonus: Iteration 6 | Average Page Count
function averagePageCount(booksArray) {
  let average = 0;
  booksArray.forEach(function(book) {
    average += book.pages;
  });
  return average / booksArray.length;
}
console.log(averagePageCount(booksArray));