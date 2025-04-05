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
  {title: "The Old Man and the Sea", pages: 128, author: "Ernest Hemingway", details: {language: "English", description: "One of Hemingway's most famous works, it tells the story of Santiago..."}} , 
  {title: "The Airbnb Story", pages: 256, author: "Leight Gallagher", details: {language: "English", description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."}}, 
  {title: "Educated - A Memoir", pages: 352, author: "Tara Westover", details: {language: "English", description: "Educated is an account of the struggle for self-invention..."}},
  {title: "The Art of Learning", pages: 288, author: "Josh Waitzkin", details: {language: "English", description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."}}];




// Iteration 2 | Book Details
function getBookDetails(book) {
  // Your code here:
  let bookDetails = `${book["title"]} - ${book["author"]} - ${book["pages"]} pages`;
  return bookDetails;
}



// Iteration 3 | Delete Language
// Your code here:
for (let i = 0; i < booksArray.length; i++) {
  const currentBook = booksArray[i];
  delete currentBook["details"]["language"];
}





// Iteration 4 | Estimated Reading Time
// Your code here:
for (let i = 0; i < booksArray.length; i++) {
  const currentBook = booksArray[i];
  const readingTime = Math.ceil(currentBook["pages"] * 500 / 90);
  currentBook["readingTime"] = readingTime;
}




// Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/
const dictionaryExample = {
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

function booksByAuthor(dictionaryByAuthor) {
  // Your code here:
  const dictionaryByBook = [];
  
  for (const author in dictionaryByAuthor) {
    const arrayOfBooks = dictionaryByAuthor[author];
    const currentBookObject = {} 
    for (let i = 0; i < arrayOfBooks.length; i++) {
      currentBookObject["title"] = arrayOfBooks[i][0];
      currentBookObject["pages"] = arrayOfBooks[i][1];
      currentBookObject["author"] = author;
      dictionaryByBook.push(currentBookObject);

    }
    
  }
  
  return dictionaryByBook;
}

booksByAuthor(dictionaryExample);



// Bonus: Iteration 6 | Average Page Count
function averagePageCount(bookArray) {
  // Your code here:
  let averagePageCount = 0;
  let numberOfItems = 0;
  let totalNumberOfPages = 0;

  for (let i = 0; i < bookArray.length; i++) {
    totalNumberOfPages += bookArray[i]["pages"];
  }
  numberOfItems = bookArray.length;
  averagePageCount = totalNumberOfPages / numberOfItems;

  return averagePageCount;
}
