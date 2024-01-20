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
// title: Pride and Prejudice
// pages: 279
// author: Jane Austen
// details: {
//    language: English
//    description: One of the most popular novels in the English language...
// }

// Book 4
// title: Educated - A Memoir
// pages: 352
// author: Tara Westover
// details: {
//    language: English
//    description: Educated is an account of the struggle for self-invention...
// }

// Book 5
// title: The Art of Learning
// pages: 288
// author: Josh Waitzkin
// details: {
//    language: English
//    description: The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.
// }


// Your code here:
const booksArray = [];

booksArray.push({
  title: "The Old Man and the Sea",
  pages: 128,
  author: "Ernest Hemingway",
  details: {
    language: "English",
    description: "One of Hemingway's most famous works, it tells the story of Santiago..."
  }
})
booksArray.push({
  title: "The Airbnb Story",
  pages: 256,
  author: "Leight Gallagher",
  details: {
    language: "English",
    description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
  }
})
booksArray.push({
  title: "Pride and Prejudice",
  pages: 279,
  author: "Jane Austen",
  details: {
    language: "English",
    description: "One of the most popular novels in the English language..."
  }
})
booksArray.push({
  title: "Educated - A Memoir",
  pages: 352,
  author: "Tara Westover",
  details: {
    language: "English",
    description: "Educated is an account of the struggle for self-invention..."
  }

})

booksArray.push({
  title: "The Art of Learning",
  pages: 288,
  author: "Josh Waitzkin",
  details: {
    language: "English",
    description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
  }
}
)

// console.log(booksArray);

// Iteration 2 | Book Details
function getBookDetails(book) {
  // Your code here:
  const result = `${book.title} - ${book.author} - ${book.pages} pages`
  return result;
}

// console.log(getBookDetails(4))


// Iteration 3 | Delete Language
// Your code here:

booksArray.forEach((book) => {
  delete book.details.language;
})



// Iteration 4 | Estimated Reading Time
// Your code here:
booksArray.forEach((book) => {
  const minutes = Math.ceil((book.pages * 500) / 90);
  book.readingTime = minutes;
})
// console.log(booksArray);



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
  let bookArray = [];
  const bookAuthors = Object.keys(dictionary);

  for(let i=0; i<bookAuthors.length ; i++)
  {
  for (let j = 0; j < dictionary[bookAuthors[i]].length; j++)
   {
    let bookObject = {};
    const object = dictionary[bookAuthors[i]];   
    // console.log(object);
    bookObject.author = bookAuthors[i];
    bookObject.title = object[j][0];
    bookObject.pages = object[j][1];
    bookArray.push(bookObject);
    
  }
  // console.log(bookArray);
}
  return bookArray;
}



// Bonus: Iteration 6 | Average Page Count
function averagePageCount(booksArray) {
  // Your code here:
  let sumOfPages = 0;
for(let i= 0; i< booksArray.length; i++)
{
sumOfPages += booksArray[i].pages;
}
let averagePageCount =sumOfPages / booksArray.length;
return averagePageCount;
}


