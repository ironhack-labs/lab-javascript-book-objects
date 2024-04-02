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
//create an array containing the 4 objects above
const booksArray = [
  {
    title: "The Old Man and the Sea",
    pages: 128,
    author: "Ernest Hemingway",
    details: {
      language: "English",
      description:
        "description: One of Hemingway's most famous works, it tells the story of Santiago...",
    },
  },
  {
    title: "The Airbnb Story",
    pages: 256,
    author: "Leight Gallagher",
    details: {
      language: "English",
      description:
        " This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
    },
  },
  {
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
function getBookDetails(book) {
  // this function should return "title - author - pages pages"
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}

console.log(getBookDetails(booksArray[3]));

// Iteration 3 | Delete Language
/*
Iterate over the booksArray, and delete the nested object property language from each book object.
Once done, console.log the booksArray array to confirm that the property has been deleted from all the book objects.
*/

// Your code here:
booksArray.forEach((element) => {
  delete element.details.language;
});
console.log(booksArray);

// Iteration 4 | Estimated Reading Time
/*Iterate over the booksArray, and add a new property readingTime to each book object.
The value of the readingTime should be the number of minutes it will take to read the book. 
The number of minutes should be an integer (i.e., no decimals).
Assuming a page consists of 500 words and that the average reader reads 90 words per minute,
the estimated reading time for a book can be calculated using the following formula:
reading time in minutes = (number of pages * 500) / 90
*/

// Your code here:
/*
booksArray.forEach((element) => {
  //need to add to each array inside of the object
  element.readingTime = +((element.pages * 500) / 90).toFixed(0);
});
//this is showing correctly in console but not ticking the test... 
console.log(booksArray);
*/

//in solution is similar
booksArray.forEach((element) => {
  element.readingTime = Math.ceil((element.pages * 500) / 90);
  // element["readingTime"] = Math.ceil((element.pages * 500) / 90);
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

/*Create a function named booksByAuthor() that takes one argument - dictionary which is an object,
 having the same structure as the dictionaryExample shown above.

The function should return an array containing the book objects with the properties :

title - the title of the book (first element of the array)
pages - the number of pages of the book (second element of the array)
author - the author of the book (the dictionary key)

*/

function booksByAuthor(dictionary) {
  // Your code here:

  let newObj = []; //creating a new object which will have each book as an index item, each book is an array
  // console.log(dictionary);
  for (let key in dictionary) {
    //loop through the array dictionary and check each key author

    // console.log(dictionary[key]);
    // console.log(dictionary[key][0][0], "title");
    // console.log(dictionary[key][0][1], "page");
    // console.log(dictionary[key][1][0], "title");
    // console.log(dictionary[key][1][1], "page");
    for (let i = 0; i < dictionary[key].length; i++) {
      newObj.push({
        title: dictionary[key][i][0], //author, item, property index 0 which is title
        pages: dictionary[key][i][1], //author, item, property index 1 which is pages
        author: key, //name of the author itself which is the key
      });
    }
  }
  return newObj;
}

console.log(booksByAuthor(dictionary));

// Bonus: Iteration 6 | Average Page Count

/*
Create a function named averagePageCount() that takes one argument - the books array.
The function should return a number representing the average page count of all the books in the array.
The formula to calculate the average page count is:
average page count = sum of all books' pages / number of books
*/

function averagePageCount(booksArray) {
  // Your code here:
  let sum = 0;

  //loop through each element of the books array
  booksArray.forEach((element) => (sum += element.pages));
  //for each element add the number of pages to the variable "sum"
  return sum / booksArray.length;
}

console.log(averagePageCount(booksArray));
