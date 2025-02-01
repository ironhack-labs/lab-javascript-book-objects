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
    title: "TThe Airbnb Story",
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
  }
]




// // Iteration 2 | Book Details
function getBookDetails(book) {
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}



// // Iteration 3 | Delete Language
for (book of booksArray) {
  delete book.details.language;
}




// // Iteration 4 | Estimated Reading Time
for (const book of booksArray) {
  let time = Math.ceil(book.pages * 500 / 90);
  book.readingTime = time;
}

console.log(booksArray)


// // Bonus: Iteration 5 | Books Dictionary

// /* The `dictionary` is an object containing books grouped by author. 
//  The book info is stored in arrays with structure: [title, pages]. 
// */
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
  //The result needs to be an array, which will have objects inside, so start off with an empty array:
  let result = [];

  //We need to loop through each author, which is an object, so we need to use 'for...in':
  for (const author in dictionary) {
  
  //We need to create a nested loop (as the info isn't seperate) to get the title and page count, which are arrays, meaning we need to use 'for...of'. But, before we do that, we need to create a name sake for this array and its access point, so we create the following variable:
    let books = dictionary[author];

    for (const book of books) {
  //Having looped, we create the object that will be inside of our array, which will contain 3 key pairs:
      let bookObj = {
        title: book[0],
        pages: book[1],
        author: author
      };
  //Add the object to our array
      result.push(bookObj);
    }
  }
  //Get the answer
  return result;
}



// // Bonus: Iteration 6 | Average Page Count
function averagePageCount(books) {
  // Edgecase where 'books' is an empty array
  if (books.length === 0) {
    return 0;
  }

  // Calculate total pages
  let totalPages = 0;
  for (const book of books) {
    totalPages += book.pages;
  }

  // Calculate average
  const average = totalPages / books.length;

  // Return the average
  return average;
}
