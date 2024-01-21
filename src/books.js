
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
      description: "This is the remarkable behind- the - scenes story of the creation and growth of Airbnb..."
    }

  },

  {
    title: "Pride and Prejudice",
    pages: 279,
    author: "Jane Austen",
    details: {
      language: "English",
      description: "One of the most popular novels in the English language...",
    }

  },

  {
    title: "Educated - A Memoir",
    pages: 352,
    author: "Tara Westover",
    details: {
      language: "English",
      description: "Educated is an account of the struggle for self - invention..."
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
]


//our code here:



// Iteration 2 | Book Details

function getBookDetails(booksArray) {

  const title = booksArray[0].title
  const author = booksArray[0].author
  const pages = booksArray[0].pages

  return `${title} - ${author} - ${pages} pages`

}

//   function getBookDetails(booksArray) {

//     if (booksArray.length > 0) {
//       const { title, author, pages } = booksArray[0];
//       return `${title} - ${author} - ${pages} pages`;
//     } else {
//       return 'No books available';
//     }
//   }
// }

// const { title, author, pages } = booksArray[0]

// return `${title} ${author} ${pages} pages`



//  return `${booksArray[0].title} ${booksArray[0].author} ${booksArray[0].pages} pages`


// if (booksArray.length > 0) {
//   return `${booksArray[0].title} ${booksArray[0].author} ${booksArray[0].pages} pages`;
// } else {
//   return 'No books available';



// Iteration 3 | Delete Language
// Your code here:


booksArray.forEach(book => { delete book.details.language })


// const arrayWithoutLanguage = booksArray.forEach(function (eachlenguage) {
//   delete (booksArray[eachlenguage].details.language)
// })

// console.log(arrayWithoutLanguage)

// Iteration 4 | Estimated Reading Time
// Your code here:

// const averageTimePerPage = book.pages * 500 / 90


booksArray.forEach(books => {
  books.readingTime = 50
})
console.log(booksArray)
// const newArrayWithNewProperty = booksArray.map(book => {
//   return { readingTime: 50, ...book }

// })







// const readingTime = (`number of pages` * `500`) / `90`

// booksArray.forEach((newProp) => { newProp.push(readingTime) })


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
  const organizedBooks = [];

  for (const author in dictionary) {
    dictionary[author].forEach(bookInfo => {
      const [title, pages] = bookInfo;
      organizedBooks.push({ author, title, pages });
    });
  }
  return organizedBooks;
}






// const newDictionaryKeys = Object.keys(dictionary)

// // const dictionaryAuthor = dictionary[0]

// return [`${newDictionaryKeys} `]


// Bonus: Iteration 6 | Average Page Count
function averagePageCount(dictionary) {


  let sumOfPages = 0;
  let totalBooks = 0;

  for (const author in dictionary) {
    dictionary[author].forEach(book => {
      const pages = book[1];
      sumOfPages += pages
      totalBooks++;
    });
  }

  if (totalBooks > 0) {
    const averagePageCount = parseFloat(sumOfPages / totalBooks);
    return averagePageCount;
  }
}

// let sumOfPages = 0
// let totalBooks = 0

// for (const pages in dictionary) {
//   dictionary[pages].forEach(pagesSum => {
//     const pages = pagesSum[1]
//     sumOfPages += pages
//     totalBooks++
//   })


//   const averagePageCount = parseFloat(sumOfPages / totalBooks)
//   return averagePageCount




// }



// > average page count = `sum of all books' pages` / `number of books`
// Your code here:



