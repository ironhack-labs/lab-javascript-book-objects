
/*

Bonus: Iteration 6 | Average Page Count
Create a function named averagePageCount() that takes one argument - the books array. The function should return a number representing the average page count of all the books in the array.

The formula to calculate the average page count is:

average page count = sum of all books' pages / number of books

*/

const books = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    pages: 223,
    author: 'J. K. Rowling'
  },
  {
    title: 'Harry Potter and the Chamber of Secrets',
    pages: 251,
    author: 'J. K. Rowling'
  },
  {
    title: 'Harry Potter and the Prisoner of Azkaban',
    pages: 317,
    author: 'J. K. Rowling'
  },
  {
    title: 'Harry Potter and the Goblet of Fire',
    pages: 636,
    author: 'J. K. Rowling'
  },
  { title: 'Cryptonomicon', pages: 928, author: 'Neal Stephenson' },
  { title: 'Anathem', pages: 1008, author: 'Neal Stephenson' },
  {
    title: 'Fall; or, Dodge in Hell',
    pages: 896,
    author: 'Neal Stephenson'
  },
  { title: 'Outliers', pages: 320, author: 'Malcolm Gladwell' },
  { title: 'Blink', pages: 287, author: 'Malcolm Gladwell' }
]



function averagePageCount(books) {
  if (books.length === 0) return null; // handle empty array

  let pageSum = 0;

  for (let i = 0; i < books.length; i++) {
    pageSum += books[i].pages;
  }

  return Math.trunc(pageSum / books.length);
}

console.log(averagePageCount(books));



/*

function booksByAuthor(dictionary) {
  let result = []; // 

  for (let author in dictionary) { // loop authors with this clean method
    const authorsBooks = dictionary[author]; //This is how out situation with spaces is addressed NOT dictionary['author'] NOR dictionary.['author']

    for (let i = 0; i < authorsBooks.length; i++) { // loop each authors books
      const book = authorsBooks[i];

      const newBook = {   // create new object from each book
        title: book[0],
        pages: book[1],
        author: author
      };

      result.push(newBook); // push every book into result
    }
  }

  return result; // return final array
}


console.log(booksByAuthor(dictionary))


// [
//   {
//     title: "Harry Potter and the Philosopher's Stone",
//     pages: 223,
//     author: "J. K. Rowling",
//   },
//   {
//     title: "Harry Potter and the Chamber of Secrets",
//     pages: 251,
//     author: "J. K. Rowling",
//   },
//   {
//     title: "Harry Potter and the Prisoner of Azkaban",
//     pages: 317,
//     author: "J. K. Rowling",
//   },

//   // ...etc.


// */