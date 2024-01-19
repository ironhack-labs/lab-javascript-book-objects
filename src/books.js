// Iteration 1 | Books Array







// {
//   title: "The Hunger Games",
//     pages: 374,
//       author: "Suzanne Collins",
//         description: "Set in a dark vision of the near future...",
//   },
// {
//   title: "Jonathan Livingston Seagull",
//     pages: 112,
//       author: "Richard Bach",
//         description: "The book tells the story of Jonathan Livingston...",
//   },



// ];

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
const booksArray = [
  {
    title: 'The Old Man and the Sea',
    pages: 128,
    author: 'Ernest Hemingway',
    details: {
      language: 'English',
      description: 'One of Hemingways most famous works, it tells the story of Santiago...',
    }
  },
  {
    title: 'The Airbnb Story',
    pages: 256,
    author: 'Gallagher',
    details: {
      language: 'English',
      description: 'This is the remarkable behind- the - scenes story of the creation and growth of Airbnb...',
    }
  },

  {
    title: 'Pride and Prejudice',
    pages: 279,
    author: 'Jane Austen',
    details: {
      language: 'English',
      description: 'One of the most popular novels in the English language...',
    }
  },
  {
    title: 'Educated - A Memoir',
    pages: 352,
    author: 'Tara Westover',
    details: {
      language: 'English',
      description: 'Educated is an account of the struggle for self - invention...',
    }
  },
  {
    title: 'The Art of Learning',
    pages: 288,
    author: 'Josh Waitzkin',
    details: {
      language: 'English',
      description: 'The Art of Learning takes readers through Waitzkins unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.',
    }
  }
];
console.log(booksArray)



// Iteration 2 | Book Details
function getBookDetails(book) {
  // Your code here:
return `"${book.title} - ${book.author} - ${book.pages} pages"`
}
console.log(getBookDetails(booksArray[0]))


// Iteration 3 | Delete Language
// Your code here:
const newArray = booksArray.map(item=>{
  delete item.details.language
  return item
})
console.log(newArray)


// Iteration 4 | Estimated Reading Time
// Your code here:
const  newArray1 = booksArray.map(item=>{
   item['readingTime'] = (item.pages * 500) / 90
  return item
})

console.log(newArray1)

// Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/
const dictionaryExample = {
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


function booksByAuthor(dictionaryExample) {
  // Your code here:
const array = []
for (let key in dictionaryExample){
  const newobj = {
    author:dictionaryExample[key][0][0],
    title:key,
    pages:dictionaryExample[key][0][1],
  } 
  array.push(newobj)
}
return array

}

console.log(booksByAuthor(dictionaryExample))

// Bonus: Iteration 6 | Average Page Count
function averagePageCount(book) {
  // Your code here:
  return book.reduce((acc,car)=>{

acc += car.pages
return acc
  },0)/book.length

}
console.log(averagePageCount(booksArray))