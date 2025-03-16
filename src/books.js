
const booksArray = [
  {
    title: "The Old Man and the Sea",
    pages: 128,
    author: 'Ernest Hemingway',
    details: {
      language: 'English',
      description: 'One of Hemingway\'s most famous works, it tells the story of Santiago...'
    }
  },

  {
    title: 'The Airbnb Story',
    pages: 256,
    author: 'Leight Gallagher',
    details: {
      language: 'English',
      description: 'This is the remarkable behind - the - scenes story of the creation and growth of Airbnb...',
    }
  },

  {
    title: 'Educated - A Memoir',
    pages: 352,
    author: 'Tara Westover',
    details: {
      language: 'English',
      description: 'Educated is an account of the struggle for self - invention...',
    }
  },

  {
    title: 'The Art of Learning',
    pages: 288,
    author: 'Josh Waitzkin',
    details: {
      language: 'English',
      description: 'The Art of Learning takes readers through Waitzkin\'s unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.'
    }
  },
]

// Your code here:





// Iteration 2 | Book Details
function getBookDetails(bookObject) {
  return `${bookObject.title} - ${bookObject.author} - ${bookObject.pages} pages`
}


// Cree una función llamada getBookDetails()que tome un argumento: el objeto libro.La función debería devolver una cadena en el siguiente formato:

// "TITLE - AUTHOR - PAGES pages"

// Ejemplo: entrada / salida esperada
// Aporte:

{
  // title: "The Art of Learning",
  // pages: 288,
  // author: "Josh Waitzkin",
  // details: { /*...*/ }
}

// Rendimiento esperado:

// "The Art of Learning - Josh Waitzkin - 288 pages"







// Iteration 3 | Delete Language
// Your code here:
booksArray.forEach((book) => {
  delete book.details.language;
});

console.log(booksArray);



// Iteration 4 | Estimated Reading Time
// Your code here:
booksArray.forEach((book) => {

  const minutes = (book.pages * 500) / 90

  book.readingTime = Math.ceil(minutes)

});







// Itere sobre booksArrayy agregue una nueva propiedad readingTimea cada objeto de libro.

// El valor de readingTimedebe ser la cantidad de minutos que llevará leer el libro.El número de minutos debe ser un número entero(es decir, sin decimales).

// Suponiendo que una página consta de 500 palabras y que el lector promedio lee 90 palabras por minuto, el tiempo estimado de lectura de un libro se puede calcular mediante la siguiente fórmula:

// tiempo de lectura en minutos = (number of pages * 500) /90


// Una vez hecho esto, console.logconfirme booksArrayque la propiedad se haya agregado a cada objeto del libro.





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

//function booksByAuthor(dictionary) {
//const readingPages = Object.values(dictionary)
//}

function booksByAuthor(dictionary) {
  const emptyObject = []

  Object.keys(dictionary).forEach((title) => {

    Object.values(dictionary).forEach((book) => {

      const newBook = {}
      newBook.title = book[0][0]
      newBook.pages = book[0][1]
      newBook.author = title

      emptyObject.push(newBook)
    })
  })

  return emptyObject
}
console.log(booksByAuthor(dictionary))

// For this iteration, in the books.js file we have provided you with an object named dictionaryExample.
// The dictionaryExample object contains different books grouped by the author.Each book is represented by an array containing two elements - the book title and the number of pages:









// Bonus: Iteration 6 | Average Page Count
function averagePageCount(booksArray) {

  let pageCount = 0
  let bookCount = 0

  booksArray.forEach((item) => {
    pageCount += item.pages
    bookCount++
  })


  return pageCount / bookCount
}

// Create a function named averagePageCount() that takes one argument - the books array.The function should return a number representing the average page count of all the books in the array.

// The formula to calculate the average page count is:

// // average page count = sum of all books' pages / number of books