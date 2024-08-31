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
    // Book 1
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
    // Book 2
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
    // Book 3
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
    // Book 4
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
function getBookDetails(bookElement) {
  // Your code here:
  // a string "TITLE - AUTHOR - PAGES pages"
  let authorName = bookElement.author;
  let bookTitle = bookElement.title;
  let numPages = bookElement.pages;
  return `${bookTitle} - ${authorName} - ${numPages} pages`;
}

// Iteration 3 | Delete Language
// Your code here:


for (let i = 0; i < booksArray.length; i++) {
  delete booksArray[i]["details"]["language"];
}

// Iteration 4 | Estimated Reading Time
// Your code here:
//nombreObj.propNueva = valueNuevaProp

for (let i = 0; i < booksArray.length; i++) {
  let numeroDePaginas = 0;
  numeroDePaginas = (booksArray[i]["pages"].valueOf() * 500) / 90;

  booksArray[i]["readingTime"] = Math.ceil(numeroDePaginas);
}

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
  /* The function should return an array containing the book objects with the properties :

title - the title of the book (first element of the array)
pages - the number of pages of the book (second element of the array)
author - the author of the book (the dictionary key)
*/
  const arrayResult = [];
  const arrayAutores = [];
  /* const arrayValores= [];
  const arrayValores2= []; */

  for (let i = 0; i < Object.keys(dictionary).length; i++) {
    arrayAutores.push(Object.keys(dictionary)[i]);
    

    
    for(let j = 0; j < dictionary[`${arrayAutores[i]}`].length; j++){
      //console.log("e" + dictionary[`${arrayAutores[i]}`][j]);
        const book = {};
        
        book.title = ""
        book.pages = 0;
        book.author = arrayAutores[i];
      for(let k = 0; k < dictionary[`${arrayAutores[i]}`][j].length; k+=2){
        //console.log("r" + dictionary[`${arrayAutores[i]}`][j][k]);
        book.title = dictionary[`${arrayAutores[i]}`][j][k];
        /* for(let l = 1; l < dictionary[`${arrayAutores[i]}`][j].length; l+=2){
          //console.log("r" + dictionary[`${arrayAutores[i]}`][j][k]);
          book.pages = dictionary[`${arrayAutores[i]}`][j][l];
          arrayResult.push(book);
        } */
        book.pages = dictionary[`${arrayAutores[i]}`][j][k + 1];
        arrayResult.push(book);
      }
      
    }
    
  }
  

  console.log(arrayResult);
  return arrayResult;
}

// Bonus: Iteration 6 | Average Page Count
function averagePageCount(booksArray) {
  // Your code here:
  //should return a number representing the average page count of all the books in the array.
  let averagePages = 0;
  let suma = 0;
  for (let i = 0; i < booksArray.length; i++) {
    suma += booksArray[i].pages;
  }

  averagePages = suma / booksArray.length;
  return averagePages;
}

// Names generated by faker: https://github.com/marak/Faker.js/