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


const booksArray = [
  {
    book: 1,
    title: "The Old Man and the Sea",
    pages: 128,
    author: "Ernest Hemingway",
    details: {
      language: "English",
      description: "One of Hemingway's most famous works, it tells the story of Santiago..."
    }
  },
  {
    book: 2,
    title: "The Airbnb Story",
    pages: 256,
    author: "Leigh Gallagher",
    details: {
      language: "English",
      description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
    }
  },
  {
    book: 3,
    title: "Educated - A Memoir",
    pages: 352,
    author: "Tara Westover",
    details: {
      language: "English",
      description: "Educated is an account of the struggle for self-invention..."
    }
  },
  {
    book: 4,
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

const book4= {
  title: "The Art of Learning",
  pages: 288,
  author: "Josh Waitzkin",
  details: {
    language: "English",
    description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence..."
  }
};

function getBookDetails(book4) {
let bookDetails = `${book4.title} - ${book4.author} - ${book4.pages} pages`;
return bookDetails;
}

console.log(getBookDetails(book4))



// Iteration 3 | Delete Language

booksArray.forEach(function(book) {
  delete book.details.language;
});



// Iteration 4 | Estimated Reading Time
booksArray.forEach(function(book) {
let readingTime = Math.ceil((book.pages * 500) / 90);
book.readingTime = readingTime;
});

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


function booksByAuthor(dictionary) { // I used help to achieve this bonus. I didn't understand how I could access the keys of an object. I could have also used Object.keys() and forEach()
 let result = [];

 for (let author in dictionary) { // Use for ... in to loop through the keys in the object and assign a variable to each key, which will become the value to the variable (author)
  let books = dictionary[author];  // gives us a books array for each author

  for (let i = 0; i < books.length; i++){
    let book = books[i];
    let title = book[0];
    let pages = book[1]

    result.push({ author: author, title: title, pages: pages });    }
  }

  return result
}

console.log(booksByAuthor(dictionary))



// Bonus: Iteration 6 | Average Page Count
function averagePageCount(booksArray) {
 let average = 0;
 for (let i = 0; i < booksArray.length; i++){
   average += booksArray[i].pages/booksArray.length;
 }
 return average;
}
console.log(averagePageCount(booksArray))
