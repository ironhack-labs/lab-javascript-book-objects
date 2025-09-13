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
    description: "One of Hemingway's most famous works, it tells the story of Santiago..."
  }
  },

  {
  title: "The Airbnb Story",
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
    description: "Educated is an account of the struggle for self-invention..."
  }
  },

  {title: "The Art of Learning",
  pages: 288,
  author: "Josh Waitzkin",
  details: {
    language: "English",
    description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
  }
  }
];
// console.log(booksArray[3]);



// Iteration 2 | Book Details
function getBookDetails(inputArray) {
  // Your code here:
  return `${inputArray.title} - ${inputArray.author} - ${inputArray.pages} pages`  
}

// const testingArray = {
//   title: "The Art of Learning",
//   pages: 288,
//   author: "Josh Waitzkin",
//   details: { /*...*/ }
// };
// console.log(getBookDetails(testingArray));




// Iteration 3 | Delete Language
// Your code here:
for (let eachkey of booksArray){
  delete eachkey.details.language;
  console.log(eachkey);
}






// Iteration 4 | Estimated Reading Time
// Your code here:
for (let eachkey of booksArray){
  const nbPages = eachkey.pages;
  const readingTimeInMinutes = Math.ceil((nbPages * 500) / 90);
  eachkey.readingTime = readingTimeInMinutes;
  console.log(eachkey);
}







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

function booksByAuthor(dictionary) {
  // Your code here:
  const newArray=[];
  for (let eachkey in dictionary){
    for (let eachArray in dictionary[eachkey]){
      const newDict = {};
      newDict.title = dictionary[eachkey][eachArray][0];
      newDict.pages = dictionary[eachkey][eachArray][1];
      newDict.author = eachkey;
      newArray.push(newDict);
    }
  }
  return newArray;
}
// console.log(booksByAuthor(dictionary));



// Bonus: Iteration 6 | Average Page Count
function averagePageCount(dictionary) {
  // Your code here:
  let totalPages = 0;
  let totalBook = 0;
  for (let eachDict in dictionary){
      const nbBooks = dictionary[eachDict].length;
      totalBook += nbBooks;
    for (let eachArray in dictionary[eachDict]){
      // console.log(dictionary[eachDict][eachArray][1]);
      totalPages += dictionary[eachDict][eachArray][1];
    }
  }
  const average = totalPages / totalBook;
  return average;
}
// console.log(averagePageCount(dictionary));