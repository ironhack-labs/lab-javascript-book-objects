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
  // title: Pride and Prejudice
  // pages: 279
  // author: Jane Austen
  // details: {
  //    language: English
  //    description: One of the most popular novels in the English language...
  // }

// Book 4
  // title: Educated - A Memoir
  // pages: 352
  // author: Tara Westover
  // details: {
  //    language: English
  //    description: Educated is an account of the struggle for self-invention...
  // }

// Book 5
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
      description:
        "One of Hemingway's most famous work, it tells the story of Santiago",
    },
  },
  {
    title: "The Airbnb Story",
    pages: 256,
    author: "Leight Gallagher",
    details: {
      language: "English",
      description:
        "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
    },
  },
  {
    title: "Pride and Prejudice",
    pages: 279,
    author: "Jane Austen",
    details: {
      language: "English",
      description: "One of the most popular novels in the English language...",
    },
  },
  {
    title: "Educated - A Memoir",
    pages: 352,
    author: "Educated - A Memoir",
    details: {
      language: "English",
      description:
        "Educated is an account of the struggle for self-invention...",
    },
  },
  {
    title: "The Art of Learning",
    pages: 288,
    author: "Josh Waitzkin",
    details: {
      language: "English",
      description:
        "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.",
    },
  },
];


// Iteration 2 | Book Details
function getBookDetails(bookObject) {
  // const  { title, author, pages }  = bookObject
  return `${bookObject.title} - ${bookObject.author} - ${bookObject.pages} pages`;
}

const book1Details = getBookDetails(booksArray[1]);
console.log(book1Details);

  

// Iteration 3 | Delete Language
// Your code here:


// for(let booksLanguage in booksArray){
//   let thedetailsOfTheBook =booksLanguage.details;
// if(thedetailsOfTheBook === true){
//  if("language" in thedetailsOfTheBook)
//  {
//   delete thedetailsOfTheBook;
//  }
 
// }
    
// }

booksArray.forEach((book)=>{
  if(book.details && book.details.language){
    delete book.details.language;
  }
    
 
});
const hasLanguageProperty = booksArray.every((book) => !('details' in book && 'language' in book.details));





// Iteration 4 | Estimated Reading Time
// Your code here:

booksArray.forEach((book) => {
  book.readingTime = Math.floor(parseInt(book.pages) / 5); 
  return book.readingTime;
});







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
  const booksArray = Object.values(dictionary);
  return booksArray;
}



// Bonus: Iteration 6 | Average Page Count
function averagePageCount(books) {
  // Your code here:
  const totalPageCount = books.reduce((sum, book) => sum + parseInt(book.pages), 0);
  return totalPageCount / books.length;
}