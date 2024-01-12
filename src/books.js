// Iteration 1 | Books Array

book1 = {
  title: "The Old Man and the Sea",
  pages: 128,
  author: "Ernest Hemingway",
  details: {
    language: "English",
    description:
      "One of Hemingway's most famous works, it tells the story of Santiago...",
  },
};

book2 = {
  title: "The Airbnb Story",
  pages: 256,
  author: "Leight Gallagher",
  details: {
    language: "English",
    description:
      "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
  },
};

book3 = {
  title: "Pride and Prejudice",
  pages: 279,
  author: "Jane Austen",
  details: {
    language: "English",
    description: "One of the most popular novels in the English language...",
  },
};

book4 = {
  title: "Educated - A Memoir",
  pages: 352,
  author: "Tara Westover",
  details: {
    language: "English",
    description: "Educated is an account of the struggle for self-invention...",
  },
};

book5 = {
  title: "The Art of Learning",
  pages: 288,
  author: "Josh Waitzkin",
  details: {
    language: "English",
    description:
      "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.",
  },
};

// Your code here:
const booksArray = [book1, book2, book3, book4, book5];
console.log(booksArray.length);

// Iteration 2 | Book Details

function getBookDetails(book) {
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}

console.log(getBookDetails(book3));

// Iteration 3 | Delete Language

for (let i = 0; i < booksArray.length; i++) {
  delete booksArray[i].details.language;
}
console.log(booksArray);

// Iteration 4 | Estimated Reading Time

const wordsPerPage = 500;
const wordsPerMinute = 90;

for (const book of booksArray) {
  const readingTime = Math.round((book.pages * wordsPerPage)/ wordsPerMinute);
  book.readingTime = readingTime;
}

console.log(booksArray);

// Bonus: Iteration 5 | Books Dictionary

/* The dictionary is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/


// console.log(createBooks(dictionary));


// Bonus: Iteration 6 | Average Page Count
function averagePageCount() {

}
