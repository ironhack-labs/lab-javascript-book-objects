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
      description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.",
    }
  }
];




// Iteration 2 | Book Details
function getBookDetails(book) {
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}




// Iteration 3 | Delete Language
// Your code here:
booksArray.forEach(book => {
  delete book.details.language;  // Delete the 'language' property from the 'details' object
});

console.log(booksArray);  // Confirm the deletion of 'language' from each book object



// Iteration 4 | Estimated Reading Time
// Your code here:
booksArray.forEach(book => {
  // Calculate reading time in minutes
  const readingTime = Math.round((book.pages * 500) / 90);
  
  // Add the readingTime property to the book object
  book.readingTime = readingTime;
});

console.log(booksArray);  // Confirm the 'readingTime' has been added to each book object



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
  let booksArray = [];  // Initialize an empty array to hold the book objects

  // Iterate through each author in the dictionary
  for (let author in dictionary) {
    // For each book array, create a book object and push it into the booksArray
    for (let book of dictionary[author]) {
      const bookObject = {
        title: book[0],    // First element is the title
        pages: book[1],    // Second element is the number of pages
        author: author     // The author is the key in the dictionary
      };
      booksArray.push(bookObject);  // Add the book object to the array
    }
  }

  return booksArray;  // Return the array of book objects
}



// Bonus: Iteration 6 | Average Page Count
function averagePageCount(books) {
  // Check if the books array is empty
  if (books.length === 0) {
    return 0; // Return 0 if there are no books
  }

  // Calculate the total number of pages
  const totalPages = books.reduce((sum, book) => sum + book.pages, 0);

  // Calculate the average page count
  const average = totalPages / books.length;

  return average; // Return the average page count
}

//function averagePageCount(books) {
  //if (books.length === 0) {
    //return 0;  // If the array is empty, return 0
  //}

  // Calculate the sum of all books' pages
  //const totalPages = books.reduce((sum, book) => sum + book.pages, 0);

  // Calculate and return the average page count
  //return totalPages / books.length;
//}
