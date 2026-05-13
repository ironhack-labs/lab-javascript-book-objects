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
  title: 'The Old Man and the Sea',
  pages: 128,
  author: 'Ernest Hemingway',
  details: {
    language: 'English',
    description: 'One of Hemingway\'s most famous works, it tells the story of Santiago...'
  }
}, {
  title: 'The Airbnb Story',
  pages: 256,
  author: 'Leight Gallagher',
  details: {
    language: 'English',
    description: 'This is the remarkable behind-the-scenes story of the creation and growth'
  }
}, {
  title: 'Educated - A Memoir',
  pages: 352,
  author: 'Tara Westover',
  details: {
    language: 'English',
    description: 'Educated is an account of the struggle for self-invention...'
  }
}, {
  title: 'The Art of Learning',
  pages: 288,
  author: 'Josh Waitzkin',
  details: {
    language: 'English',
    description: 'The Art of Learning takes readers through Waitzkin\'s unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.'
  }
}
];




// Iteration 2 | Book Details
function getBookDetails(book) {
  // Your code here:
  return `${book.title} - ${book.author} - ${book.pages} pages`
}



// Iteration 3 | Delete Language
// Your code here:
function deleteLanguage(bookArr) {
  bookArr.forEach(function (element, index) {
    delete element.details.language;
  })
  return bookArr
}
deleteLanguage(booksArray);

// Iteration 4 | Estimated Reading Time
// Your code here:
function estReadingTime(bookArr) {
  let timeInSeconds = 0;
  bookArr.forEach(function (element) {
    timeInSeconds = Math.ceil((element.pages * 500) / 90);
    element.readingTime = timeInSeconds;
  })
  return bookArr;
}
estReadingTime(booksArray);


// Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/
const dictionary = {
  'J. K. Rowling': [
    ["Harry Potter and the Philosopher's Stone", 223],
    ['Harry Potter and the Chamber of Secrets', 251],
    ['Harry Potter and the Prisoner of Azkaban', 317],
    ['Harry Potter and the Goblet of Fire', 636],
  ],
  'Neal Stephenson': [
    ['Cryptonomicon', 928],
    ['Anathem', 1008],
    ['Fall; or, Dodge in Hell', 896],
  ],
  'Malcolm Gladwell': [
    ['Outliers', 320],
    ['Blink', 287],
  ],
};


function booksByAuthor(authorsObj) {  
  const booksArr = []

  for (const authorName in authorsObj) {
    authorsObj[authorName].forEach(function (bookDataArr) {
      const newBook = {
        title: bookDataArr[0],
        pages: bookDataArr[1],
        author: authorName,
      }
      booksArr.push(newBook)
    })
  }
  return booksArr
}

const sortedDictionary = booksByAuthor(dictionary);

// for of --> iterables (arr, str)
// for in --> objects

// cmd K+U


/* function booksByAuthor_original(bookObj) {
  // Your code here:
  const newArray = [];
  const entiresAmount = Object.entries(bookObj).length;//3 entries
  let key = ''; // capture changing key name per iteration, so we can enter each array
  for (let i = 0; i < entiresAmount; i++) {
    key = Object.keys(bookObj)[i];
    arrayInKey = bookObj[key];
    for (let j = 0; j < arrayInKey.length; j++) {
      // console.log(Object.keys(bookArr)[i]) //author names
      // console.log(arrayInKey[j]); // title and pages
      // console.log(arrayInKey[j][0]); // title
      // console.log(arrayInKey[j][1]); // pages
      const authorName = Object.keys(bookObj)[i];
      // const pageAmount = arrayInKey[j].pop();
      // const titleName = arrayInKey[j].shift();
      const titleName = arrayInKey[j][0];
      const pageAmount = arrayInKey[j][1];
      newArray.push({
        title: titleName,
        pages: pageAmount,
        author: authorName,
      })


    }
  }
  return newArray;
} */





// Bonus: Iteration 6 | Average Page Count
function averagePageCount(bookArr) {
  let totalPageCount = 0;
  bookArr.forEach((element)=>{
    totalPageCount += element.pages;
  })
  return totalPageCount / bookArr.length;
}
console.log(averagePageCount(booksByAuthor(dictionary)))


