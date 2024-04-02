// Iteration 1 | Books Array

const booksArray = [ 
  {
    title: "The Old Man and the Sea",
    pages: 128,
    author: "Ernest Hemingway",
    details: {
      language: "English",
      description: "One of Hemingway's most famous works, it tells the story of Santiago...",
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
function getBookDetails(arr) {
  return arr["title"] + ' - ' + arr["author"] + ' - ' + arr["pages"] + ' pages'
}


// Iteration 3 | Delete Language
booksArray.forEach((e) => {
  delete e.details.language;
})


// Iteration 4 | Estimated Reading Time
booksArray.forEach((e) => {
  e.readingTime = Math.ceil((e.pages * 500) / 90)
})


// Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/

function booksByAuthor(dictionary) {
  const arr = []

  for (const key in dictionary) {
    for (const book in dictionary[key]) {
      arr.push({
        title: dictionary[key][book][0],
        pages: dictionary[key][book][1],
        author: key
      })
    }
  }
    
  return arr
}


// Bonus: Iteration 6 | Average Page Count
function averagePageCount(books) {
  let allBookPages = 0

  for (value of books) {
    allBookPages += value.pages
  }

  return allBookPages / books.length
}