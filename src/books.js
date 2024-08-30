// Iteration 1 | Books Array

// Book 4
// title: The Art of Learning
// pages: 288
// author: Josh Waitzkin
// details: {
//   language: English
//   description: The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.
// }


// Your code here:
const booksArray = [
  {title: "The Old Man and the Sea",
  pages: 128,
  author: "Ernest Hemingway",
  details: {
    language: "English",
    description: "One of Hemingway's most famous works, it tells the story of Santiago...",
  }
},
{title: "The Airbnb Story",
pages: 256,
author: "Leight Gallagher",
details: {
  language: "English",
  description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
}
},
{title: "Educated - A Memoir",
pages: 352,
author: "Tara Westover",
details: {
  language: "English",
  description: "Educated is an account of the struggle for self-invention...",
}
},
{title: "The Art of Learning",
  pages: 288,
  author: "Josh Waitzkin",
  details: {
    language: "English",
    description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
  }
},
];




// Iteration 2 | Book Details
function getBookDetails(book) {
  // Your code here:
return `${book.title} - ${book.author} - ${book.pages} pages`
}



// Iteration 3 | Delete Language
// Your code here:

for (i=0; i<booksArray.length;i++){
  delete booksArray[i].details.language
}

// Iteration 4 | Estimated Reading Time
// Your code here:

for(i=0; i<booksArray.length; i++) {
  booksArray[i]["readingTime"] = Math.ceil(booksArray[i]["pages"] * 500 / 90);
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

function booksByAuthor(bookDictionary) {
  // Your code here:
  const books = [];

  for(key in bookDictionary) {
    for(i=0; i<bookDictionary[key].length; i++){
      let book = {}
      book.title = bookDictionary[key][i][0]; //
      book.pages = bookDictionary[key][i][1]; //
      book.author = key;
      books.push(book);
    }
    
  }
  return books;
}

booksByAuthor(dictionary);
console.log("--------");


// Bonus: Iteration 6 | Average Page Count
function averagePageCount(booksArr) {
  // Your code here:
  let average = 0;
  let num = 0;
  for(i=0; i<booksArr.length; i++){
    //console.log(booksArr[i]);
    num += booksArr[i].pages;
    //console.log(booksArr[i].pages);
  }
  average = num / booksArr.length;
  return average;
}
