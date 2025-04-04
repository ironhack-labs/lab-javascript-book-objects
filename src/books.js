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
  title: "A Clockwork Orange",
  pages: 240,
  author: "Anthony Burgess",
  details: {
      language: "English",
      description: "A dystopian satirical black comedy novel set in a near future society with a youth subculture of extreme violence"
  }
}

const book3 = {
  title: "I, Robot",
  pages: 256,
  author: "Isaac Asimov",
  details: {
      language: "English",
      description: "A collection of Sci-Fi short stories woven together by a framing narrative in which the main character tells each to a reporter"
  }
}

const book4 = {
  title: "A Feast for Crows",
  pages: 753,
  author: "George .R .R Martin",
  details: {
      language: "English",
      description: "The fourth of seven planned novels in the epic fantasy series A song of Ice and Fire."
  }
}

const booksArray = [book1, book2, book3, book4];




// Iteration 2 | Book Details
function getBookDetails(book) {
  // Your code here:
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}



// Iteration 3 | Delete Language
// Your code here:
booksArray.forEach(function(book){
  delete book.details.language;
})




// Iteration 4 | Estimated Reading Time
// Your code here:
booksArray.forEach(function(book){
  book.readingTime = Math.ceil((book.pages*500)/90);
})



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



function booksByAuthor(dict) {
  // Your code here:
  let booksArray = [];
  let authors = Object.keys(dict); 

  for (let i = 0; i < authors.length; i++) {
    let author = authors[i]; 
    let authorBooks = dict[author]; 

    for (let j = 0; j < authorBooks.length; j++) {
      let book = authorBooks[j]; 

      booksArray.push({
        author: author,
        title: book[0], 
        pages: book[1]
      });
    }
  }
  return booksArray;
  
}






// Bonus: Iteration 6 | Average Page Count
function averagePageCount(bookArr) {
  // Your code here:
  let sum = 0;
  for (let i=0; i<bookArr.length; i++){
    sum += bookArr[i].pages;
  }
  return sum/bookArr.length;
}
