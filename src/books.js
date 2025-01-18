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
      description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
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
      description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
    }
  }

];




// Iteration 2 | Book Details
// Create a function named getBookDetails() that takes one argument - the book object. The function should return a string in the following format:

// "TITLE - AUTHOR - PAGES pages"

function getBookDetails(book) {
  // Your code here:
  const { title, author, pages } = book;
  return `${title} - ${author} - ${pages} pages`;
}



// Iteration 3 | Delete Language
// Your code here:

function deleteLanguageProperty(books) {
  books.forEach(book => {
    delete book.details.language;
  });
}

deleteLanguageProperty(booksArray)



// Iteration 4 | Estimated Reading Time
// Your code here:

function calculateReadingTime(books) {
  books.forEach(book => {
    const { pages } = book;
    const readingTime = Math.ceil((pages * 500) / 90);
    book.readingTime = readingTime;
  });
}

calculateReadingTime(booksArray);

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

function booksByAuthor(dictionary) {
  let result = [];

  let authors = Object.keys(dictionary);

  for (let i = 0; i < authors.length; i++) {
    let author = authors[i];
    let booksArray = dictionary[author];

    for (let j = 0; j < booksArray.length; j++) {
      let title = booksArray[j][0];
      let pages = booksArray[j][1];

      result.push({
        title: title,
        pages: pages,
        author: author
      });
    }
  }

  return result;
}

// Example usage with the provided `dictionary` object
const booksArrayFromDictionary = booksByAuthor(dictionary);
console.log(booksArrayFromDictionary);




// Bonus: Iteration 6 | Average Page Count
function averagePageCount() {
  // Your code here:

}
