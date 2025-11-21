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
},
];




// Iteration 2 | Book Details
function getBookDetails(book) {
  // Loop through all indexes of booksArray
  for (let index in booksArray) {
    const currentBook = booksArray[index];

    // Checks if all properties match
    let isSame = true;

    // Loop through each property of the book object
    for (let key in book) {
      // If the property is an object (like details), we need to check its sub-properties
      if (typeof book[key] === "object" && book[key] !== null) {
        for (let subKey in book[key]) {
          if (book[key][subKey] !== currentBook[key][subKey]) {
            isSame = false;
            break;
          }
        }
      } else {
        // Compare primitive properties (title, pages, author)
        if (book[key] !== currentBook[key]) {
          isSame = false;
          break;
        }
      }
    }

    // If all properties match, return the formatted string
    if (isSame) {
      return `${currentBook.title} - ${currentBook.author} - ${currentBook.pages} pages`;
    }
  }
}

// Example:
const exampleBook = {
  title: "The Old Man and the Sea",
  pages: 128,
  author: "Ernest Hemingway",
  details: {
    language: "English",
    description: "One of Hemingway's most famous works, it tells the story of Santiago...",
  },
};

console.log(getBookDetails(exampleBook));


// Iteration 3 | Delete Language
for (let index in booksArray) {
  delete booksArray[index].details.language;
  console.log(booksArray[index]);
}


// Iteration 4 | Estimated Reading Time

for (let index in booksArray) {
  booksArray[index].readingTime = Math.ceil((booksArray[index].pages * 500) / 90);
}



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
