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
      language: `English`,
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
];for (let i = 0; i < booksArray.length; i++) {
  const book = booksArray[i];
  delete book.details.language;
}


// Iteration 2 | Book Details
function getBookDetails(book) {
  // Your code here:
  return `${book[`title`]} - ${book[`author`]} - ${book[`pages`]} pages`; // Also with book.title
}


// Iteration 3 | Delete Language
// Your code here:
for (let i = 0; i < booksArray.length; i++) {
  const book = booksArray[i];
  delete book.details.language;
};


// Iteration 4 | Estimated Reading Time
// Your code here:
for (let i = 0; i < booksArray.length; i++) {
  const book = booksArray[i];
  const readingTime = Math.ceil((book.pages * 500) / 90); //Should be with ceil
  book.readingTime = readingTime;
};

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

function booksByAuthor(dictionaryExample) {
  const arrayOfBooks = [];  // Array que se entregará como rsultado
  const authors = Object.keys(dictionaryExample); // Con keys accedo a todos los objetos y los almaceno como autores
  for (let i = 0; i < authors.length; i++) {
    const author = authors[i];  // Recorro uno a uno los autores
    const books = dictionaryExample[author];  // Accedo al array de libros que tiene cada autor
    for (let j = 0; j < books.length; j++) {
      const book = books[j];  // Almaceno en book cada libro de la lista, que tiene el nombre del título y las páginas
      const title = book[0];
      const pages = book[1];

      arrayOfBooks.push({
          title: title,
          pages: pages,
          author: author,
      });
    }
  }
  return arrayOfBooks;
}


// Bonus: Iteration 6 | Average Page Count
function averagePageCount(arrayOfBooks) {
  let sumOfAllBooks = 0;
  for (let i = 0; i < arrayOfBooks.length; i++) {
    const book = arrayOfBooks[i];
    sumOfAllBooks += book.pages;
  }
  return sumOfAllBooks / arrayOfBooks.length;
}
