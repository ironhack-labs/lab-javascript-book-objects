// Iteration 1 | Books Array

// Book 1
// title: The Old Man and the Sea
// pages: 128
// author: Ernest Hemingway
// details: {
//    language: English
//    description: One of Hemingway's most famous works, it tells the story of Santiago...
// }

//Book 2
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
const booksArray = ["book1", "book2", "book3", "book4"];

const book1 = {
  title: "The Old Man and the Sea",
  pages: 128,
  author: "Earnest Hemingway",
  details: {
    languages: "English",
    description: " One of Hemingway's most famous works, it tells the story of Santiago...",
},
};

const book2 = {
  title: "The Airbnb Story",
  pages: 256,
  author: "Leight Gallagher",
  details: {
    language: "English",
    description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
},
};

const book3 = {
  title: "Educated - A Memoir",
  pages: 352,
  author: "Tara Westover",
  details: {
     language: "English",
      description: "Educated is an account of the struggle for self-invention...",
},
};

const book4 = {
  title: "The Art of Learning",
  pages: 288,
  author: "Josh Waitzkin",
  details: {
    language: "English",
    description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.",
 },
  };


// Iteration 2 | Book Details
function getBookDetails(book) {
  // Your code here:

}



// Iteration 3 | Delete Language
// Your code here:

//let book1 = booksArray.pop(book1.details.languages); doesnt work
//booksArray.forEach(function(book) {
 // delete book.details.languages;
//});

//I know there must be a way to loop and delete 


booksArray.forEach(function(book1) {
  delete book1.details.languages;
});

booksArray.forEach(function(book2) {
  delete book2.details.languages;
});
booksArray.forEach(function(book3) {
  delete book3.details.languages;
});

booksArray.forEach(function(book4) {
  delete book4.details.languages;
});

console.log(book1.details);


// Iteration 4 | Estimated Reading Time
// Your code here:




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

function booksByAuthor(dictionary) {}
  // Your code here:
  /*const dictionary = {
    []
  }
}*/



// Bonus: Iteration 6 | Average Page Count
function averagePageCount() {}
  // Your code here:
  

