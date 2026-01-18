

/* 

Iteration 4 | Estimated Reading Time

Iterate over the booksArray, and add a new property readingTime to each book object.
The value of the readingTime should be the number of minutes it will take to read the book. The number of minutes should be an integer (i.e., no decimals).

Assuming a page consists of 500 words and that the average reader reads 90 words per minute, the estimated reading time for a book can be calculated using the following formula:

reading time in minutes = (number of pages * 500) / 90

The reading time must be rounded UP to the next whole number, even if the result is a small decimal. For example:

If the result is 711.1, round it up to 712.
If the result is 30.03, round it up to 31.
Once done, console.log the booksArray to confirm that the property has been added to each book object.

Array 'booksArray'
should have 4 books
should be an array
- Book Objects
should have a property 'readingTime'
should have a number in property 'readingTime'
should have the property 'readingTime' with the number of minutes it takes to read the book (rounded up to the next whole number)

*/

for (let i = 0; i < booksArray.length; i++) {
    booksArray[i].readingTime = Math.ceil((booksArray[i].pages * 500) / 90);
}

console.log(booksArray);