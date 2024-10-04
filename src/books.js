/* Iteration 1 | Books Array: 

In the index.js file, create an array named booksArray containing 4 objects representing the books described in the code snippet below. Each object should have the following properties:

title
pages
author
description
*/

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
const booksArray = [ {title: "The Old Man and the Sea", 
  pages: 128, 
  author: "Ernest Hemingway", 
  details: { language: "English", 
             description: "One of Hemingway's most famous works, it tells the story of Santiago...", 
           }
 } , 

{title: "The Airbnb Story",
    pages: 256,
    author: "Leight Gallagher", 
    details: { language: "English", 
               description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb.."
             }
   }, 

{ title: "Educated - A Memoir", 
    pages: 352,
    author: "Tara Westover", 
    details: {language: "English", 
    description: "Educated is an account of the struggle for self-invention...", 
             }
  }, 

{title: "The Art of Learning", 
   pages: 288, 
   author: "Josh Waitzkin", 
   details: {language: "English", 
             description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
            }
}
]; 




/* Iteration 2 | Book Details

Create a function named getBookDetails() that takes one argument - the book object. The function should return a string in the following format:

"TITLE - AUTHOR - PAGES pages"
*/

book =  {
    title: "The Art of Learning",
    pages: 288,
    author: "Josh Waitzkin",
    details: { /*...*/ }
  } 

  function getBookDetails(book) {
    // Your code here:  
    let {title, author, pages} = book; 

    return `${title} - ${author} - ${pages} pages`;

  }


/* Iteration 3 | Delete Language
  Iterate over the booksArray, and delete the nested object property language from each book object.
  Once done, console.log the booksArray array to confirm that the property has been deleted from all the book objects.

  Note: You shouldn't change the booksArray manually, but instead, you should iterate over the array and delete the property from each book object.

*/

    for (let i = 0; i < booksArray.length; i++){

      delete booksArray[i].details.language; 

    }

    console.log(booksArray); 


  

/* Iteration 4 | Estimated Reading Time: 

    Iterate over the booksArray, and add a new property readingTime to each book object.
  The value of the readingTime should be the number of minutes it will take to read the book. The number of minutes should be an integer (i.e., no decimals).

  Assuming a page consists of 500 words and that the average reader reads 90 words per minute, the estimated reading time for a book can be calculated using the following formula:

  reading time in minutes = (number of pages * 500) / 90


  Once done, console.log the booksArray to confirm that the property has been added to each book object.
*/

// Your code here:



/* Con ForEach
booksArray.forEach(book => { 

  const totalWords = book.pages * 500;  
  const time = Math.ceil(totalWords / 90); 
  book.readingTime = time;                                
}); 

*/
  for (let i = 0; i < booksArray.length; i++) {
   
   const readingTime = (booksArray[i].pages * 500) / 90; //Aplico la fórmula por cada libro del array.
   
   booksArray[i].readingTime = Math.ceil(readingTime); // Con esto eliminamos los decimales. 

    }
 
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

function booksByAuthor() {
  // Your code here:
  
}



// Bonus: Iteration 6 | Average Page Count
function averagePageCount() {
  // Your code here:
  
}
