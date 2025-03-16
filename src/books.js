 // Iteration 1 | Books Array

 const Book1 ={
    title: "The Old Man and the Sea",
    pages: 128,
    author: "Ernest Hemingway",
    details: {
    language: "English",
    description: "One of Hemingway's most famous works, it tells the story of Santiago..."
 }
}

 const Book2 = {
 title: "The Airbnb Story",
 pages: 256,
 author: "Leight Gallagher",
 details: {
    language: "English",
    description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
 }
}

 const Book3 = {
  title: "Educated - A Memoir",
 pages: 352,
 author: "Tara Westover",
 details: {
    language: "English",
    description: "Educated is an account of the struggle for self-invention..."
 }
 }
 

 const Book4 = {
  title: "The Art of Learning",
 pages: 288,
 author: "Josh Waitzkin",
 details: {
   language: "English",
    description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
 }
 }
 


// Your code here:
const booksArray = [Book1, Book2, Book3, Book4];




// Iteration 2 | Book Details
function getBookDetails(book) {
  // Your code here:
  let result = `${book.title} - ${book.author} - ${book.pages} pages`;
  return result

}



// Iteration 3 | Delete Language
// Your code here:

for (let i = 0; i<booksArray.length; i++){
  delete booksArray[i].details.language
}


// Iteration 4 | Estimated Reading Time
// Your code here:
for (let i = 0; i<booksArray.length; i++){
  let readtime =0;
  readtime = Math.ceil(booksArray[i].pages*500/90)
  booksArray[i].readingTime = readtime
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
  // Your code here:
  let bookArr = [];

  let authors = Object.keys(dictionary);
  for (let i =0; i<authors.length; i++){
    for (let j =0; j< dictionary[authors[i]].length; j++){
      const bookObj = {};
      bookObj.author = authors[i];
      bookObj.title = dictionary[authors[i]][j][0];
      bookObj.pages = dictionary[authors[i]][j][1];
      bookArr.push(bookObj);

    }
  }
  return bookArr
}



// Bonus: Iteration 6 | Average Page Count
function averagePageCount(books) {
  // Your code here:
  let sum =0;
  for (let i =0; i< books.length; i++){
    sum += books[i].pages;
  }
  return (sum/books.length)
}
