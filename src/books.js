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
    author: "Leigh Gallagher",
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
function getBookDetails(bookObject) {
  // Your code here:
      return `${bookObject.title} - ${bookObject.author} - ${bookObject.pages} pages`
}
console.log(getBookDetails(booksArray[0]))


// Iteration 3 | Delete Language
// Your code here:

 booksArray.forEach((val) => {
  delete val.details.language
 }) 


// Iteration 4 | Estimated Reading Time
// Your code here:
booksArray.forEach((val) => {
   val.readingTime = Math.ceil((val.pages * 500) / 90)
 }) 
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

function booksByAuthor(dictObject) {
  // Your code here:
  const authorArr = []
  const authorNames = Object.keys(dictObject)
  for (const author of authorNames){
      const booksName = dictObject[author]
      for (const book of booksName){
            const tempObj = {}
            if (book.length >= 2){
                 tempObj.title = book[0]
                 tempObj.pages = book[1]
                 tempObj.author = author
                 authorArr.push(tempObj)
          }
           }
       
  }
  return authorArr
}

console.log(booksByAuthor(dictionary))



// Bonus: Iteration 6 | Average Page Count
function averagePageCount(bookObject) {
  // Your code here:
  let sumPages = 0
  let bookCounter = 0
  bookObject.forEach((val) => {
    sumPages += val.pages
    bookCounter += 1
  })

  return Math.ceil(sumPages/bookCounter)

  
}
console.log(averagePageCount(booksArray))
