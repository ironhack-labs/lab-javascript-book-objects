// Iteration 1 | Books Array

// In the index.js file, create an array named booksArray containing 4 objects representing the books described in the code snippet below.Each object should have the following properties:

// title
// pages
// author
// description

// The values of the properties should be the same as the ones in the following code snippet:

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
  book1 = {
    title: "The Old Man and the Sea",
    pages: 128,
    author: "Ernest Hemingway",
    details: {
      language: "English",
      description: "One of Hemingway's most famous works, it tells the story of Santiago..."
    }
  },
  book2 = {
    title: "The Airbnb Story",
    pages: 256,
    author: "Leight Gallagher",
    details: {
      language: "English",
      description: "This is the remarkable behind- the - scenes story of the creation and growth of Airbnb..."
    }
  },
  book3 = {
    title: "Educated - A Memoir",
    pages: 352,
    author: "Tara Westover",
    details: {
      language: "English",
      description: "Educated is an account of the struggle for self-invention..."
    }
  },
  book4 = {
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

// Create a function named getBookDetails() that takes one argument - the book object.The function should return a string in the following format:

// "TITLE - AUTHOR - PAGES pages"

function getBookDetails(book2) {
  // Your code here:
  return `${book2.title} - ${book2.author} - ${book2.pages} pages`
}


// Iteration 3 | Delete Language

// Iterate over the booksArray, and delete the nested object property language from each book object.
// Once done, console.log the booksArray array to confirm that the property has been deleted from all the book objects.

//   Note: You shouldn't change the booksArray manually, but instead, you should iterate over the array and delete the property from each book object.

// Your code here:

// booksArray.forEach(function (eachBook) {
//   delete eachBook.details.language
// })

booksArray.forEach(eachBook => delete eachBook.details.language)
console.log(booksArray)


// Iteration 4 | Estimated Reading Time

// Iterate over the booksArray, and add a new property readingTime to each book object.
// The value of the readingTime should be the number of minutes it will take to read the book.The number of minutes should be an integer(i.e., no decimals).

// Assuming a page consists of 500 words and that the average reader reads 90 words per minute, the estimated reading time for a book can be calculated using the following formula:

//   reading time in minutes = (number of pages * 500) / 90


// Once done, console.log the booksArray to confirm that the property has been added to each book object.

// Your code here:
booksArray.forEach(eachBook => {
  eachBook.readingTime = Math.ceil((eachBook.pages * 500) / 90)
})
console.log(booksArray)