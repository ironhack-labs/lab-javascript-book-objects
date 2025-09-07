const booksArray = [
  {
      title: 'The Old Man and the Sea',
      pages: 128,
      author: 'Ernest Hemingway',
      details: {
          language: 'English',
          description: "One of Hemingway's most famous works, it tells the story of Santiago...",
      }
  },

  {
      title: 'The Airbnb Story',
      pages: 256,
      author: 'ricard gil',
      details: {
          language: 'spanish',
          description: "History of a litle boy in Sevilla",
      }
  },

  {
      title: 'The last warrior',
      pages: 301,
      author: 'albert martin',
      details: {
          language: 'Deutsh',
          description: 'The last warrior in the history of samurais',
      }
  },

  {
      title: 'The player',
      pages: 543,
      author: 'manel ruiz',
      details: {
          language: 'italian',
          description: 'Documentary about the most valuable player of the 1990s in basketball.',
      }

  },
];

console.log(booksArray);

function getBookDetails(book) {
return `Title: ${book.title}
Pages: ${book.pages}
Author: ${book.author}
Language: ${book.details.language}
Description: ${book.details.description}`;
};

console.log(getBookDetails(booksArray[0]));


for (let book of booksArray) {
  delete book.details.language;
}

console.log(booksArray);