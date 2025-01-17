// Iteration 1 | Books Array

/*In the index.js file, create an array named booksArray containing 4 objects representing the books described in the code snippet below. Each object should have the following properties:

title
pages
author
description

The values of the properties should be the same as the ones in the following code snippet:*/

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
  {
    title: "The Old Man and the Sea",
    pages: 128,
    author: "Ernest Hemingway",
    details: {
      language: "English",
      description:
        "One of Hemingway's most famous works, it tells the story of Santiago...",
    },
  },
  {
    title: "The Airbnb Story",
    pages: 256,
    author: "Leight Gallagher",
    details: {
      language: "English",
      description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
    }
  },
  {
    title: "Educated - A Memoir",
    pages: 352,
    author: "Tara Westover",
    details: {
      language: "English",
      description: "Educated is an account of the struggle for self-invention..."
    }
  },
  {
    title: "The Art of Learning",
    pages: 288,
    author: "Josh Waitzkin",
    details: {
      language: "English",
      description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
    }
  },
];



// Iteration 2 | Book Details
/*Create a function named getBookDetails() that takes one argument - the book object. The function should return a string in the following format:

"TITLE - AUTHOR - PAGES pages"

Example - Input/Expected Output
Input:

{
  title: "The Art of Learning",
  pages: 288,
  author: "Josh Waitzkin",
  details: { ...}
}

Expected Output:

"The Art of Learning - Josh Waitzkin - 288 pages"*/

function getBookDetails(booksArray) {
  
  return `${booksArray.title} - ${booksArray.author} - ${booksArray.pages} pages`;
}



// Iteration 3 | Delete Language
/*Iterate over the booksArray, and delete the nested object property language from each book object.
Once done, console.log the booksArray array to confirm that the property has been deleted from all the book objects.

Note: You shouldn't change the booksArray manually, but instead, you should iterate over the array and delete the property from each book object.*/
// Your code here:

booksArray.forEach((book) => {  
  delete book.details.language;
})



// Iteration 4 | Estimated Reading Time
/*Iterate over the booksArray, and add a new property readingTime to each book object.
The value of the readingTime should be the number of minutes it will take to read the book. The number of minutes should be an integer (i.e., no decimals).

Assuming a page consists of 500 words and that the average reader reads 90 words per minute, the estimated reading time for a book can be calculated using the following formula:

reading time in minutes = (number of pages * 500) / 90


Once done, console.log the booksArray to confirm that the property has been added to each book object.*/
// Your code here:

booksArray.forEach((book) => {
  book.readingTime = Math.ceil((book.pages * 500) / 90);
})

console.log(booksArray);


// Bonus: Iteration 5 | Books Dictionary

/*For this iteration, in the books.js file we have provided you with an object named dictionaryExample.
The dictionaryExample object contains different books grouped by the author. Each book is represented by an array containing two elements - the book title and the number of pages:*/

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
/*Create a function named booksByAuthor() that takes one argument - dictionary which is an object having the same structure as the dictionaryExample shown above.


The function should return an array containing the book objects with the properties :

title - the title of the book (first element of the array)
pages - the number of pages of the book (second element of the array)
author - the author of the book (the dictionary key)

For example, if we pass the above dictionaryExample object as the argument, the function should return the array of book objects:

Expected Result:

[
  {
    title: "Harry Potter and the Philosopher's Stone",
    pages: 223,
    author: "J. K. Rowling",
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    pages: 251,
    author: "J. K. Rowling",
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    pages: 317,
    author: "J. K. Rowling",
  },

  // ...etc.

The keys of the dictionary should be the authors' names, and the values from the array should be converted to objects with the properties described above.

Hint: One way is to use the Object.keys() method to get the keys of the dictionary. Another way is to use the for...in loop to iterate over the keys of the dictionary. */

function booksByAuthor(dictionary) {
     
  const books = [];
  for (const author in dictionary) {
    for (const book of dictionary[author]) {
      const [title, pages] = book;
      books.push({ title, pages, author });
    }
  }
  return books;

}



// Bonus: Iteration 6 | Average Page Count
/*Create a function named averagePageCount() that takes one argument - the books array. The function should return a number representing the average page count of all the books in the array.

The formula to calculate the average page count is:

average page count = sum of all books' pages / number of books*/

function averagePageCount(booksArray) {

  const sum = booksArray.reduce((acc, book) => acc + book.pages, 0);
  const averagePages= sum / booksArray.length;

  return averagePages;
  
}
