const booksArray = [ //Array of Objects 

  book1 = {
    title: "The Old Man and the Sea",
    pages: "128",
    author: " Ernest Hemingway",
    details: {
      language: " English",
      description: " One of Hemingway's most famous works, it tells the story of Santiago..."
    }
  },

  book2 = {
    title: "The Airbnb Story",
    pages: " 256",
    author: "Leight Gallagher",
    details: {
      language: "English",
      description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
    }
  },
  book3 = {
    title: "Pride and Prejudice",
    pages: "279",
    author: "Jane Austen",
    details: {
      language: "English",
      description: "One of the most popular novels in the English language...",
    }
  },

  book4 = {
    title: " Educated - A Memoir",
    pages: "352",
    author: "Tara Westover",
    details: {
      language: "English",
      description: " Educated is an account of the struggle for self - invention...",
    }
  },

  book5 = {
    title: "The Art of Learning",
    pages: "288",
    author: "Josh Waitzkin",
    details: {
      language: "English",
      description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
    }
  },
];

// console.log(booksArray[4]);
// console.log(booksArray[1].title);
// console.log(booksArray.length); //5 objects 

function getBookDetails(bookObject) {

  for (let i = 0; i < booksArray.length; i++) {

    let bookObject = ""; //empty string 

    bookObject = bookObject + (`${booksArray[i].title} - ${booksArray[i].author} - ${booksArray[i].pages} pages}`)

  }

  return bookObject;
}

// console.log(getBookDetails(book2));


//Iteration 3 | Delete language 
//Delete the nested object property "language" from each book object 


console.log(booksArray[2].details.language); //accessing language (The property I want to delete)

for (let i = 0; i < booksArray[i].details.language; i++) {
  delete booksArray[i].details.language;
}

//Iteration 4 | Estimated Reading TIme 
//Add a new property *readingTime* to each object in the booksArray

//Notes 
//keys are always strings
//bracket notation must pass as string

//add a value to a key just using dot notation 

booksArray.readingTime;
//Iterate over the array and add a new property: We need a loop 


console.log(booksArray[0]);

for (let i = 0; i < booksArray.length; i++) {
  console.log(i); // 0,1,2,3,4 
}
