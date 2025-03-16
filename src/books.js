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

function createBook(title, pages, author, language, description){
  return {
    title: title,
    pages: pages,
    author: author,
    details: {
      language: language,
      description: description,
    }
  }
}

const booksArray = [
  createBook(
    'The Old Man and the Sea',
    128,
    'Ernest Hemingway',
    'English',
    'One of Hemingway\'s most famous works, it tells the story of Santiago...'
  ),
  createBook(
    'The Airbnb Story',
    256,
    'Leight Gallagher',
    'English',
    'This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...'
  ),
  createBook(
    'Educated - A Memoir',
    352,
    'Tara Westover',
    'English',
    'Educated is an account of the struggle for self-invention...'
  ),
  createBook(
    'The Art of Learning',
    288,
    'Josh Waitzkin',
    'English',
    'The Art of Learning takes readers through Waitzkin\'s unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.'
  )
];





// Iteration 2 | Book Details
function getBookDetails(book) {
  return `${book.title} - ${book.author} - ${book.pages} pages`
}



// Iteration 3 | Delete Language
booksArray.forEach((book) => delete book.details.language)




// Iteration 4 | Estimated Reading Time
booksArray.forEach((book => book.readingTime = Math.ceil((book.pages * 500) / 90)))




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

function booksByAuthorV1(dictionary) {
  const listByAuthor = []
  for (const [author, books] of Object.entries(dictionary)){
    books.forEach((book) => book.push(author))
    books.forEach((book) => listByAuthor.push({
      title: book[0],
      pages: book[1],
      author: book[2]
    }))
  }
  return listByAuthor
}

function booksByAuthor(dictionary) {
  return Object.entries(dictionary).flatMap(([author, books]) =>
    books.map(([title, pages]) => ({
      title,
      pages,
      author
    }))
  );
}


// Bonus: Iteration 6 | Average Page Count
function averagePageCount(books) {
  const totalPages = books.reduce((pages, book) => {
    return pages + book.pages;
  }, 0);
  
  return totalPages / books.length;
}
