//  Iteration 1 | Books Array
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

//  Iteration 2 | Book Details
function getBookDetails(book) {
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}


function deleteLanguage() {
  booksArray.forEach(book => {
    if (book.details && book.details.language) {
      delete book.details.language;
    }
  });
}


deleteLanguage();



// Iteration 4


const wordsPerPage = 250; // Promedio de palabras por página
const wordsPerMinute = 200; // Promedio de palabras leídas por minuto

// Función para añadir 'readingTime'
function addReadingTime() {
  booksArray.forEach(book => {
    // Calcular el tiempo de lectura
    const totalWords = book.pages * wordsPerPage; // Total de palabras en el libro
    const readingTime = totalWords / wordsPerMinute; // Tiempo de lectura en minutos
    book.readingTime = Math.ceil(readingTime); // Redondear hacia arriba
  });
}

// Llama a la función para añadir 'readingTime'
addReadingTime();

// Bonus: Iteration 5 | Books Dictionary

// /* The `dictionary` is an object containing books grouped by author.
//  The book info is stored in arrays with structure: [title, pages].
// */
// const dictionary = {
//   "J. K. Rowling": [
//     ["Harry Potter and the Philosopher's Stone", 223],
//     ["Harry Potter and the Chamber of Secrets", 251],
//     ["Harry Potter and the Prisoner of Azkaban", 317],
//     ["Harry Potter and the Goblet of Fire", 636],
//   ],
//   "Neal Stephenson": [
//     ["Cryptonomicon", 928],
//     ["Anathem", 1008],
//     ["Fall; or, Dodge in Hell", 896],
//   ],
//   "Malcolm Gladwell": [
//     ["Outliers", 320],
//     ["Blink", 287],
//   ],
// };

// function booksByAuthor() {
//    Your code here:

// }



// Bonus: Iteration 6 | Average Page Count
// function averagePageCount() {
//    Your code here:

// }
