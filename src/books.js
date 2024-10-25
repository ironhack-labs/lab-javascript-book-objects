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
      details:{
      lenguage: "English",
      description: "One of Hemingway's most famous works, it tells the story of Santiago..."
      }
  
  },
  {
      title: "The Airbnb Story",
      pages: 256,
      author: "Leight Gallagher",
      details:{
      lenguage: "English",
      description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
      }
  },
  {
      title: "Educated - A Memoir",
      pages: 352,
      author: "Tara Westover",
      details:{
      lenguage: "English",
      description: "Educated is an account of the struggle for self-invention..."
      }
  },
  {
      title: "The Art of Learning",
      pages: 288,
      author: "Josh Waitzkin",
      details:{
      lenguage: "English",
      description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
      }
  }
];

console.log(booksArray);




// Iteration 2 | Book Details
// Your code here:
function getBookDetails(book) {
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}


console.log(getBookDetails(booksArray[0])); 
console.log(getBookDetails(booksArray[1])); 
console.log(getBookDetails(booksArray[2])); 
console.log(getBookDetails(booksArray[3])); 

  


// Iteration 3 | Delete Language
// Your code here:
for (let i=0; i< booksArray.length; i++){
  delete booksArray[i].details.lenguage;
}

console.log(booksArray)

// Iteration 4 | Estimated Reading Time
// Your code here:
for (let i = 0; i < booksArray.length; i++) {
  const pages = booksArray[i].pages;
  
  const readingTime = Math.round((pages * 500) / 90); 
  booksArray[i].readingTime = readingTime; 
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


  // Your code here:
  function booksByAuthor(dictionary) {
    const booksArray2 = []; 

   
    const authors = Object.keys(dictionary);

   
    authors.forEach(author => {
        const books = dictionary[author]; 
        
       
        for (let i = 0; i < dictionary.length; i++) {
            const book = books[i]; 
            const bookObject = {
                title: book[0],  
                pages: book[1], 
                author: author   
            };
            booksArray2.push(bookObject); 
        }
    });
return booksArray2; 
}


const result = booksByAuthor(booksArray2);
console.log(result);


// Bonus: Iteration 6 | Average Page Count
function averagePageCount(books) {
  if (books.length === 0) return 0; 

  let totalPages = 0; 

  
  for (let i = 0; i < books.length; i++) {
      totalPages += books[i].pages;
  }

  
  const average = totalPages / books.length; 
  return average; 
}
const average = averagePageCount(booksArray);
console.log(`Average Page Count: ${average}`);
