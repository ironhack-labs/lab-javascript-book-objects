// Iteration 1 | Books Array

const booksArray = [
  {
    title: "The Old Man and the Sea",
    pages: 128,
    author: "Ernest Hemingway",
    details: {
      language: "English",
      description: "One of Hemingway's most famous works, it tells the story of Santiago'"
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
  }
  ,
  {

    title: "The Art of Learning",
    pages: 288,
    author: "Josh Waitzkin",
    details: {
      language: "English",
      description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
    }
  }
]


// Your code here:




// Iteration 2 | Book Details
function getBookDetails(book) {
  // Your code here:
  return `${book.title} - ${book.author} - ${book.pages} pages`

}

console.log(getBookDetails(booksArray[0]))



// Iteration 3 | Delete Language
// Your code here:

for (let i = 0; i < booksArray.length; i++) {
  delete booksArray[i].details.language
}


// Iteration 4 | Estimated Reading Time
// Your code here:
for (let i = 0; i < booksArray.length; i++) {
  booksArray[i].readingTime = Math.ceil((booksArray[i].pages * 500) / 90)
}



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
  let books = []
  let newArray = []

  for (let key in dictionary) {
    books = dictionary[key]
    for (let i = 0; i < books.length; i++) {
      let newObject = {}
      newObject.title = books[i][0]
      newObject.pages = books[i][1]
      newObject.author = key
      newArray.push(newObject)
    }
  }

  return newArray
}

console.log(booksByAuthor(dictionary))


// Bonus: Iteration 6 | Average Page Count
// function averagePageCount(dictionary) {
//   // Your code here:
//   let books = []
//   let pageCount = 0
//   let bookCount = 0

//   for (let key in dictionary) {
//     books = dictionary[key]
//     bookCount += books.length
//     for (let i = 0; i < books.length; i++) {
//       pageCount = pageCount + books[i][1]
//     }
//   }
//   return pageCount/bookCount
// }



 function averagePageCount(books) {
  let pagesCount = 0
  let booksCount = 0
  for(let i = 0; i < books.length; i++){
    pagesCount += books[i].pages
    booksCount ++
  }
  return pagesCount / books.length
}