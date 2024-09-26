// Iteration 1 | Books Array

// Your code here:
const booksArray = [
  (book = {
    title: "The Old Man and the Sea",
    pages: 128,
    author: "Ernest Hemingway",
    details: {
      language: "English",
      description:
        " One of Hemingway's most famous works, it tells the story of Santiago...",
    },
  }),
  (book = {
    title: "The Airbnb Story",
    pages: 256,
    author: "Leight Gallagher",
    details: {
      language: "English",
      description:
        "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
    },
  }),
  (book = {
    title: "Educated - A Memoir",
    pages: 352,
    author: "Tara Westover",
    details: {
      language: "English",
      description:
        "Educated is an account of the struggle for self-invention...",
    },
  }),
  (book = {
    title: "The Art of Learning",
    pages: 288,
    author: "Josh Waitzkin",
    details: {
      language: "English",
      description:
        "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.",
    },
  }),
];

// Iteration 2 | Book Details
function getBookDetails(book) {
  // Your code here:
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}

//Iterate over the booksArray, and delete the nested object property language from each book object.
// Once done, console.log the booksArray array to confirm that the property has been deleted from all the book objects.
//Note: You shouldn't change the booksArray manually, but instead, you should iterate over the array and delete the property from each book object.

// Iteration 3 | Delete Language
// Your code here:

booksArray.forEach(function (book) {
  for (const property in book) {
    delete book.details.language;
    console.log(booksArray);
  }
});

//Iterate over the booksArray, and add a new property readingTime to each book object.
//The value of the readingTime should be the number of minutes it will take to read the book. The number of minutes should be an integer (i.e., no decimals).
//Assuming a page consists of 500 words and that the average reader reads 90 words per minute, the estimated reading time for a book can be calculated using the following formula:
//reading time in minutes = (number of pages * 500) / 90
//Once done, console.log the booksArray to confirm that the property has been added to each book object.

// Iteration 4 | Estimated Reading Time
// Your code here:
booksArray.forEach(function (book) {
  for (const property in book) {
    book.readingTime = (book.pages * 500) / 90;
    console.log(booksArray);
  }
});

//For this iteration, in the books.js file we have provided you with an object named dictionaryExample.
//The dictionaryExample object contains different books grouped by the author. Each book is represented by an array containing two elements - the book title and the number of pages:
// Bonus: Iteration 5 | Books Dictionary
//Create a function named booksByAuthor() that takes one argument - dictionary which is an object having the same structure as the dictionaryExample shown above.
//The function should return an array containing the book objects with the properties :
//title - the title of the book (first element of the array)
//pages - the number of pages of the book (second element of the array)
//author - the author of the book (the dictionary key)
//For example, if we pass the above dictionaryExample object as the argument, the function should return the array of book objects:
//The keys of the dictionary should be the authors' names, and the values from the array should be converted to objects with the properties described above.
//Hint: One way is to use the Object.keys() method to get the keys of the dictionary. Another way is to use the for...in loop to iterate over the keys of the dictionary. In case you need a refresher on the Object.keys or the for...in loop, check out the following pages:
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
  for (const property of dictionary) {
    forEach;
  }
}

// Bonus: Iteration 6 | Average Page Count
function averagePageCount() {
  // Your code here:
}
