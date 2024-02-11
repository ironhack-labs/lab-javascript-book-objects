// Iteration 1 | Books Array

// Your code here:
const booksArray = [];

const book_1 = {
  title: "The Old Man and the Sea",
  pages: 128,
  author: "Ernest Hemingway",
  details: {
    language: "English",
    description:
      "One of Hemingway's most famous works, it tells the story of Santiago...",
  },
};

const book_2 = {
  title: "The Airbnb Story",
  pages: 256,
  author: "Leight Gallagher",
  details: {
    language: "English",
    description:
      "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
  },
};

const book_3 = {
  title: "Pride and Prejudice",
  pages: 279,
  author: "Jana Austen",
  details: {
    language: "English",
    description: "One of the most popular novels in the English language...",
  },
};

const book_4 = {
  title: "Educated - A Memoir",
  pages: 352,
  author: "Tara Westover",
  details: {
    language: "English",
    description: "Educated is an account of the struggle for self-invention...",
  },
};

const book_5 = {
  title: "The Art of Learning",
  pages: 288,
  author: "Josh Waitzkin",
  details: {
    language: "English",
    description:
      "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.",
  },
};

booksArray.push(book_1, book_2, book_3, book_4, book_5)

// Iteration 2 | Book Details
function getBookDetails(book) {
  const {title, author, pages} = book
  return `${title} - ${author} - ${pages} pages`
}

// Iteration 3 | Delete Language
// Your code here:

booksArray.forEach(book => {
  delete book.details.language
})

// Iteration 4 | Estimated Reading Time
// Your code here:

booksArray.forEach(book => {
  let readingTimeInMin = Math.ceil(book.pages * 500 / 90)
  book.readingTime = readingTimeInMin
})

console.log(booksArray[0])


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
  let booksArr = []

  const keys = Object.keys(dictionary)

  keys.forEach(author => {
    dictionary[author].forEach(([book, pages]) => {
      let bookObj = {
        title: book,
        pages: pages,
        author: author
      }
      booksArr.push(bookObj)
    })
  })


  return booksArr
}


// Bonus: Iteration 6 | Average Page Count
function averagePageCount(array) {
  const totalPages = array.reduce((accum, currentEl) => {
    return accum + currentEl.pages
  }, 0)
  return totalPages / array.length
}