// Iteration 1 | Books Array
// Your code here:

const booksArray = [
  {
  title: "The Old Man and the Sea",
  pages: 128,
  author: "Ernest Hemingway",
  details: {
    language: "English",
    description: "One of Hemingway's most famous works, it tells the story of Santiago..."
  }},

  {
  title: "The Airbnb Story",
  pages: 256,
  author: "Leight Gallagher",
  details: {
    language: "English",
    description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
  }},

  {
  title: "Educated - A Memoir",
  pages: 352,
  author: "Tara Westover",
  details: {
    language: "English",
    description: "Educated is an account of the struggle for self-invention..."
  }},

  {
  title: "The Art of Learning",
  pages: 288,
  author: "Josh Waitzkin",
  details: {
    language: "English",
    description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
  }}
];

console.log(typeof(booksArray[0].title)); //test


// Iteration 2 | Book Details
// Your code here:
function getBookDetails(book) {
  return (book.title + " - " + book.author + " - " + book.pages + " pages");
}

console.log(getBookDetails(booksArray[0])); //test

// Iteration 3 | Delete Language
// Your code here:

booksArray.forEach(book => delete book.details.language);

console.log(booksArray); //test


// Iteration 4 | Estimated Reading Time
// Your code here:

booksArray.forEach(book => book.readingTime = Math.ceil(book.pages*500 / 90));

console.log(booksArray); //test

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

// console.log(Object.keys(dictionary)); //test

function booksByAuthor(dictionary) {
  let booksByAuthorArray = [];
  Object.keys(dictionary).forEach(author => {
    dictionary[author].forEach(book => {
      booksByAuthorArray.push({
        title: book[0], 
        pages: book[1], 
        author: author});
    });
  });
return booksByAuthorArray;
}

console.log(booksByAuthor(dictionary)); //test

// Bonus: Iteration 6 | Average Page Count
function averagePageCount(arr) {
  let pageSum = 0;
  arr.forEach(book => pageSum = pageSum + book.pages);
  return pageSum / arr.length;
}

console.log(averagePageCount(booksArray)); //test