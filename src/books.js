// Iteration 1 | Books Array

let booksArray = [
  {
    title: "The Old Man and the Sea",
    pages: 128,
    author: "Ernest Hemingway",
    details: {
      description: "One of Hemingway's most famous works, it tells the story of Santiago..."
    }
  },
  {
    title: "The Airbnb Story",
    pages: 256,
    author: "Leight Gallagher",
    details: {
      description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
    }
  },
  {
    title: "Educated - A Memoir",
    pages: 352,
    author: "Tara Westover",
    details: {
      description: "Educated is an account of the struggle for self-invention..."
    }
  },
  {
    title: "The Art of Learning",
    pages: 288,
    author: "Josh Waitzkin",
    details: {
      description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence..."
    }
  }
];

console.log(booksArray);

// Iteration 2 | Book Details
function getBookDetails(book) {
  // Your code here:
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}
console.log(getBookDetails(booksArray[0])); //probamos con el primer libro para que muestre el resultado 


// Iteration 3 | Delete Language
// Your code here:

const booksWithoutLanguage = booksArray.map(book => {
  // Copiamos los detalles sin la propiedad 'language'
  const { language, ...detailsWithoutLanguage } = book.details;

  // Retornamos el nuevo objeto libro con 'details' actualizado sin 'language'
  return {
    ...book,
    details: detailsWithoutLanguage
  };
});

// Verificación: Aseguramos que 'language' haya sido eliminado
console.log(booksWithoutLanguage);
booksWithoutLanguage.forEach(book => {
  console.log(book.details.language); // Debería imprimir 'undefined' si 'language' ha sido eliminado
});

// Iteration 4 | Estimated Reading Time
// Your code here:
const updatedBooksArray = booksArray.map(book => {
  return {
    ...book, // Copiamos todas las propiedades originales del libro
    readingTime: Math.ceil((book.pages * 500) / 90) // Calculamos el tiempo de lectura y redondeamos hacia arriba
  };
});

// Verificamos que 'readingTime' está presente y es un número en cada libro
console.log(updatedBooksArray);
updatedBooksArray.forEach(book => {
  console.log(`${book.title}: Tiempo estimado de lectura es ${book.readingTime} minutos.`);
  
  if (typeof book.readingTime !== 'number') {
    console.error(`Error: 'readingTime' no es un número en el libro ${book.title}`);
  }
});

// Verificación manual de que 'updatedBooksArray' tiene la propiedad 'readingTime'
updatedBooksArray.forEach(book => {
  if (!book.hasOwnProperty('readingTime')) {
    console.error(`Error: El libro ${book.title} no tiene la propiedad 'readingTime'`);
  } else if (typeof book.readingTime !== 'number') {
    console.error(`Error: 'readingTime' no es un número en el libro ${book.title}`);
  } else {
    console.log(`El libro ${book.title} tiene un 'readingTime' correcto de ${book.readingTime} minutos.`);
  }
});

booksArray = booksArray.map(book => {
  return {
    ...book,
    readingTime: Math.ceil((book.pages * 500) / 90)
  };
});

// Bonus: Iteration 5 | Books Dictionary

/*The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. */

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
const booksArray = [];

for (const author in dictionary) {
  const books = dictionary[author];

  for (const book of books) {
    const bookObject = {
      title: book[0],
      pages: book[1],
      author: author
    };
    booksArray.push(bookObject);
  }
}

return booksArray;
}

function averagePageCount(books) {
if (books.length === 0) return 0;

const totalPages = books.reduce((sum, book) => sum + book.pages, 0);
return totalPages / books.length;
}

// Pruebas
const books = booksByAuthor(dictionary);
console.log(books); // Imprime el array de objetos de libros

const averagePages = averagePageCount(books);
console.log(`Average Page Count: ${averagePages}`); // Imprime el promedio de páginas
