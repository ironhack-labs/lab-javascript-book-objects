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
// Step 1: Create the booksArray with the required books
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
function getBookDetails(book) {
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}

// Example usage:
const bookDetails = getBookDetails(booksArray[3]); // The Art of Learning - Josh Waitzkin - 288 pages
console.log(bookDetails);

// Iteration 3 | Delete Language
// Your code here:
//booksArray.forEach(book => {
//  if (book.details && 'language' in book.details) {  // Check if the details object exists and language is a property
//    delete book.details.language;  // Dynamically delete the language property
//  }
//});

// Iterate over the booksArray and delete the 'language' property from each book's 'details' object
booksArray.forEach(book => {
  if (book.details?.language) {   // Optional chaining to check if the 'language' property exists
    delete book.details.language; // Remove 'language' from the 'details' object
  }
});

// Confirm that 'language' has been deleted from all book objects
console.log(booksArray);

// Iteration 4 | Estimated Reading Time
// Your code here:
// Iterate over the booksArray and add or update the 'readingTime' property for each book
booksArray.forEach(book => {
  const wordsPerPage = 500;   // Number of words per page
  const readingSpeed = 90;    // Average reading speed in words per minute
  book.readingTime = Math.ceil((book.pages * wordsPerPage) / readingSpeed);  // Calculate and set 'readingTime'
});

// Confirm that 'readingTime' has been added to each book
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

function booksByAuthor() {
  // Your code here:
  
}



// Bonus: Iteration 6 | Average Page Count
function averagePageCount() {
  // Your code here:
  
}
