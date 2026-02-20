// Iteration 1 | Books Array

const booksArray = [
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

//-----------------------------------------------------------------------------------------------------------------------------------------

// Iteration 2 | Book Details
function getBookDetails(bookDetails) {
	let title = bookDetails.title;
	let author = bookDetails.author;
	let pages = bookDetails.pages;

	return `${title} - ${author} - ${pages} pages`;
}

//-----------------------------------------------------------------------------------------------------------------------------------------

// Iteration 3 | Delete Language
// Your code here:

booksArray.forEach((e) => {
	delete e.details.language;
});

//-----------------------------------------------------------------------------------------------------------------------------------------

// Iteration 4 | Estimated Reading Time
// Your code here:

booksArray.forEach((e, i) => {
	let numberOfPages = (booksArray[i].pages * 500) / 90;
	e.readingTime = Math.ceil(numberOfPages);
});

//console.log(booksArray);
//-----------------------------------------------------------------------------------------------------------------------------------------

// Bonus: Iteration 5 | Books Dictionary
function booksByAuthor(dictionary) {
	const result = [];

	for (const author in dictionary) {
		const books = dictionary[author];

		if (Array.isArray(books)) {
			books.forEach((book) => {
				result.push({
					title: book[0],
					pages: book[1],
					author: author,
				});
			});
		}
	}

	return result;
}

// Bonus: Iteration 6 | Average Page Count
function averagePageCount(booksArray) {
	let numberOfbooks = booksArray.length;
	let sumOfAllBooksPage = 0;
	let result = 0;
	for (let i = 0; i < booksArray.length; i++) {
		let test = booksArray[i].pages;
		if (test) {
			sumOfAllBooksPage += test;
		}
		result = sumOfAllBooksPage / numberOfbooks;
	}
	return result;
}
