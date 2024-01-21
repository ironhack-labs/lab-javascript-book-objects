// Iteration 1 | Books Array

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
      description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
    }
  },
  book3 = {
    title: "Pride and Prejudice",
    pages: 279,
    author: "Jane Austen",
    details: {
      language: "English",
      description: "One of the most popular novels in the English language..."
    }
  },
  book4 = {
    title: "Educated - A Memoir",
    pages: 352,
    author: "Tara Westover",
    details: {
      language: "English",
      description: "Educated is an account of the struggle for self - invention..."
    }
  },
  book5 = {
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

booksArray.forEach((eachBook) => delete eachBook.details.language)


// Iteration 4 | Estimated Reading Time

booksArray.forEach((eachBook) => {
  eachBook.readingTime = Number((Math.ceil((eachBook.pages * 500) / 90)).toFixed(0))
})


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
  let booksArrayByAuthor = []
  for (let author in dictionary) {
    let books = dictionary[author]
    //for (let i = 0; i < books.length; i++) 
    books.forEach((eachBook) => {
      let [title, pages] = eachBook
      let bookObject = {
        title: title,
        pages: pages,
        author: author
      }
      booksArrayByAuthor.push(bookObject)
    })
  }
  return booksArrayByAuthor
}



// Bonus: Iteration 6 | Average Page Count
function averagePageCount(booksArray) {
  let sumPages = 0
  //for (let i = 0; i < booksArray.length; i++) 
  booksArray.forEach((eachBook) => {
    sumPages += eachBook.pages
  })
  return sumPages / booksArray.length
}
