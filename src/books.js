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
    Book: 1,
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
    Book: 2,
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
    Book: 3,
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
    Book: 4,
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
function getBookDetails(book) {
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}

// Iteration 3 | Delete Language
booksArray.forEach((book) => {
  delete book.details.language;
});

// Iteration 4 | Estimated Reading Time
booksArray.forEach((book, index) => {
  booksArray[index].readingTime = Math.ceil((book.pages * 500) / 90);
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
//

function booksByAuthor(dictionary) {
  let result = [];
  for (let author in dictionary) {
    let books = dictionary[author];

    books.forEach((book) => {
      let title = book[0];
      let pages = book[1];
      let bookObj = {
        title: title,
        pages: pages,
        author: author,
      };
      result.push(bookObj);
    });
  }
  return result;
}
const books = booksByAuthor(dictionary);
console.log(books);

// Bonus: Iteration 6 | Average Page Count

function averagePageCount(books) {
  if (books.length === 0) {
    return 0; // Devolvemos 0 si la matriz de libros está vacía para evitar división por cero.
  }

  let totalPages = 0;

  // Iterar sobre la matriz de libros y sumar el número de páginas de cada libro.
  for (let i = 0; i < books.length; i++) {
    totalPages += books[i].pages;
  }

  // Calcular el promedio dividiendo la suma total de páginas por el número de libros.
  let average = totalPages / books.length;

  return average;
}
