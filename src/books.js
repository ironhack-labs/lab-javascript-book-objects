// Iteration 1 | Books Array
// Your code here:

// Create the array 'booksArray'
const booksArray = [];

// Book 1
  // title: The Old Man and the Sea
  // pages: 128
  // author: Ernest Hemingway
  // details: {
  //    language: English
  //    description: One of Hemingway's most famous works, it tells the story of Santiago...
  // }

// Create the object 'book1' with the given parameters
const book1 = {
  title: "The Old Man and the Sea",
  pages: 128,
  author: "Ernest Hemingway",
  details: {
    language: "English",
    description: "One of Hemingway's most famous works, it tells the story of Santiago..."
  }
};

// Book 2
  // title: The Airbnb Story
  // pages: 256
  // author: Leight Gallagher
  // details: {
  //    language: English
  //    description: This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...
  // }

  // Create the object 'book2' with the given parameters
const book2 = {
  title: "The Airbnb Story",
  pages: 256,
  author: "Leight Gallagher",
  details: {
    language: "English",
    description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
  }
};

// Book 3
  // title: Pride and Prejudice
  // pages: 279
  // author: Jane Austen
  // details: {
  //    language: English
  //    description: One of the most popular novels in the English language...
  // }

  // Create the object 'book3' with the given parameters
const book3 = {
  title: "Pride and Prejudice",
  pages: 279,
  author: "Jane Austen",
  details: {
    language: "English",
    description: "One of the most popular novels in the English language..."
  }
};

// Book 4
  // title: Educated - A Memoir
  // pages: 352
  // author: Tara Westover
  // details: {
  //    language: English
  //    description: Educated is an account of the struggle for self-invention...
  // }

  // Create the object 'book4' with the given parameters
const book4 = {
  title: "Educated - A Memoir",
  pages: 352,
  author: "Tara Westover",
  details: {
    language: "English",
    description: "Educated is an account of the struggle for self-invention..."
  }
};

// Book 5
  // title: The Art of Learning
  // pages: 288
  // author: Josh Waitzkin
  // details: {
  //    language: English
  //    description: The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.
  // }

  // Create the object 'book5' with the given parameters
const book5 = {
  title: "The Art of Learning",
  pages: 288,
  author: "Josh Waitzkin",
  details: {
    language: "English",
    description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
  }
};

// Push all book objects into the booksArray array
booksArray.push(book1, book2, book3, book4, book5);

// Verify booksArray contains all book objects after pushing
// console.log(booksArray);



// Iteration 2 | Book Details
// Create the function getBookDetails which takes 1 book object
// as a parameter and returns a string with its title, author
// and number of pages
function getBookDetails(myBook) {
  return `${myBook.title} - ${myBook.author} - ${myBook.pages} pages`;
}

// Verify getBookDetails returns the correct information
//console.log(getBookDetails(book1))



// Iteration 3 | Delete Language
// Your code here:
// Create for loop to cycle through all books in booksArray
for (i = 0; i < booksArray.length; i++) {
  // Verify the location of the parameter we want to delete
  //console.log(booksArray[i].details.language)

  // Delete the 'language' parameter
  delete booksArray[i].details.language

    // Verify desired parameter was deleted
  //console.log(booksArray[i].details)
}



// Iteration 4 | Estimated Reading Time
// Your code here:

// Create for loop to cycle through all books in booksArray
for (i = 0; i < booksArray.length; i++) {
  // Create a variable to contain each book in the loop for
  // code clarity purposes
  thisBook = booksArray[i];

  // Add 'readingTime' parameter to all books
  thisBook.readingTime = Math.ceil((thisBook.pages * 500) / 90);

  // Verify new parameter was added correctly to each book
  //console.log(thisBook.readingTime)
}

//console.log(booksArray);

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

function booksByAuthor(data) {
  const dictionaryBooksArray = [];

  let keysArray = Object.keys(data);
  //console.log(keysArray);
  keysArray.forEach( function(key) {

    bookAuthor = key;
    let authorBooks = data[key];


    for (let i = 0; i < data[key].length; i++) {
      let book = data[key][i]
      let bookTitle = book[0];
      let bookPages = book[1];


      const newBook = {
        title: bookTitle,
        pages: bookPages,
        author: bookAuthor
      }

      dictionaryBooksArray.push(newBook)
    }
  })
  return dictionaryBooksArray;
}

dictionaryBooksArray = booksByAuthor(dictionary);
//console.log(dictionaryBooksArray);

// Bonus: Iteration 6 | Average Page Count

      
      //console.log(key);

  // Your code here:
function averagePageCount(data) {
  const divisor = data.length;
  let bookPages = 0;

  data.forEach(function(item) {
    //console.log(item);
    //console.log(item.pages);
    bookPages += item.pages;
    console.log(bookPages)

  })
  console.log(divisor)
  console.log(bookPages);
  return Math.round(bookPages/divisor)
  //return(bookpages/divisor);
}

averagePageCount(dictionaryBooksArray)