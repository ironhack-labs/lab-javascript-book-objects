// Iteration 1 | Books Array

const Book1 = {
  title: "The Old Man and the Sea",
  pages: 128,
  author: "Ernest Hemingway",
  details: {
    language: "English",
    description:
      "One of Hemingway's most famous works, it tells the story of Santiago...",
  },
};

const Book2 = {
  title: "The Airbnb Story",
  pages: 256,
  author: "Leight Gallagher",
  details: {
    language: "English",
    description:
      "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
  },
};

const Book3 = {
  title: "Educated - A Memoir",
  pages: 352,
  author: "Tara Westover",
  details: {
    language: "English",
    description: "Educated is an account of the struggle for self-invention...",
  },
};

const Book4 = {
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

const booksArray = [Book1, Book2, Book3, Book4];

// Iteration 2 | Book Details
function getBookDetails(book) {
  // Your code here:
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}

// Iteration 3 | Delete Language
// Your code here:

delete Book1.details.language;
delete Book2.details.language;
delete Book3.details.language;
delete Book4.details.language;

// Iteration 4 | Estimated Reading Time
// Your code here:
for (let i = 0; i < booksArray.length; i++) {
  booksArray[i].readingTime = Math.ceil((booksArray[i].pages * 500) / 90);
}

console.log(booksArray);

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
  // Your code here:
  const keys = Object.keys(dictionary);

  const resultArray = [];

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const arrays = dictionary[key];

    for (let j = 0; j < arrays.length; j++) {
      const nestedArray = arrays[j];

      const newObj = {
        title: nestedArray[0],
        pages: nestedArray[1],
        author: key,
      };
      resultArray.push(newObj);
    }
  }
  return resultArray;
}

// Bonus: Iteration 6 | Average Page Count
function averagePageCount(arr) {
  // Your code here:
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    sum += obj.pages;
    count++;
  }

  const average = sum / count;

  return average;
}
