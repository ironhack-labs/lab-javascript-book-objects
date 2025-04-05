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
  {title: "The Old Man and the Sea", pages: 128, author: "Ernest Hemingway", details:{language: "English", description:"One of Hemingway's most famous works, it tells the story of Santiago..."}},
  {title: "The Airbnb Story", pages: 256,  author:"Leight Gallagher", details:{language: "English", description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb"}},
  {title: "Educated - A Memoir", pages: 352, author: "Tara Westover", details:{language:"English", description: "Educated is an account of the struggle for self-invention..."}},
  {title: "The Art of Learning", pages:288, author:"Josh Waitzkin", details:{language:"English", description:"The art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."}},
];




// Iteration 2 | Book Details
function getBookDetails(object) {
  // Your code here:

  return `${object.title} - ${object.author} - ${object.pages} pages`;


}




// Iteration 3 | Delete Language
// Your code here:

  for (let i = 0; i < booksArray.length; i++){
    delete booksArray[i].details.language
  }
   
console.log(booksArray);



// Iteration 4 | Estimated Reading Time
// Your code here:
booksArray.forEach(function(book){
  book.readingTime = (Math.ceil(book.pages * 500 / 90));

  })
  
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
// Iteration 5 viene con catarsis emocional. Perché mi faccio questo? Avrei potuto rilassarmi sabato.
function booksByAuthor(dictionary) {

  let booksSortedFinal = [];   // THIS ONE STAYS
  //let authorKeys = []; // no necesito esto pero pensé que si :()
  //let bookDetails = []; esto no sirve, me devuelve titulo y paginas al mismo tiempo.
  
  
  for (let author in dictionary) {
   // authorKeys = [], this is useless
   for (let book of dictionary[author]){
   //authorKeys = Object.keys(dictionary); this is useless, why did I insist so much on this
   // bookDetails = [];   me divierte mucho inventar cosas que no necesito.
      booksSortedFinal.push ({
      author: author, // me cago en las 10000 veces que recibí undefined por poner idioteces.
      title: book[0], // despues de probar idioteces como dictionary[author] o BOOK solo o BOOKDETAILS.
      pages: book[1], // bue... si el anterior es book[0] este era obvio que era book[1]. 5 horas para entenderlo.
      })
   }
      
    }
  
      return booksSortedFinal;  // necesito un cigarrillo. todavia no entiendo porqué funcionó.
   
  
                               
   
}





// Bonus: Iteration 6 | Average Page Count
function averagePageCount(books) {
  // Your code here:
  
  let pageTotal= 0;

  books.forEach(function(book){
    pageTotal += book.pages;
  
  })
  return pageTotal / books.length;
}



