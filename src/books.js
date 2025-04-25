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
const booksArray = [{
title: "The Old Man and the Sea",
pages: 128,
author: "Ernest Hemingway",
details: {
    language: "English",
    description: "One of Hemingway's most famous works, it tells the story of Santiago..."
  }
},

{title: "The Airbnb Story",
pages: 256,
author: "Ernest Leight Gallagher",
details: {
    language: "English",
    description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
  }
},
{title: "Educated - A Memoir",
pages: 352,
author: "Tara Westover",
details: {
    language: "English",
    description: "Educated is an account of the struggle for self-invention..."
  }
},
{title: "The Art of Learning",
pages: 288,
author: "Josh Waitzkin",
details: {
    language: "English",
    description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
  }
}];




// Iteration 2 | Book Details
function getBookDetails(book) {
  // Your code here:
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}

console.log(getBookDetails(booksArray[3]));


// Iteration 3 | Delete Language
// Your code here:
for (let i = 0; i < booksArray.length; i++) {
  delete booksArray[i].details.language;

}
console.log (booksArray);


// Iteration 4 | Estimated Reading Time
// Your code here:

for (let i = 0; i < booksArray.length; i++) {

  let minutesToRead = (booksArray[i].pages * 500) / 90;
  
  booksArray[i].readingTime = Math.ceil(minutesToRead);

}
console.log (booksArray)


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

//Dictionary es un objeto que contiene 3 arrays que representan a tres autores, 
// y cada uno de estos 3 arrays contienen otros arrays (1 - 4, 2 - 3, 3 - 2). 

function booksByAuthor(dictionary) {
  // Your code here:

  let newBookArray = [];

  for (let authorsKeys in dictionary) { //authorsKeys = nombre de los autores
    
    let books = dictionary[authorsKeys]; //libros de esos autores

    for (let i = 0; i < books.length; i++) {

      let booksData = books[i]; //devolvería el titulo y las páginas
      
      let bookObject = {
        title: booksData[0],
        pages: booksData[1],
        author: authorsKeys
      }
      newBookArray.push(bookObject);
    }
  }

  return newBookArray;
  //return array nuevo que contenga objetos compuestos de titulo, paginas y autor.
}

console.log(booksByAuthor(dictionary));






// Bonus: Iteration 6 | Average Page Count


function averagePageCount(booksArray) {
  // Your code here:

  let totalPages = 0;

  //Tengo que recorrer un array:
  for (let i = 0; i < booksArray.length; i++){
    totalPages += booksArray[i].pages; //sumar todas las páginas de cada libro
    //.pages servirá para cada objeto que contenga la propiedad pages y quiera usar esta función.
  }

  let averagePageCount = totalPages / booksArray.length; //calcular promedio, que es la suma de todas las pags de libros / numero de libros

  //devolver un número que represente el promedio de páginas de todos los libros del array.
  return averagePageCount;


}
const books = booksByAuthor(dictionary);

console.log(averagePageCount(books));