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
    title: `The Old Man and the Sea`,
    pages: 128,
    author: `Ernest Hemingway`,
    details: {
      language: `English`,
      description: `One of Hemingway's most famous works, it tells the story of Santiago...`
    }
  },
  {
    title: `The Airbnb Story`,
    pages: 256,
    author: `Leight Gallagher`,
    details: {
      language:` English`,
      description: `This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...`
    }
  },
  {
    title: `Educated - A Memoir`,
    pages: 352,
    author: `Tara Westover`,
    details: {
      language: `English`,
      description: `Educated is an account of the struggle for self-invention...`
    }
  },
  {
    title: `The Art of Learning`,
    pages: 288,
    author: `Josh Waitzkin`,
    details: {
      language: `English`,
      description: `The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.`
    }
  },
];


// Iteration 2 | Book Details
function getBookDetails(book) {
//   // Your code here:
  const { title, author, pages } = book;
  
  // Concatenate the book details string
  const string = `${title} - ${author} - ${pages} pages`;

  // Return the result
  return string;
}

// Example usage:
const book = {
  title: "The Art of Learning",
  pages: 288,
  author: "Josh Waitzkin",
  details: { /*...*/ }
};

const bookDetails = getBookDetails(book);
console.log(bookDetails);

// Iteration 3 | Delete Language
booksArray.forEach(book => {
  delete book.details.language;
});

console.log(booksArray);
// Iteration 4 | Estimated Reading Time
// Your code here:
// readingTime
// booksArray = readingTime;


booksArray.forEach(book => {
  const timeNeeded = Math.ceil((book.pages * 500) /90); 
  book.readingTime = timeNeeded;
});
console.log(updatedBooksArray);



// Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/

function booksByAuthor(dictionary) {
  // Your code here:
  
  const bookObjects = [];
  for (let author in dictionary) {
    if (dictionary.hasOwnProperty(author)) {
      const books = dictionary[author];
      books.forEach(book => {
        const [title, pages] = book;
        bookObjects.push({ title, pages, author });
      });
    }
  }

  return (bookObjects);
}
const dictionaryExample = dictionary;
console.log(dictionaryExample(`${title} ${pages} ${author}`));


// Bonus: Iteration 6 | Average Page Count
function averagePageCount(books) {
 // Your code here:
  let booker = 2;
  if (booker < books.length);
  return 2
}



// console.log(updatedBooksArray)

