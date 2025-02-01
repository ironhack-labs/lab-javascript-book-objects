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
    author: "Leight Gallagher",
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
        description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence..."
    }
}
];


// Iteration 2 | Book Details
function getBookDetails(book) {
  // Your code here:
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}
 

// Iteration 3 | Delete Language
// Your code here:
booksArray.forEach(book => delete book.details.language);
console.log(booksArray);


// Iteration 4 | Estimated Reading Time
// Your code here:
booksArray.forEach(book => {
  const wordsPerPage = 500;
  const wordsPerMinute = 90;
  const readingTime = Math.ceil ((book.pages * wordsPerPage) / wordsPerMinute);

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

function booksByAuthor(dictionary) {
  // Your code here:
  const booksArray =[];
  
  for (const author in dictionary){
    dictionary[author].forEach(book => {
      booksArray.push({
        title: book[0],
        pages: book[1],
        author: author,
      })
    })
  }
  return booksArray;
}

/* //Testing dictionary
console.log(booksByAuthor(dictionary)); */

// Bonus: Iteration 6 | Average Page Count
function averagePageCount(books) {
  // Your code here:
  if (books.length === 0) {
    return 0; // Vai returnar "0" se a array estiver vazia
  }

  let totalPages = 0;

 for (let i = 0; i < books.length; i++) {
  totalPages += books[i].pages;
 }

 let average = totalPages / books.length;

 return average;
}

/* // Exemplo de uso
const books = [
  { title: "Book 1", pages: 200 },
  { title: "Book 2", pages: 350 },
  { title: "Book 3", pages: 150 }
];

console.log(averagePageCount(books)); */