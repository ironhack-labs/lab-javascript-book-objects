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
 details: {
    language: "English",
    description:" One of Hemingway's most famous works, it tells the story of Santiago...",
 }},
 {
title: "The Airbnb Story",
 pages: 256,
 author: "Leight Gallagher",
 details: {
    language: "English",
    description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
 }
},

 {title: "Educated - A Memoir",
 pages: 352,
 author: "Tara Westover",
 details: {
    language: "English",
    description: "Educated is an account of the struggle for self-invention..."
 }
},
 {title: "The Art of Learning",
 pages: 288,
 author: "Josh Waitzkin",
 details: {
    language:" English",
    description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
 }
 }
];




// Iteration 2 | Book Details
function getBookDetails(object) {
  // Your code here:

return `${object.title} - ${object.author} - ${object.pages} pages`

}

console.log(getBookDetails(booksArray[2]))

// Iteration 3 | Delete Language
// Your code here:


booksArray.forEach(item =>{

delete item.details.language

})

console.log(booksArray)
// Iteration 4 | Estimated Reading Time
// Your code here:


booksArray.forEach(item => {
let time = (item.pages *500 )/ 90
avgReadingtime = Math.ceil(time)


item.readingTime = avgReadingtime 


})
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

function booksByAuthor(dictionary ) {
  // Your code here:
 /*  title - the title of the book (first element of the array)
pages - the number of pages of the book (second element of the array)
author - the author of the book (the dictionary key) */

  //let authors = Object.keys(dictionary)

  let bookList = [ ]

  for (authors in dictionary){

  console.log(authors)
  for ( books of dictionary[authors] ){
   
    let object = {
      title: books[0],
      pages: books[1],
      author: authors

    }

    bookList.push(object)

  }


  }
  
return bookList

}

console.log(booksByAuthor(dictionary))


// Bonus: Iteration 6 | Average Page Count
function averagePageCount(array) {
  // Your code here:

  let sum = 0
  for ( books of array){
   sum += books.pages
   

  }

  return sum / array.length 


}
