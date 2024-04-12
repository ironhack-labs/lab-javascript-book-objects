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
  {title: "The Old Man and the Sea", 
    pages: 128,
    author: "Ernest Hemingway",
    details: {language: "English", description: "One of Hemingway's most famous works, it tells the story of Santiago..."}
  },
  {title: "The Airbnb Story",
    pages: 256,
    author: "Leight Gallagher",
    details: {language: "English", description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."}
  },
  {title: "Educated - A Memoir",
    pages: 352,
    author: "Tara Westover",
    details: {language: "English", description: "Educated is an account of the struggle for self-invention..."}
  },
  {title: "The Art of Learning",
    pages: 288,
    author: "Josh Waitzkin",
    details: {language: "English", description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."}
  }
]


// Iteration 2 | Book Details

// getBookDetails() that takes one argument - the book object. The function should return a string in the following format:

// "TITLE - AUTHOR - PAGES pages"

const getBookDetails = (bookObj) => {
  return `${bookObj.title} - ${bookObj.author} - ${bookObj.pages} pages`
}

// Iteration 3 | Delete Language
// Your code here:

booksArray.forEach(element => {
  delete element.details.language;
})


console.log(booksArray);

// Iteration 4 | Estimated Reading Time
// Your code here:

// reading time in minutes = (number of pages * 500) / 90

booksArray.forEach(element => {
  element.readingTime = Math.ceil((element.pages *500) / 90)
})

// Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/


function booksByAuthor(dictionary) {
  let output = [];
  for (let key in dictionary){
    dictionary[key].forEach(book => {
      output.push({
        title: book[0],
        pages: book[1],
        author: key
      })
    })

  }
return output;
}


// Bonus: Iteration 6 | Average Page Count
function averagePageCount(booksArr) {
  // Your code here:
  // average page count = sum of all books' pages / number of books
  let totalPages = 0;
  let totalBooks = 0;
  booksArr.forEach(book => {
    totalPages += book.pages
    totalBooks++
  })
  return(totalPages/totalBooks)
}