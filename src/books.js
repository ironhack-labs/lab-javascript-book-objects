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
  {
     title: "The Old Man and the Sea",
     pages: 128,
     author: "Ernest Hemingway",
     details: {
     language: "English",
     description: "One of Hemingway's most famous works, it tells the story of Santiago...",
     }
  },

  {  
    title: "The Art of Learning",
    pages: 256,
    author: "Leight Gallagher",
    details: { 
      language: "English",
      description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
    }
  },
  {
    title: "Educated - A Memoir",
    pages: 352,
    author: "Tara Westover",
    details: {
    language: "English",
    description: "Educated is an account of the struggle for self-invention...",
    }
  },
  {
    title: "The Art of Learning",
    pages: 288,
    author: "Josh Waitzkin",
    details: {
    language: "English",
    description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.",
    }

  },
];




// Iteration 2 | Book Details
function getBookDetails(book) {
  // Your code here:
return `${book.title} - ${book.author} - ${book.pages} pages`;
       
}



// Iteration 3 | Delete Language
// Your code here:
for (let i = 0; i < booksArray.length; i++) {
  delete booksArray[i]["details"]["language"];
}

console.log(booksArray);
/* we can also use this loop
  for (const book of booksArray) {
    delete book.details.language;
} */


// Iteration 4 | Estimated Reading Time
// Your code here:
for (const book of booksArray) {

  const readingTime = Math.ceil(( book.pages * 500) / 90 );

  book.readingTime = readingTime;

}
console.log(book.readingTime);
console.log(booksArray);


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

/*
Create a function named booksByAuthor() that takes one argument - dictionary which is an object having the same structure as the dictionaryExample shown above.


The function should return an array containing the book objects with the properties :

title - the title of the book (first element of the array)
pages - the number of pages of the book (second element of the array)
author - the author of the book (the dictionary key)

For example, if we pass the above dictionaryExample object as the argument, the function should return the array of book objects:
*/

function booksByAuthor(dictionary) {
  // Your code here: 

};



// Bonus: Iteration 6 | Average Page Count
function averagePageCount() {
  // Your code here:
  
}
