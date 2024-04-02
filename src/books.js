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
// Define the booksArray containing book objects
const booksArray = [
  {
    title: "The Old Man and the Sea",
    pages: 128,
    author: "Ernest Hemingway",
    details: {
      language: "English",
      description:
        "One of Hemingway's most famous works, it tells the story of Santiago...",
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
    title: "Educated - A Memoir",
    pages: 352,
    author: "Tara Westover",
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

// Iterate over the booksArray and display information about each book in the desired format
booksArray.forEach((book, index) => {
  console.log(`// Book ${index + 1}`);
  console.log(`// title: ${book.title}`);
  console.log(`// pages: ${book.pages}`);
  console.log(`// author: ${book.author}`);
  console.log(`// details: {`);
  console.log(`//    language: ${book.details.language}`);
  console.log(`//    description: ${book.details.description}`);
  console.log(`// }`);
  console.log("\n");
});

// Iteration 2 | Book Details
function getBookDetails() {
  // Your code here:
  function getBookDetails(book) {
    if (typeof book === "object" && book !== null) {
      const { title, author, pages } = book;

      if (title && author && pages) {
        return `${title} - ${author} - ${pages} pages`;
      } else {
        return "Invalid book object: missing required properties";
      }
    } else {
      return "Invalid input: argument must be an object";
    }
  }

  const book = {
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    pages: 128,
  };

  // Call the function with the book object and log the result
  console.log(getBookDetails(book));
}
// Iteration 3 | Delete Language
// Your code here:
// Ensure booksArray is an array and has 4 books
if (Array.isArray(booksArray) && booksArray.length === 4) {
  // Iterate over the booksArray and delete the details.language property
  booksArray.forEach((book) => {
    delete book.details.language;
  });

  // Confirm the changes by logging the booksArray
  console.log(booksArray);
} else {
  console.log("booksArray should be an array and should have 4 books.");
}

// Iteration 4 | Estimated Reading Time
// Your code here:
// Iterate over the booksArray and add a new property readingTime to each book object
booksArray.forEach((book) => {
  // Calculate the reading time for each book
  const readingTime = Math.ceil((book.pages * 500) / 90); // Reading time in minutes

  // Add the readingTime property to the book object
  book.readingTime = readingTime;
});

// Log the updated booksArray to the console
console.log(booksArray);

// Console.log the booksArray to confirm that the property has been added to each book object
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

function booksByAuthor() {
  // Your code here:
  // Declare the function booksByAuthor
  function booksByAuthor(dictionary) {
    const booksArray = [];

    // Iterate over the dictionary object
    for (const author in dictionary) {
      if (dictionary.hasOwnProperty(author)) {
        // Iterate over the books array for each author
        dictionary[author].forEach((bookData) => {
          const title = bookData[0];
          const pages = bookData[1];

          // Create a book object with title, pages, and author properties
          const bookObject = {
            title: title,
            pages: pages,
            author: author,
          };

          // Push the book object to the booksArray
          booksArray.push(bookObject);
        });
      }
    }

    return booksArray;
  }

  // Example usage:
  const booksArrayByAuthor = booksByAuthor(dictionaryExample);
  console.log(booksArrayByAuthor);
}

// Bonus: Iteration 6 | Average Page Count
function averagePageCount() {
  // Your code here:

  function averagePageCount(books) {
    // Check if the books array is empty
    if (books.length === 0) {
      return 0;
    }

    // Calculate the sum of all books' pages
    const sumOfPages = books.reduce((total, book) => total + book.pages, 0);

    // Calculate the average page count
    const average = sumOfPages / books.length;

    return average;
  }

  // Example usage:
  const books = [
    { title: "Book 1", pages: 100 },
    { title: "Book 2", pages: 200 },
    { title: "Book 3", pages: 150 },
  ];

  console.log(averagePageCount(books));
}
