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
    title : 'The Old Man and the Sea',
    pages : 128,
    author : 'Ernest Hemingway',
    details : {
       language: 'English',
       description: 'One of Hemingway\'s most famous works, it tells the story of Santiago...'
    },
  },
  {
    title: 'The Airbnb Story',
    pages: 256,
    author: 'Leight Gallagher',
    details: {
       language: 'English',
       description: 'This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...'

    } 
  },
  {
    title: 'Educated - A Memoir',
    pages: 352,
    author: 'Tara Westover',
    details: {
       language: 'English',
       description: 'Educated is an account of the struggle for self-invention...'
    }
  },
  {
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

let result = '';

for (let i=0 ; i<booksArray.length ; i++){
  if(booksArray[i].title === book){
    // result = `${booksArray[i].title.toUpperCase()} - ${booksArray[i].author.toUpperCase()} - ${booksArray[i].pages} pages`;
    result = `${booksArray[i].title} - ${booksArray[i].author} - ${booksArray[i].pages} pages`;
  }
}  
return result;  

}



// Iteration 3 | Delete Language
// Your code here:
// Iterate over the booksArray, and delete the nested object property language from each book object.
// Once done, console.log the booksArray array to confirm that the property has been deleted from all the book objects.
// 
// Note: You shouldn't change the booksArray manually, but instead, you should iterate over the array and delete the property from each book object.

for (let i = 0; i<booksArray.length; i++){
  delete booksArray[i].details.language
}

//console.log(booksArray)

// Iteration 4 | Estimated Reading Time
// Your code here:

for (let i = 0; i<booksArray.length; i++){
  booksArray[i].readingTime = Math.ceil((booksArray[i].pages * 500)/ 90);
}

//console.log(booksArray)

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
  let resultArr = [];
  let dictionaryKeys = Object.keys(dictionary); // this is my array of authors

  for (let i = 0; i < dictionaryKeys.length; i++) {   // first loop over authors listed in dictionary
    for (let j = 0; j < dictionary[dictionaryKeys[i]].length; j++) { // key is dictionaryKeys[i] to access the array containing books and pages, one after another
      let bookInfoObject = {};
      //console.log(dictionary[dictionaryKeys[i]].length);
      //console.log(dictionary[dictionaryKeys[i]]);
      bookInfoObject.title = dictionary[dictionaryKeys[i]][j][0];
      bookInfoObject.pages = dictionary[dictionaryKeys[i]][j][1];
      bookInfoObject.author = dictionaryKeys[i];

      resultArr.push(bookInfoObject);
    }
  }
  return resultArr;
}

console.log(booksByAuthor(dictionary));



// Bonus: Iteration 6 | Average Page Count
function averagePageCount(booksArray) {
  // Your code here:
  let sum = 0;
  booksArray.forEach(function sumNumberPages(element, i, arr){
  sum += element.pages
})
  return sum / booksArray.length
}
