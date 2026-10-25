// Iteration 1 | Books Array


// Your code here:
let booksArray = 
[
  { 
    title: "The Old Man and the Sea",
    pages: 128,
    author: "Ernest Hemingway",
    details: {
        language: "English",
        description: "One of Hemingway's most famous works, it tells the story of Santiago...",
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
  return `${bookObj.title} - ${bookObj.author} - ${bookObj.pages} pages`;
}

console.log(getBookDetails(booksArray[3]));

// Iteration 3 | Delete Language
// Your code here:
for(let book of booksArray){
    delete book.details.language;
}


// Iteration 4 | Estimated Reading Time
// Your code here:
booksArray = booksArray.map((book)=>{
  return { ...book, readingTime:Math.ceil((book.pages * 500)/90)}
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

function booksByAuthor(dictionary) {
  // Your code here:
  const booksObj = [];

  //get the keys
  const authors = Object.keys(dictionary);

  //run the loop as many times as there are keys in keyOfDictionay
  for(key in authors){
    //run loop as many times as the element in the value array
    for( let element of dictionary[authors[key]]){
      booksObj.push({
        title:element[0],
        pages:element[1],
        author:authors[key]
      })
    }
  }
  return booksObj;
}

booksByAuthor(dictionary);


// Bonus: Iteration 6 | Average Page Count
function averagePageCount(booksArray) {
  // Your code here:
  // get the total pages
  const totalPages = booksArray.reduce((sum, book) => sum + book.pages, 0)
  return totalPages/booksArray.length
}
averagePageCount(booksArray);
