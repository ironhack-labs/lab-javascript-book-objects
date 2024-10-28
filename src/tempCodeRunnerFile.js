function getBookDetails(book) {
  // Your code here:
  Object.keys(book);
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}

console.log(getBookDetails(book1));