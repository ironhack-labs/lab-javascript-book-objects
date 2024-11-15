// Iteration 1 | Books Array

// Book 1
// title: "The Old Man and the Sea",
// pages: 128,
// author: "Ernest Hemingway",
// details: {
//    language: "English",
//    description: "One of Hemingway's most famous works, it tells the story of Santiago...",
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
      languages: "English",
      description: "One of Hemingway's most famous works, it tells the story of Santiago..."
    }
  },
  {
    title: "The Airbnb Story",
    pages: 256,
    author: "Leight Gallagher",
    details: {
      language: "English",
      description: "This is the remarkable behind-the-scenes story of the creation and growth of Airnbnb"
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
  }
];




// Iteration 2 | Book Details
function getBookDetails(bookObj) {
  // Your code here:
  const bookStr = `${bookObj.title} - ${bookObj.author} - ${bookObj.pages} pages`;
  return bookStr;
}

// Iteration 3 | Delete Language
// Your code here:
for(let i = 0; i < booksArray.length; i++) {
  delete booksArray[i].details.languages;
}
// console.log(booksArray[0].details)



// Iteration 4 | Estimated Reading Time
// Your code here:
for(let i = 0; i < booksArray.length; i++) {
  let timeToRead = (booksArray[i].pages * 500) / 90;
  booksArray[i].readingTime = timeToRead;
}
// console.log(booksArray)



// Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/
const dictionary = {
    "J. K. Rowling": [ // dictionary["J. K. Rowling"] => => =>  v
        ["Harry Potter and the Philosopher's Stone", 223], // arr 0 => 0 , 1
        ["Harry Potter and the Chamber of Secrets", 251], // arr 1 => 0 , 1
        ["Harry Potter and the Prisoner of Azkaban", 317], // arr 2 => 0 , 1
        ["Harry Potter and the Goblet of Fire", 636], // arr 3 => 0 , 1
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
//   let newArr = [];

//   for(let i = 0; i < dictionary.length; i++) {    
//     newArr.push({});
//     newArr[i].title = dictionary[i][0];
//     newArr[i].pages = dictionary[i][1];
//     newArr[i].author = dictionary;
//   }
  
// return newArr;
}

// console.log(booksByAuthor(dictionary))

// let testArr = [];
// testArr.push({});
// testArr[0].author = "Ciclaninho";
// console.log(testArr)

// console.log(dictionary["J. K. Rowling"][0])

// Bonus: Iteration 6 | Average Page Count
function averagePageCount() {
  // Your code here:
  
}
