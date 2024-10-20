// Iteration 1 | Books Array

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
  description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
  }
  },

  {
    title: "Educated - A Memoir",
    pages: 352,
    author: "Tara Westover",
    details: {
      language: "English",
      description: "Educated is an account of the struggle for self-invention...",
    }
},

 {
title: "The Art of Learning",
pages: 288,
author: "Josh Waitzkin",
details: {
     language: "English",
     description: `The Art of Learning takes readers through Waitzkin's unique journey to excellence.
     He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.`
}
}
];




// Iteration 2 | Book Details
function getBookDetails(book) {
  return `${book.title} - ${book.author} - ${book.pages} pages`
}

// Iteration 3 | Delete Language

booksArray.forEach((book) => 
  delete book.details.language
)

console.log(booksArray)



// Iteration 4 | Estimated Reading Time
// Your code here:

  booksArray.forEach((book) => {
  const totalWords = book.pages * 500;
  const totalMinutes = totalWords / 90;
  book.readingTime = Math.floor(totalMinutes);
} 
)
console.log(booksArray);



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
function bookByAuthor (){
  let booksArray = []
  for (let author in dictionary){
    dictionary[author].forEach((book) => {
        const bookObject = {
        title: book[0],
        pages: book[1],
        author: author,
      }
    booksArray.push(bookObject); 
  }) 
}
return booksArray
}
console.log(bookByAuthor())


// Bonus: Iteration 6 | Average Page Count
function averagePageCount(booksArray) {
  const sumAllPages = 0
  booksArray.forEach((book) => {
    
    sumAllPages += book.pages
  })
  const averagePageCount = sumAllPages / booksArray.length
  return averagePageCount
}

console.log(averagePageCount(bookByAuthor))
