

/*


Bonus: Iteration 5 | Books Dictionary

Create a function called booksByAuthor() that:

    Takes one argument: a dictionary object (like dictionaryExample)
    Returns one array containing all books as objects
    Each book object must have:

        title → book title
        pages → number of pages
        author → author’s name (the object key)

*/

// The constant dictionary is an object. Note the {}

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

//console.log(dictionary.O);

//console.log(Object.keys(dictionary));
// [ 'J. K. Rowling', 'Neal Stephenson', 'Malcolm Gladwell' ]

//console.log(dictionary['Neal Stephenson'].flat())

// [
//   'Cryptonomicon',
//   928,
//   'Anathem',
//   1008,
//   'Fall; or, Dodge in Hell',
//   896
// ]



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