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
const booksArray = [ book1={
   title: 'The Old Man and the Sea',
   pages: 128,
   author: 'Ernest Hemingway',
   details: {
   language: 'English',
   description: ' One of Hemingways most famous works, it tells the story of Santiago...', 
   }
  },

  book2={ 
    title: 'The Airbnb Story',
     pages: 256,
    author: 'Leight Gallagher',
     details: {
        language: 'English',
     description: 'This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...'
     }
    },
  book3= {
  title: 'Educated - A Memoir',
  pages: 352,
 author: 'Tara Westover',
 details: {
  language: 'English',
 description: 'Educated is an account of the struggle for self-invention...',
    }
   },

  book4={

  title: 'The Art of Learning',
  pages: 288,
  author: 'Josh Waitzkin',
  details: {
     language:'English',
     description: 'The Art of Learning takes readers through Waitzkins unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.',
    }
  },
  ];




// Iteration 2 | Book Details
function getBookDetails(object) {
  
  return `${object.title} - ${object.author} - ${object.pages} pages`;

}

console.log(getBookDetails(book2));

// Iteration 3 | Delete Language
// Iteration 3 | Delete Language
booksArray.forEach(book => delete book.details.language);
for(let i=0; i<booksArray.length; i++)
console.log(booksArray[i].details);



// Iteration 4 | Estimated Reading Time
// Your code here:
for(let i=0; i<booksArray.length; i++){
  let result=Math.round((booksArray[i].pages * 500)/90);
  booksArray[i].readingTime=result;
   console.log(booksArray[i].readingTime); 
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

function booksByAuthor(dictionary){
  
  let booksArray = [];
  
  for (let author in dictionary) {
   dictionary[author].forEach(book => {
      booksArray.push({
        title: book[0], 
        pages: book[1], 
        author: author   
      });
    });
  }
  
  return booksArray; 
}

const result = booksByAuthor(dictionaryExample);
console.log(result);


// Bonus: Iteration 6 | Average Page Count
function averagePageCount(bookArr) {
  // Your code here:
  let res=0;
booksArray.forEach(function(index){
  res += index.pages; 
});
   let averagePageCount1 = res / booksArray.length;
   return averagePageCount1;
  
}
console.log(averagePageCount(booksArray));
