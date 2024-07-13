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

/*
In the `index.js` file, **create an array named `booksArray`** containing **4 objects representing the books** described in the code snippet below. Each object should have the following properties:

- `title`
- `pages`
- `author`
- `description`
*/


const booksArray = [
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
      description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
    }
  },
  {
    title: "Educated - A Memoir",
    pages: 352,
    author: "Tara Westover",
    details: {
      language: "English",
      description: "Educated is an account of the struggle for self-invention...",
    }
  },
  {
    title: "The Art of Learning",
    pages: 288,
    author: "Josh Waitzkin",
    details: {
      language: "English",
      description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.",
    },
  }
] 



// Iteration 2 | Book Details

//**Create a function** named **`getBookDetails()`** that takes one argument - the *book* object. The function should **return a string** in the following format:
/*
```js
"TITLE - AUTHOR - PAGES pages"
```
*/


function getBookDetails(book) {
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}



// Iteration 3 | Delete Language
// Your code here:

/*
Iterate over the `booksArray`, and **delete the nested object property `language`** from each book object.<br>Once done, 
`console.log` the `booksArray` array to confirm that the property has been deleted from all the book objects.
<br>
**Note:** You shouldn't change the `booksArray` manually, but instead, you should iterate over the array and delete the property from each book object.
*/


for (let i = 0; i < booksArray.length; i++) {
  delete booksArray[i].details.language;
}

console.log(booksArray);



// Iteration 4 | Estimated Reading Time

/*
Iterate over the`booksArray`, and ** add a new property`readingTime` to each book object **.
The value of the `readingTime` should be the number of minutes it will take to read the book.
The number of minutes should be an integer(i.e., no decimals).< br >
Assuming a page consists of _500 words_ and that the average reader reads _90 words per minute_, 
the estimated reading time for a book can be calculated using the following formula:
> reading time in minutes = (`number of pages` \* `500`) / `90`

Once done, `console.log` the `booksArray` to confirm that the property has been added to each book object.
*/

// Your code here:

const averagewordsInPage = 500;
const averageWordsReadedInMinute = 90

for (let i = 0; i < booksArray.length; i++) {
  const readingTime = Math.ceil((booksArray[i].pages * averagewordsInPage) / averageWordsReadedInMinute);
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

function booksByAuthor() {
  // Your code here:
  
}



// Bonus: Iteration 6 | Average Page Count
function averagePageCount() {
  // Your code here:
  
}
