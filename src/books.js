// Iteration 1 | Books Array

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
    description: "One of Hemingway's most famous works, it tells the story of Santiago, an aging fisherman who struggles with a giant marlin far out in the Gulf Stream."
  },
  {
    title: "The Airbnb Story",
    pages: 256,
    author: "Leigh Gallagher",
    description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb, one of the most extraordinary startups of our time."
  },
  {
    title: "Educated: A Memoir",
    pages: 352,
    author: "Tara Westover",
    description: "Educated is an account of the struggle for self-invention. It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties."
  },
  {
    title: "The Art of Learning",
    pages: 288,
    author: "Josh Waitzkin",
    description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence in the competitive worlds of chess and martial arts."
  }
];




// Iteration 2 | Book Details
function getBookDetails(book) { return `${book.title} - ${book.author} - ${book.pages} pages`;
}

const exampleBook = {
  title: "The Art of Learning",
  pages: 288,
  author: "Josh Waitzkin",
  description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence..."
};

console.log(getBookDetails(exampleBook)); 
// Expected output: "The Art of Learning - Josh Waitzkin - 288 pages"
  





// Iteration 3 | Delete Language
booksArray. forEach(book=> {
  delete book.language;
})

console.log(booksArray);




// Iteration 4 | Estimated Reading Time
// reading time in minutes=(number of pages * 500)/90
booksArray.forEach(book=>{
const wordsPerPage =500;
const readingSpeed =90;

book.readingTime =
Math.ceil (( book.pages * wordsPerPage)/ readingSpeed)
})

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

function booksByAuthor(dictionary) { let result = [];

  // Loop through each author in the dictionary
  for (let author in dictionary) {
    // For each book array under the author
    dictionary[author].forEach(book => {
      result.push({
        title: book[0],
        pages: book[1],
        author: author
      });
    });
  }

  return result;
}


  console.log(bookByAuthors(dictionaryExample));
  




// Bonus: Iteration 6 | Average Page Count
function averagePageCount(books) {
  if (books.length === 0) return 0; // To avoid division by zero

  // Calculate the sum of pages
  const totalPages = books.reduce((sum, book) => sum + book.pages, 0);

  // Calculate the average
  const average = totalPages / books.length;

  return average;
}

// Example usage with an array of book objects
const book = [
  { title: "Book One", pages: 200 },
  { title: "Book Two", pages: 300 },
  { title: "Book Three", pages: 250 }
];

console.log(averagePageCount(booksArray))
  

