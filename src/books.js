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
const booksArray = [];
const book1 = {
   title: 'The Old Man and the Sea',
   pages: 128,
   author: 'Ernest Hemingway',
   details: {
      language: 'English',
      description: `One of Hemingway's most famous works, it tells the story of Santiago...`
 }
}
booksArray.push(book1);
const book2 = {
   title: 'The Airbnb Story',
   pages: 256,
   author: 'Leight Gallagher',
   details: {
      language: 'English',
      description: 'This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...'
   }
}
booksArray.push(book2);
const book3 = {
   title: 'Educated - A Memoir',
   pages: 352,
   author: 'Tara Westover',
   details: {
        language: 'English',
        description: 'Educated is an account of the struggle for self-invention...'
 }
}
booksArray.push(book3);
const book4 = {
   title: 'The Art of Learning',
   pages: 288,
   author: 'Josh Waitzkin',
   details: {
      language: 'English', 
      description: `The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.`
   }
}
booksArray.push(book4);

// Iteration 2 | Book Details
function getBookDetails(book) {
  // Your code here:
  let result = '';
  result += `${book.title} - ${book.author} - ${book.pages} pages`
  return result;
}
console.log(getBookDetails(book1));


// Iteration 3 | Delete Language
// Your code here:
booksArray.forEach(function(elem){
  delete elem.details.language;
})
console.log(booksArray);



// Iteration 4 | Estimated Reading Time
// Your code here:
booksArray.forEach(function(elem){
   elem.readingTime = Math.ceil((elem.pages * 500)/90) ;
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

function booksByAuthor(dictionary) {
  // Your code here:
  let dictKeys = Object.keys(dictionary); // writers
  let result = [];
  // navigate through each writer
  dictKeys.forEach(function (writer){
    // get each writer's number of books
    let writerBooksNum = (dictionary[writer]).length;
    // for each book of each writer, create an obj and push to the result array
    for(let i = 0; i < writerBooksNum; i++){
      let book = {};
      book.title = dictionary[writer][i][0];
      book.pages = dictionary[writer][i][1];
      book.author = writer;
      result.push(book);
    }
  
  })
  return result;
}
//console.log();


// Bonus: Iteration 6 | Average Page Count
function averagePageCount(booksArray) {
  // Your code here:
  let totalPages = 0;
  let bookNum = 0;
  booksArray.forEach(function (ele){
    let obj = {};
    totalPages += ele.pages;
    console.log(ele.pages);
    bookNum++;
  })
  return Math.ceil(totalPages/bookNum);
}
console.log(averagePageCount(booksByAuthor(dictionary)));