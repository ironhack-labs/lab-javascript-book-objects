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
         description: "One of Hemingway's most famous works, it tells the story of Santiago..."
          }
  },
  {
    title: "The Airbnb Story",
    pages: 256,
    author: "Leight Gallagher",
    details: {
      language: "English",
      description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...."
    }
  },
  {
    title: "Educated - A Memoir",
    pages: 352,
    author: "Tara Westover",
    details: {
      language: "English",
      description : "Educated is an account of the struggle for self-invention..."
    }
  },
  {
    title: "The Art of Learning",
    pages: 288,
    author: "Tara Westover",
    details: {
      language: "English",
      description: "Educated is an account of the struggle for self-invention..."
    }
  }
];


let book = {
  title: "The Art of Learning",
  pages: 288,
  author: "Josh Waitzkin",
  details: { /*...*/ }
};

// Iteration 2 | Book Details
function getBookDetails(book) {
  
  const finalValues = book.title + " - " + book.author + " - " + book.pages + " pages";
  return finalValues;
}

let th = getBookDetails(book);
console.log(th);


// Iteration 3 | Delete Language
for(let i = 0; i < booksArray.length; i++){
  delete booksArray[i].details.language;
}

console.log(booksArray);




// Iteration 4 | Estimated Reading Time

for(let i = 0; i < booksArray.length; i++){
  let time = Math.ceil((booksArray[i].pages * 500) / 90);
  booksArray[i].readingTime = time;
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

function booksByAuthor(dictionary) {
let titleBooks = [];
let pagesBooks = [];
let authorBooks = [];


let title;
let pages;
let author;


for(let [key, value] of Object.entries(dictionary)){
    for(let x = 0; x < value.length; x++){
        title = value[x][0];
        titleBooks.push(title);
    }
}

for(let [key, value] of Object.entries(dictionary)){
    for(let x = 0; x < value.length; x++){
        pages = value[x][1];
        pagesBooks.push(pages);
    }
}

for(let [key, value] of Object.entries(dictionary)){
    author = key;
    authorBooks.push(author);
}

let finalArr = [];

for (let i = 0; i < titleBooks.length; i++) {
    finalArr[i] = { title: titleBooks[i] };
}


for(let i = 0; i < finalArr.length; i++){
    finalArr[i].page = pagesBooks[i];
}

for(let i = 0; i < finalArr.length; i++){
    if(finalArr[i].title === "Harry Potter and the Philosopher's Stone" || finalArr[i].title === 'Harry Potter and the Chamber of Secrets' || finalArr[i].title === "Harry Potter and the Prisoner of Azkaban" || finalArr[i].title === "Harry Potter and the Goblet of Fire"){
        finalArr[i].author = authorBooks[0];
    }
    if(finalArr[i].title === "Cryptonomicon" || finalArr[i].title === "Anathem" || finalArr[i].title === "Fall; or, Dodge in Hell"){
        finalArr[i].author = authorBooks[1];
    }
    if(finalArr[i].title === "Outliers" || finalArr[i].title === "Blink"){
        finalArr[i].author = authorBooks[2];
    }
}
return finalArr;
}




// Bonus: Iteration 6 | Average Page Count
function averagePageCount(sum) {
  let pages;
  let total = 0;
  for(let [key, value] of Object.entries(sum)){
    for(let x = 0; x < value.length; x++){
        pages = value[x][1];
        total += pages;
    }
}
  return total;
}

