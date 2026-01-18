


const booksArray = [
    
    {
        title: "The Old Man and the Sea",
        pages: 128,
        author: "Ernest Hemingway",
        details: {
            language: "English",
            description: "One of Hemingway's most famous works, it tells the story of Santiago..."
        },
    },

    {
        title: "The Airbnb Story",
        pages: 256,
        author: "Leight Gallagher",
        details: {
            language: "English",
            description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
        },
    },

    {
        title: "Educated - A Memoir",
        pages: 352,
        author: "Tara Westover",
        details: {
            language: "English",
            description: "Educated is an account of the struggle for self-invention..."   
        },    
    },    

    {
        title: "The Art of Learning",
        pages: 288,
        author: "Josh Waitzkin",
        details: {
            language: "English",
            description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
        },
    },
    
];






// Iteration 2 | Book Details


function getBookDetails(book){
   let title = book.title;
   let author = book.author;
   let pages = book.pages;
   let description = `${title} - ${author} - ${pages} pages`;
   return description;
}

/*

Iteration 3 | Delete Language
Iterate over the booksArray, and delete the nested object property language from each book object.
Once done, console.log the booksArray array to confirm that the property has been deleted from all the book objects.

Note: You shouldn't change the booksArray manually, but instead, you should iterate over the array and delete the property from each book object.

Sample:

 {
        title: "The Art of Learning",
        pages: 288,
        author: "Josh Waitzkin",
        details: {
            language: "English",
            description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
        },
    },

*/

for (let i = 0; i < booksArray.length; i++) {
    delete booksArray[i].details.language;
}

