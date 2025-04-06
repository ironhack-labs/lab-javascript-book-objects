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
  }
];





// Iteration 2 | Book Details
function getBookDetails(bookObj) {
  // Your code here:
  return `${bookObj.title} - ${bookObj.author} - ${bookObj.pages} pages`
}



// Iteration 3 | Delete Language
// Your code here:

booksArray.forEach(function(element){
  delete element.details.language;
})

console.log(booksArray);


// Iteration 4 | Estimated Reading Time
// Your code here:

booksArray.forEach(function(element){
  element.readingTime = Math.ceil((element.pages * 500) / 90);
})

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


//----------Solution using Object.keys + for loops------------

/*
function booksByAuthor(bookDict) {
  // Your code here:
  const keysArr = Object.keys(bookDict);
  const booksArrayFromDict = [];
  for (let i = 0; i < keysArr.length; i++) {
    for (let j = 0; j < bookDict[keysArr[i]].length; j++){
      booksArrayFromDict.push({title: bookDict[keysArr[i]][j][0], pages: bookDict[keysArr[i]][j][1], author: keysArr[i]});
    }
  }
  return booksArrayFromDict;
}
*/

//----------Solution using Object.keys + forEach-------------

/* 
function booksByAuthor(bookDict) {
  // Your code here:
  const keysArr = Object.keys(bookDict);
  const booksArrayFromDict = [];
  keysArr.forEach(function(element) {
    bookDict[element].forEach(function(_, indexJ){
      booksArrayFromDict.push({title: bookDict[element][indexJ][0], pages: bookDict[element][indexJ][1], author: element});
    })
  })
  return booksArrayFromDict;
}
*/

//----------Solution using for...in + forEach-------------

function booksByAuthor(bookDict) {
  // Your code here:
  const booksArrayFromDict = [];
  for (const property in bookDict) {
    bookDict[property].forEach(function(_, index){
      booksArrayFromDict.push({title: bookDict[property][index][0], pages: bookDict[property][index][1], author: property});
    })
  }
  return booksArrayFromDict;
}




// Bonus: Iteration 6 | Average Page Count
function averagePageCount(booksArr) {
  // Your code here:
  let sumPages = 0;
  let booksAmount = 0;

  booksArr.forEach(function(element){
    booksAmount++;
    sumPages += element.pages;
  })
  return sumPages / booksAmount;

}
