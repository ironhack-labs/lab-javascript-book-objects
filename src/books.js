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
  { book :1 ,
    title: "The Old Man and the Sea",
    pages: 128,
    author: "Ernest Hemingway",
    details: {
      language: "English",
      description: "One of Hemingway's most famous works, it tells the story of Santiago..."
 }}, 
  {
    book:2,
  title: "The Airbnb Story",
pages: 256,
author: "Leight Gallagher",
details: {
   language: "English",
   description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
 }},
{ book:3,
  title : "Educated - A Memoir",
 pages: 352 ,
 author: "Tara Westover",
 details: {
  language: "English",
  description: "Educated is an account of the struggle for self-invention"
 }},
 {
  book: 4 ,
 title: "The Art of Learning",
 pages: 288,
 author: "Josh Waitzkin",
 details: {
   language: "English",
    description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
 }
 }
]



// Iteration 2 | Book Details
function getBookDetails(booknumber) {
  // Your code here:

return booknumber.title  + booknumber.author + "-"  + booknumber.pages + "pages";
}

// Iteration 3 | Delete Language
// Your code here:
booksArray.forEach((book) => {
  delete book.details.language;
})



// Iteration 4 | Estimated Reading Time
// Your code here:

booksArray.forEach((book) => {
  // Assuming an average reading speed of 90 words per minute and an average of 500 words per page
  //frist part of the formula is to calculate the total number of words in the book by multiplying the number of pages by 500 (the average number of words per page).
  
  let readingTime = 0;

  readingTime = Math.ceil((book.pages *500)/90);
  // Then as the property is set we "push" the reading time inside the object book with the name of readingTime = book.readingTime = new property of the book object and we assign it the value of readingTime that we calculated in the previous step.
book.readingTime = readingTime;
  

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

function booksByAuthor() {
  // Your code here:

}



// Bonus: Iteration 6 | Average Page Count
function averagePageCount() {
  // Your code here:

}
