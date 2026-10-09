const booksArray = [
  //Book 1
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

  //Book 2
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

  //Book 3
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

  //Book 4
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


console.log(booksArray);

  //Iteration 2 | Book Details
function getBookDetails(booksArrayDetail) {
  
 

return `${booksArrayDetail.title} - ${booksArrayDetail.author} - ${booksArrayDetail
    .pages} pages`;
 }
 
 console.log(getBookDetails(booksArray[3])); 

  //Iteration 3 | Delete Language
 //Your code here: 
function deleteLanguage(booksArray){
for(let i=0;i<booksArray.length;i++)
{

    if(booksArray[i].details.language){
        delete booksArray[i].details.language;
    }
}

}

console.log(deleteLanguage(booksArray))

console.log(booksArray); 

/*  Iteration 4 | Estimated Reading Time
 Your code here: */

function deleteLanguage(booksArray) {
  for (let i = 0; i < booksArray.length; i++) {

    if (booksArray[i].details.language) {
      let readingTime=(booksArray[i]. pages * 500) / 90;
       return Math.ceil(readingTime);
    }
  }
}
   console.log(deleteLanguage(booksArray))


/* 

 Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
/* */
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

    let result=[];
let ObjectArray= Object.keys(dictionary);
//console.log(ObjectArray);  

for(let i=0;i<ObjectArray.length;i++)
    
{
   let bookObject = dictionary[ObjectArray[i]];

   for(let j=0;j<bookObject.length;j++){

    //console.log(bookObject);

    let book={
        title:bookObject[j][0],
        pages:bookObject[j][1],
            author:ObjectArray[i],
    }
   // console.log(book)
result.push(book);
   }
   
}

return result 
}
console.log(booksByAuthor(dictionary))
//console.log(booksByAuthor(dictionary));



 //Bonus: Iteration 6 | Average Page Count
function averagePageCount(book) {
 console.log(book);
  
}
  
 