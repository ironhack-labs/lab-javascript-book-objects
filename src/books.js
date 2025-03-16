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


const booksArray = [{
    title: "The Old Man and the Sea",
    pages: 128,
    author: "Ernest Hemingway",
    details: {
      language: "English",
      description:"One of Hemingway's most famous works, it tells the story of Santiago..."
    }
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
      description: `The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.`
     }
    }
  
]

console.log(booksArray);

// Iteration 2 | Book Details
function getBookDetails(book) {
    return `${book.title} - ${book.author} - ${book.pages} pages`;
  }
  
  // Your code here:
 
  // Iteration 3 | Delete Language
  // Your code here:
  function deleteLanguage(arr) {
    arr.forEach(function(obj) {
      delete obj.details.language
    }  
  
  )}

  deleteLanguage(booksArray)
  console.log(deleteLanguage(booksArray));

  // Iteration 4 | Estimated Reading Time
  // Your code here:

  function readingTime(arr) {
    arr.forEach(function(obj){
      obj.readingTime = Math.ceil((obj.pages * 500)/90);
    })
  } 

  readingTime(booksArray);
  console.log(booksArray.readingTime)


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

console.log(Object.keys(dictionary));

function booksByAuthor(dictionaryArr) {
  // Your code here:
  let booksAsObject = [];

  for (const author in dictionary) { // -> iterating through dictionary elements, with the key (author) we obtained with -> Object.keys(dictionary) 
    dictionaryArr[author].forEach(function(obj){  //-> for each author we create an object with those other arguments vvvvvvvvvvvvvvvvvvvvv
      booksAsObject.push({  // -> pushing inside the final array
        title: obj[0],
        book: obj[1],
        author: author
      });
    });
  }
console.log("debugging -> ", booksAsObject) // >>>> Why undefined? <<<<
return booksAsObject;
  
};
console.log(booksByAuthor(dictionary));
booksByAuthor(dictionary)

// Bonus: Iteration 6 | Average Page Count
function averagePageCount(arr) {
  // Your code here:
  let result = 0;

  for (let i = 0; i < arr; i ++) {
    result = arr[i].pages/4
  }

  return result
  
}

// T-T I tried //
