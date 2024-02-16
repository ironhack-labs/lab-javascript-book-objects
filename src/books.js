// Iteration 1 | Books Array

// Book 1
const book1={
  title: "The Old Man and the Sea",
  pages: 128 ,
  author: "Ernest Himingway" ,
  details: {
    language: "English",
    description: "One of Hemingway's most famous works, it tells the story of Santiago..."
  }
}

// Book 2
const book2={
   title: "The Airbnb Story",
   pages: 256,
   author: "Leight Gallagher",
   details: {
      language: "English",
      description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
   }}

// Book 3
const book3={
   title: "Pride and Prejudice",
   pages: 279,
   author: "Jane Austen",
   details: {
      language: "English",
      description: "One of the most popular novels in the English language..."
   }}

// Book 4
const book4={
   title: "Educated - A Memoir",
   pages: 352,
   author: "Tara Westover",
   details: {
      language: "English",
      description: "Educated is an account of the struggle for self-invention..."
   }}

// Book 5
const book5={
   title: "The Art of Learning",
   pages: 288,
   author: "Josh Waitzkin",
   details: {
      language: "English",
      description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
   }}


// Your code here:
const booksArray = [book1, book2, book3, book4, book5];




// Iteration 2 | Book Details

function getBookDetails(book) {
  const { title, author, pages } = book;
  return `${title} - ${author} - ${pages} pages`;
}



// Iteration 3 | Delete Language
// Your code here:
booksArray.forEach(book=>delete book.details.language)




// Iteration 4 | Estimated Reading Time

booksArray.forEach(book => {
  const { pages } = book;
  const readingTime = Math.ceil((pages * 500) / 90); 
  book.readingTime = readingTime;
});

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
  const bookObjects = [];

  for (const author in dictionary) {
    const books = dictionary[author];

    for (let i = 0; i < books.length; i++) {
      const bookInfo = books[i];
      const title = bookInfo[0];
      const pages = bookInfo[1];

      const bookObject = { title, pages, author };
      bookObjects.push(bookObject);
    }
  }

  return bookObjects;
}





// Bonus: Iteration 6 | Average Page Count


function averagePageCount(books) {
  if (books.length === 0) {
    return 0;
  }

  const totalPageCount = books.reduce((sum, book) => sum + book.pages, 0);
  return totalPageCount / books.length;
}


