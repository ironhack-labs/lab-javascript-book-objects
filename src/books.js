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


const book1 = {
  title: "The Old Man and the Sea",
  pages: 128,
  author: "Ernest Hemingway",
  details: {
    language: "English",
    description: "One of Hemingway's most famous works, it tells the story of Santiago..."
  }
}

const book2 = {
  title: "The Airbnb Story",
  pages: 256,
  author: "Leight Gallagher",
  details: {
    language: "English",
    description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
  }
}

const book3 = {
  title: "Educated - A Memoir",
  pages: 352,
  author: "Tara Westover",
  details: {
    language: "English",
    description: "Educated is an account of the struggle for self-invention..."
  }
}

const book4 = {
  title: "The Art of Learning",
  pages: 288,
  author: "Josh Waitzkin",
  details: {
    language: "English",
    description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
  }
}

const booksArray = [book1, book2, book3, book4];
// Iteration 2 | Book Details
function getBookDetails(theBookObject) {
  // Your code here:

  return `${theBookObject.title} - ${theBookObject.author} - ${theBookObject.pages} pages`;
}

console.log(getBookDetails(book1))



// Iteration 3 | Delete Language
// Your code here:
for(let i=0; i< booksArray.length; i++){
  delete booksArray[i].details.language
  console.log(booksArray) 
}



// Iteration 4 | Estimated Reading Time
// Your code here:


for(let j= 0; j<booksArray.length; j++ ){
  
  let minutes= 0;
  if(!booksArray[j].readingTime){
    minutes = Math.ceil((booksArray[j].pages * 500) / 90);

    booksArray[j].readingTime = minutes
  } 
  
}
console.log(booksArray)


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
  let newDictionary = [];
  let author
  let authorValue
  let keysValue = Object.keys(dictionary);
  for(let i = 0; i < keysValue.length; i++){
    
    
    authorValue = keysValue[i]
    
    
    
    // dict.pages = dictionary[keysValue[i]]
    for(let j=0; j<dictionary[keysValue[i]].length; j++){
      const dict ={}
      let title = dictionary[authorValue][j][0]
      let pages = dictionary[authorValue][j][1]
      dict.title = title
      dict.pages = pages
      dict.author = keysValue[i]
      // console.log(dictionary[authorValue][j][0])
      
      newDictionary.push(dict)
    }
    // console.log(dict)
    
  }
  
  // console.log(keysValue)
  // console.log(author)
  
  
  return newDictionary

}

booksByAuthor(dictionary)


// Bonus: Iteration 6 | Average Page Count
function averagePageCount(theBooksOfArray) {
  // Your code here:
  let sum = 0;
  let noOfBooks = theBooksOfArray.length;
  for(let i=0; i < theBooksOfArray.length; i++){
    let numberOfPages = theBooksOfArray[i].pages;
    sum += numberOfPages
    
  }
  
  let average_Page_Count = sum / noOfBooks
  console.log(noOfBooks)

  return average_Page_Count
}

averagePageCount(booksArray)