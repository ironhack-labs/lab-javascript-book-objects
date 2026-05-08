// Iteration 1 | Books Array

// Your code here:
const booksArray = [
  {
    // Book 1
    title: "The Old Man and the Sea",
    pages: 128,
    author: "Ernest Hemingway",
    details: {
      language: "English",
      description: "One of Hemingway's most famous works, it tells the story of Santiago.."
    }
  },
  {
    // Book 2
    title: "The Airbnb Story",
    pages: 256,
    author: "Leight Gallagher",
    details: {
      language: "English",
      description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
    }
  },
  {
    // Book 3
    title: "Educated - A Memoir",
    pages: 352,
    author: "Tara Westover",
    details: {
      language: "English",
      description: "Educated is an account of the struggle for self-invention..."
    }
  },
  {
    // Book 4
    title: "The Art of Learning",
    pages: 288,
    author: "Josh Waitzkin",
    details: {
      language: "English",
      description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
    }
  }
]
  



// Iteration 2 | Book Details
function getBookDetails(booksObject) {
  // Your code here:
  const resultString = 
      `${booksObject.title} - ${booksObject.author} - ${booksObject.pages} pages`

  return resultString
}



// Iteration 3 | Delete Language
// Your code here:
booksArray.forEach(function (book, idx, arr) {
  delete book.details.language
})

console.log(booksArray)


// Iteration 4 | Estimated Reading Time
// Your code here:
booksArray.forEach(function (book, idx, arr) {
  let readingTime = Math.ceil((book.pages * 500)/90)
  book['readingTime'] = readingTime
})

console.log(booksArray)


// Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/
const dictionaryEx = {
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

function booksByAuthor(dict) {
  // Your code here:
  const booksArr = [];

  /*
  let bookObjOld = {
    title: '',
    pages: 0,
    author: '',
  };
  */

  const authors = Object.keys(dict);

  authors.forEach(function (author, i, arr) {
    dict[author].forEach(function(book, i, arr) {

      const bookObj = {
        title: book[0],
        pages: book[1],
        author: author
      }

      booksArr.push(bookObj)
    })
  })
  
  return booksArr
}

// booksByAuthor(dictionaryEx);



// Bonus: Iteration 6 | Average Page Count
function averagePageCount(dict) {
  
  let totalPages = 0;  
  // Your code here:
  const booksArr = booksByAuthor(dict)

  booksArr.forEach(function(book, i, arr){
    totalPages += book.pages
  })

  const average =  totalPages/booksArr.length
  return average
}

// averagePageCount(dictionaryEx);
