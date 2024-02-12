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

  // Iteration 1 | Books Array

 let book1 = {
   title: "The Old Man and the Sea",
   pages: 128,
   author: "Ernest Hemingway",
   details: {
      language: "English",
      description: "One of Hemingway's most famous works, it tells the story of Santiago..."
   }
  }

 let book2 = {
   title: "The Airbnb Story",
   pages: 256,
   author: "Leight Gallagher",
   details: {
      language: "English",
      description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
   }
  }


 let book3 = {
   title: "Pride and Prejudice",
   pages: 279,
   author: "Jane Austen",
   details: {
      language: "English",
      description: "One of the most popular novels in the English language..."
   }
  }

 let book4 = {
   title: "Educated - A Memoir",
   pages: 352,
   author: "Tara Westover",
   details: {
      language: "English",
     description: "Educated is an account of the struggle for self-invention..."
   }
  }

 let book5 = {
   title: "The Art of Learning",
   pages: 288,
   author: "Josh Waitzkin",
   details: {
      language: "English",
      description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
   }
  } 


// Your code here:
const booksArray = [book1, book2, book3, book4, book5];




// Iteration 2 | Book Details
function getBookDetails(book) {
 
 return `${book.title} - ${book.author} - ${book.pages} pages`
  
}



// Iteration 3 | Delete Language
// Your code here:

booksArray.forEach((book) => {
  delete book.details.language

})

//booksArray.forEach((book, i, arr) => { 
//let { title, pages, author, description : {details} } = book 
//let description = book.details.description
//let newBook = { title, pages, author, details: {description}}
  
//arr[i] = newBook
//})


// Iteration 4 | Estimated Reading Time
// Your code here:

booksArray.forEach((book) => {
  book.readingTime = Math.ceil((book.pages * 500) / 90)
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
  
  let booksArray = []
  
  for (author in dictionary) {

Object.values(dictionary[author]).forEach((book, i, arr) => {
  booksArray.push({
    title: book[0],
    pages: book[1],
    author: key
  })
})

  }
  return booksArray
}



// Bonus: Iteration 6 | Average Page Count
function averagePageCount(books) {
  
  let totalPages = 0

  books.forEach((el) => {
    totalPages += el.pages
  })
  
  return totalPages/books.length
}