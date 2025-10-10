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
    title: 'The Old Man and the Sea',
    pages: 129,
    author: "Ernest Hemingway",
    details: {
      language: "English",
      description: "One of Hemingway's most famous works, it tells the story of Santiago..."
    }
  },
  {
    title: 'The Airbnb Story',
    pages: 256,
    author: "Leight Gallagher",
    details: {
      language: "English",
      description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
    }
  },
  {
    title: 'Educated - A Memoir',
    pages: 352,
    author: "Tara Westover",
    details: {
      language: "English",
      description: "Educated is an account of the struggle for self-invention..."
    }
  },
  {
    title: 'The Art of Learning',
    pages: 288,
    author: "Josh Waitzkin",
    details: {
      language: "English",
      description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
    }
  }
]



// Iteration 2 | Book Details
function getBookDetails(bookObject) {
  return `${bookObject.title} - ${bookObject.author} - ${bookObject.pages} pages `

}



// Iteration 3 | Delete Language
// Your code here:


for (let i = 0; i < booksArray.length; i++){
  delete booksArray[i].details.language
}

// Iteration 4 | Estimated Reading Time
// Your code here:

for (let i = 0; i < booksArray.length; i++) {
  booksArray[i].readingTime = Math.ceil((booksArray[i].pages * 500) / 90)
}

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
  // console.log(dictionary["J. K. Rowling"][0][0]) // Harry Potter and the Philosopher's Stone
  // console.log(Object.keys(dictionary["J. K. Rowling"]).length) //4
  // console.log(dictionary["J. K. Rowling"]) //
  

  function booksByAuthor(dictionary) {
    const booksByAuthorArray = []
    
    for (let key in dictionary){
      for (let i = 0; i < dictionary[key].length;i++) {
        const newObj = {
          title: dictionary[key][i][0],
          pages: dictionary[key][i][1],
          author: key
        }
        booksByAuthorArray.push(
          newObj
        )

      }
    }
    return booksByAuthorArray
  }
  
  console.log(booksByAuthor(dictionary))

  // I need to go for each key in the object. 
  // I will start to create a new object with the format (name of the author):[{title:'test', pages: 100, author: 'key'}]
  // I will get the key of the object to be key of my new 
  
  const y = {
    "igor montovani": [
      {
        name: 'igor',
        surname: 'montovani'
      }],
      "danielle caldas": [
        {
          name: 'Dani',
          surname: 'caldas'
        }
      ]
      
    }
    
    





// Bonus: Iteration 6 | Average Page Count
function averagePageCount() {
  // Your code here:
  
}
