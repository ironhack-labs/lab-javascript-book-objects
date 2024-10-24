// Iteration 1 | Books Array

// Your code here:
const booksArray = [
  {
    title: "The Old Man and the Sea",
    pages: 128,
    author: "Ernest Hemingway",
    details: {
      language: "English",
      description:
        "One of Hemingway's most famous works, it tells the story of Santiago...",
    },
  },
  {
    title: "The Airbnb Story",
    pages: 256,
    author: "Leight Gallagher",
    details: {
      language: "English",
      description:
        "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
    },
  },

  {
    title: "Educated - A Memoir",
    pages: 352,
    author: "Tara Westover",
    details: {
      language: "English",
      description:
        "Educated is an account of the struggle for self-invention...",
    },
  },
  {
    title: "The Art of Learning",
    pages: 288,
    author: "Josh Waitzkin",
    details: {
      language: "English",
      description:
        "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.",
    },
  },
];

// Iteration 2 | Book Details
function getBookDetails(book) {
  return book.title + " - " + book.author + " - " + book.pages + " pages";
}

// Iteration 3 | Delete Language

//for (i = 0; i < booksArray[i].length; i++) {

//delete booksArray[i].details.language;
//}

//console.log(booksArray);

delete booksArray[0].details.language;
delete booksArray[1].details.language;
delete booksArray[2].details.language;
delete booksArray[3].details.language;

// Iteration 4 | Estimated Reading Time
// Your code here:

booksArray[0].readingTime = Math.trunc((booksArray[0].pages * 500) / 90);
booksArray[1].readingTime = Math.trunc((booksArray[1].pages * 500) / 90);
booksArray[2].readingTime = Math.trunc((booksArray[2].pages * 500) / 90);
booksArray[3].readingTime = Math.trunc((booksArray[3].pages * 500) / 90);

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

function booksByAuthor(dictionary) {
  let booksArray = [];

  for (let author in dictionary) {
    for (let i = 0; i < dictionary[author].length; i++) {
      let book = dictionary[author][i];

      booksArray.push({
        title: book[0],
        pages: book[1],
        author: author,
      });
    }
  }
  return booksArray;
}

console.log(booksByAuthor(dictionaryExample));

// Bonus: Iteration 6 | Average Page Count

function averagePageCount(dictionary) {
  let totalBooks = 0;
  let totalPages = 0;

  for (let author in dictionary) {
    const books = dictionary[author];

    for (let book of books) {
      totalPages += book[1];
      totalBooks += 1;
    }
  }
  const averagePage = totalPages / totalBooks;
  return averagePage;
}

console.log(averagePageCount(dictionaryExample));
