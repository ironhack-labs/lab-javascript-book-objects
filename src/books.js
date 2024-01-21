// Iteration 1 | Books Array

let booksArray = [
  {
    title: 'The Old Man and the Sea',
    pages: 128,
    author: 'Ernest Hemingway',
    details: {
      language: 'English',
      description: "One of Hemingway's most famous works, it tells the story of Santiago..."
    }
  },
  {
    title: 'The Airbnb Story',
    pages: 256,
    author: 'Leight Gallagher',
    details: {
      language: 'English',
      description: 'This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...'
    }
  },
  {
    title: 'Pride and Prejudice',
    pages: 279,
    author: 'Jane Austen',
    details: {
      language: 'English',
      description: 'One of the most popular novels in the English language...'
    }
  },
  {
    title: 'Educated - A Memoir',
    pages: 352,
    author: 'Tara Westover',
    details: {
      language: 'English',
      description: 'Educated is an account of the struggle for self-invention...'
    }
  },
  {
    title: 'The Art of Learning',
    pages: 288,
    author: 'Josh Waitzkin',
    details: {
      language: 'English',
      description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
    }
  }
];



/*Create a function named getBookDetails() that takes one argument - a book object.
The function should return a string with the following format:
 
Expected Result:
 
TITLE - AUTHOR - PAGES pages
For example, if we pass a "book 4" object as an argument, the function should return the string:
 
*/

// Iteration 2 | Book Details
function getBookDetails(book) {

  return `${book.title}, ${book.author}, ${book.pages} pages`;
}

console.log(getBookDetails(booksArray[3]));





// Iteration 3 | Delete Language
// Your code here:

for (let i = 0; i < booksArray.length; i++) {
  delete booksArray[i].details.language;
}
console.log(booksArray);

/*### Iteration 4 | Estimated Reading Time

Iterate over the `booksArray`, and **add a new property 
`readingTime` to each book object**.<br>The value of the `readingTime`
 should be the number of minutes it will take to read the book. 
 The number of minutes should be an integer (i.e., no decimals).<br>

Assuming a page consists of *500 words* and that the average reader reads *90 words per minute*, 
the estimated reading time for a book can be calculated using the following formula:<br>

> reading time in minutes = (`number of pages` * `500`) / `90`
// Iteration 4 | Estimated Reading Time */
for (let i in booksArray) {
  const readingTime = Math.floor((booksArray[i].pages * 500) / 90);
  booksArray[i].readingTime = readingTime;
}
console.log(booksArray[2]);

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

function booksByAuthor() {
  // Your code here:

}



// Bonus: Iteration 6 | Average Page Count
function averagePageCount() {
  // Your code here:

}