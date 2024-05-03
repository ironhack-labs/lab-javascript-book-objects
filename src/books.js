// Iteration 1 | Books Array

let Book1 ={
  title: 'The Old Man and the Sea',
  pages: 128,
  author: 'Ernest Hemingway',
  details: {
     language:' English',
     description: `One of Hemingway's most famous works, it tells the story of Santiago...`
  }
}


let Book2 = {
  title: 'The Airbnb Story',
  pages: 256,
  author: 'Leight Gallagher',
  details: {
     language: 'English',
     description: `This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...`
  }
}


let Book3 ={
  title: 'Educated - A Memoir',
  pages: 352,
  author: 'Tara Westover',
  details: {
     language: 'English',
     description: 'Educated is an account of the struggle for self-invention...'
  }
}


let Book4 = {
  title: 'The Art of Learning',  pages: 288,
  author: 'Josh Waitzkin',
  details: {
     language: 'English',
     description: `The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.`
  }
}



// Your code here:
const booksArray = [Book1, Book2, Book3, Book4];
console.log(booksArray);



// Iteration 2 | Book Details
function getBookDetails(bookInfo) {
  // Your code here:
  return `${bookInfo.title} - ${bookInfo.author} - ${bookInfo.pages} pages`
}


// Iteration 3 | Delete Language
booksArray.forEach((book) => {
  delete book.details.language;
})



// Iteration 4 | Estimated Reading Time
// Your code here:
booksArray.forEach((book) => {
  book.readingTime = +Math.ceil((book.pages * 500) / 90).toFixed(0)
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

  const booksArray = [];

for (const [key, value] of Object.entries(dictionary)) {
  for (const [title, pages] of value) {
    booksArray.push({ title, pages, author: key });
  }
}

return  booksArray
}



// Bonus: Iteration 6 | Average Page Count
function averagePageCount(booksArray) {
  // Your code here:
  let totalOfPages = 0;
  booksArray.forEach((book) => {
    totalOfPages += book.pages;
  })
  const averageOfPage = totalOfPages / booksArray.length;
  return averageOfPage

}