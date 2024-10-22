// Iteration 1 | Books Array
// Your code here:
const booksArray = [
{
  id: 1,
  title: "The Old Man and the Sea",
  pages: 128,
  author: "Ernest Hemingway",
  details: {
     language: "English",
     description: "One of Hemingway's most famous works, it tells the story of Santiago...",
  }
},
{
  id: 2,
  title: "The Airbnb Story",
  pages: 256,
  author: "Leight Gallagher",
  details: {
     language: "English",
     description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
  }
},
{
  id: 3,
  title: "Educated - A Memoir",
  pages: 352,
  author: "Tara Westover",
  details: {
     language: "English",
     description: "Educated is an account of the struggle for self-invention...",
  }
},
{ 
  id: 4,
  title: "The Art of Learning",
  pages: 288,
  author: "Josh Waitzkin",
  details: {
     language: "English",
     description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.",
  }
}
];


console.log(booksArray[0]);

// Iteration 2 | Book Details
function getBookDetails(index) {
    // Your code here:
    //"TITLE - AUTHOR - PAGES pages"
    return `${booksArray[index].title} - ${booksArray[index].author} - ${booksArray[index].pages} pages`;
}

console.log(getBookDetails(1));

// Iteration 3 | Delete Language
// Your code here:
booksArray.forEach((element) => {
    delete element.details.language;
});

console.log(booksArray[0].details);

// Iteration 4 | Estimated Reading Time
// Your code here:
// (number of pages * 500) / 90
for (i in booksArray) {
    booksArray[i].readingTime = (booksArray[i].pages * 500) / 90;
}

console.log(booksArray[0].readingTime);

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

function booksByAuthor(object) {
    // Your code here:
    let newArray = [];
    let array = Object.entries(object);

    for (i in array) {
        for (n in array[i][1]) {
            let newBook = {
                title: array[i][1][n][0],
                pages: array[i][1][n][1],
                author: array[i][0],
            };
            newArray.push(newBook);
        }
    }
    return newArray;
}

let testArray = booksByAuthor(dictionary);
console.log(testArray[8]);

// Bonus: Iteration 6 | Average Page Count
function averagePageCount(array) {
    // Your code here:
    let sum = 0;
    for (i in array) {
        sum += array[i].pages;
    }
    return sum / array.length;
}

console.log(averagePageCount(booksArray))
