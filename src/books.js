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
      description: "One of Hemingway's most famous works, it tells the story of Santiago..."
    },
  },
  {
    title: "The Airbnb Story",
    pages: 256,
    author: "Leight Gallagher",
    details: {
      language: "English",
      description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
     },
  },
  {
    title: "Pride and Prejudice",
    pages: 279,
    author: "Jane Austen",
    details: {
      language: "English",
      description: "One of the most popular novels in the English language...",
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

let objBook = {
  title: "The Art of Learning",
  pages: 288,
  author: "Josh Waitzkin",
  details: {
  language: "English",
  description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.",
}
} 
function getBookDetails(objBook) {

  // Your code here:
  return `${objBook.title} - ${objBook.author} - ${objBook.pages} pages`;
}



// Iteration 3 | Delete Language
// Your code here:

for (let i = 0; i < booksArray.length; i++) {

  delete booksArray[i].details.language;
}
console.log(booksArray);





// Iteration 4 | Estimated Reading Time
// Your code here:

for (let i = 0; i < booksArray.length; i++) {
  
  const readingTimeMinutes = Math.round((booksArray[i].pages * 500) / 90);
  booksArray[i].readingTime = readingTimeMinutes;
}

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
  
  let books = [];

  const authors = Object.keys(dictionary);
  
  authors.forEach(author => {
    let booksArray = dictionary[author];

    booksArray.forEach(bookInfo => {
      const [title, pages] = bookInfo;

      const book = {
        title: title,
        pages: pages,
        author: author
      };

      books.push(book);

      
    })
  })

  return books;

}



// Bonus: Iteration 6 | Average Page Count
function averagePageCount(books) {

  // Your code here:
  if (books.length === 0) {
    return 0;
  }
  let sumOfPages = 0;

  for (let i = 0; i < books.length; i++) {
    sumOfPages += books[i].pages;
  }

  const average = sumOfPages / books.length;

  return average;
  
}

const avgPageCount = averagePageCount(booksArray);
