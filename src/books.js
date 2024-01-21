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
}},
{
title: "Pride and Prejudice",
pages: 279,
author: "Jane Austen",
details: {
   language: "English",
   description: "One of the most popular novels in the English language...",
}},
{
title: "Educated - A Memoir",
pages: 352,
author: "Tara Westover",
details: {
   language: "English",
   description: "Educated is an account of the struggle for self-invention...",
}},
{
title: "The Art of Learning",
pages: 288,
author: "Josh Waitzkin",
details: {
   language: "English",
   description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.",
}},
];


// Iteration 2 | Book Details
function getBookDetails(book) {
return `${book.title} - ${book.author} - ${book.pages} pages`;
}

/*
function getBookDetails1(booksArray) {
  
  const arrayAnswer = []
  booksArray.forEach((book) => {
    arrayAnswer.push(`${book.title} - ${book.author} - ${book.pages} pages`)
  });

return arrayAnswer;
}

console.log(getBookDetails1(booksArray))
*/

// Iteration 3 | Delete Language
// Your code here:
booksArray.forEach(book => {
  if (book.details.language) {
    delete book.details.language;
  }
});





// Iteration 4 | Estimated Reading Time
// Your code here:

booksArray.forEach(book => {
  
  return book.readingTime = Math.ceil(book.pages * 500 / 90)
})


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

/*function booksByAuthor(dictionary) {
  let bookArray = [];

  for (const author in dictionary) {
    const books = dictionary[author];
    books.forEach(book => {
      const [title, pages] = book;
      bookArray.push({ 
        author: author,
        title: title,
        pages: pages
      });
      // shorthand method would be bookArray.push({ author, title, pages}); but the not shorthand method is less confusing when i look at it
    });
  }
  console.log(bookArray)
  return bookArray;
}
*/

function booksByAuthor(dictionary) {
  let bookArray = [];

  for (const author in dictionary) {
    const books = dictionary[author];

    for (const book of books) {
      const [title, pages] = book;
      bookArray.push({ author, title, pages });
    }
  }

  return bookArray;
}


// Bonus: Iteration 6 | Average Page Count
/*
function averagePageCount(books) {
  
  for (const author in books) {
    const book2 = books[author]


  }
  
} 
*/

/*
function averagePageCount(books) {
  let pageCount = 0;
  let totalBooks = 0;
  console.log(books)

  for (const author in books) {
    const authorBooks = books[author];
    
    for (let j = 0; j < authorBooks.length; j++) {
      const pages = authorBooks[j][1];
      pageCount += pages;
    }
  }

  const averagePageCount = pageCount / books.length;

  return averagePageCount
}
*/

function averagePageCount(books) {
     let totalPageCount = 0;
     let average ;
     console.log(books)
      for (let i = 0; i < books.length; i++ ) {
       totalPageCount += books[i].pages 
       average = totalPageCount / books.length
      }
      console.log(average)
      return average
    }

