// Iteration 1 | Books Array
// Your code here:
const booksArray = [
  {
    title:"the Old Man and the Sea",
   pages: 128,
   author: "Ernest Hemingway",
   details : {
    language: "Englisch",
    description: "One of the Hemingway's most famous works,, it tells the story of Santiago..."
   }
  } ,
  {
    title:"The Airbnb Story",
   pages: 256,
   author: "Leight Gallagher",
   details : {
    language: "Englisch",
    description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
   }
  } ,
  {
    title:"Educated - A Memoir",
   pages: 352 ,
   author: "Tara Westover",
   details : {
    language: "Englisch",
    description: "Educated is an account of the struggle for self-invention..."
   }
  } ,
  {
    title:"The Art of Learning",
   pages: 288,
   author: "Josh Waitzkin",
   details : {
    language: "Englisch",
    description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
   }
  }
];




// Iteration 2 | Book Details
function getBookDetails(book) {
  return `${book.title} - ${book.author} - ${book.pages} pages`;

}



// Iteration 3 | Delete Language
for(let book of booksArray)
  delete book.details.language;
console.log(booksArray);


// Iteration 4 | Estimated Reading Time
// Your code here:
const wordsPerPage = 500;
const wordsPerMinute = 90;
for(let book of booksArray)
  book.readingTime = Math.ceil((book.pages * wordsPerPage ) / wordsPerMinute);

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

/* the names of the parameters is the same as the names of
the properties so we can remove the value for cleaner code */
// Factory function
function createBook(title,pages,author) {
  return {
    title,
    pages,
    author,
  }
}

function booksByAuthor(dictionary) {
  // Your code here:
  const booksArray = [];
  for (let key in dictionary){
    const author = key;
    for(let books of dictionary[key]){
        const title = books[0];
        const pages = books[1];
        const book = createBook(title,pages,author);
        booksArray.push(book);
    }
  }
  return booksArray;
}

console.log(booksByAuthor(dictionary));



// Bonus: Iteration 6 | Average Page Count
function averagePageCount(booksArray) {
  // Your code here:
  let sumPages = 0;
  let numberOfBooks = 0
  for(let book of booksArray){
    sumPages += book.pages;
    numberOfBooks++;
  }
  return sumPages / numberOfBooks;
}

console.log(averagePageCount(booksArray))