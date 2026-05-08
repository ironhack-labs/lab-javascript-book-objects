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
  return `${book.title} - ${book.author} - ${book.pages} pages`

}



// Iteration 3 | Delete Language
// Your code here:
for (const book of booksArray) {
  delete book.details.language
}

console.log(booksArray)



// Iteration 4 | Estimated Reading Time
// Your code here:
for (const book of booksArray) {
  const time = Math.ceil((book.pages * 500) / 90)
  book.readingTime = time
}

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

function booksByAuthor(dictionary) {
  // Your code here:
  let bookArr = [] // Create the bookArr that will contain the objects

  for (const author in dictionary) { // Iterate through the dictionnary obj using for in loop
    const booksAuthor = dictionary[author] // get the value of the obj properties - return an array

    for (book of booksAuthor) { // Iterate through this array that contains the books group by author
      const bookObj = { // Create an empty object bookObj that will contain the informations of each book
        title: book[0], // Since the array books contain nested arrays - get the value of thoses nested arrays - the title of the book
        pages: book[1], // The number of pages of the book
        author: author // Get the author name attached to the book
      }
      bookArr.push(bookObj) // Push the new bookObj with properties title, pages and author to the bookArr array

    }
  }
  return bookArr // Return the bookArr array that contains books objects
}

booksByAuthor(dictionary)


// Bonus: Iteration 6 | Average Page Count
function averagePageCount(bookArr) {
  // Your code here:
  if(!bookArr.length){
    return null
  }
  let sumPages = 0;
  const numberOfBooks = bookArr.length
  for (const bookObj of bookArr) {
    sumPages += bookObj.pages
  }
  const averagePages = sumPages / numberOfBooks
  return averagePages
}
