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

console.log(booksArray)


// Iteration 2 | Book Details
function getBookDetails(book) {
  let bookDetails = `${book.title} - ${book.author} - ${book.pages} pages`;

  return bookDetails;
}

console.log(getBookDetails(booksArray[0]));


// Iteration 3 | Delete Language

for (let i = 0; i < booksArray.length; i++) {
  // loop to iterate over the array
  delete booksArray[i].details.language;
}

console.log(booksArray);


// Iteration 4 | Estimated Reading Time
// reading time in minutes = (number of pages * 500) / 90

for (let i = 0; i < booksArray.length; i++) {
  booksArray[i].readingTime = Math.ceil((booksArray[i].pages * 500) / 90); // Math.round to return an int changed to Math.ceil to match requirements
}

console.log(booksArray);


// Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/
const dictionaryExample = { // const name changed according to exercise requirements
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

console.log(Object.keys(dictionaryExample))
console.log(Object.values(dictionaryExample))


// function starts here
function booksByAuthor(dictionary) {
  
  let newBooksArray = [] // new array consistent of the data extracted from (dictionary)

  for (let author in dictionary) { // ~> for (const property in object) { ==> it access the keys of the object, which here are the author 
    
    let booksAuthor = dictionary[author]; // variable books declare an initialized as the different arrays of books by author in the object dictionary

    for (let i = 0; i < booksAuthor.length; i++) { // iterates over each array of books 

      let bookObject = {
        title: booksAuthor[i][0],
        pages: booksAuthor[i][1],
        author: author
      };

      newBooksArray.push(bookObject);
    }
  }

  return newBooksArray  
}

console.log(booksByAuthor(dictionaryExample))

// test
let booksOrderedByAuthor = booksByAuthor(dictionaryExample)

console.log(booksOrderedByAuthor[0].title)
console.log(booksOrderedByAuthor[8].pages)



// Bonus: Iteration 6 | Average Page Count
// average page count = sum of all books' pages / number of books

function averagePageCount(booksArr) {
  let sumTotalPages = 0; // total pages variable declared & initialized in 0

  for (let i = 0; i < booksArr.length; i++) {
    // loop to go over the array (booksArr)

    sumTotalPages += booksArr[i].pages; // all pages for each book are summed up to the variable sumTotalPages
  }

  let averagePages = Math.round(sumTotalPages / booksArr.length); // given formula used to calculate the average pages using the array length to calculate total books)
  // Math.round applied to avoid decimals
  return averagePages;
}

console.log(`the average number of pages is ${averagePageCount(booksOrderedByAuthor)}`)
console.log(`the average number of pages is ${averagePageCount(booksArray)}`)