// Iteration 1 | Books Array

// Your code here:
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

// Iteration 2 | Book Details
function getBookDetails(books) {
	const title = books[0].title;
	const author = books[0].author;
	const pages = books[0].pages;
	return `${title} - ${author} - ${pages} pages`;
}

// Iteration 3 | Delete Language
booksArray.forEach(function (book) {
	delete book.details.language;
});

// Iteration 4 | Estimated Reading Time
// Your code here:
booksArray.forEach(function (book) {
	const minutes = (book.pages * 500) / 90;
	book.readingTime = Math.ceil(minutes);
});

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
	const dictionaryArray = [];

	let i = 0;
	for (const property in dictionary) {
		const authorObject = dictionary[Object.keys(dictionary)[i]];

		for (let j = 0; j < authorObject.length; j++) {
			const book = {};
			book.author = property;
			book.title = authorObject[j][0];
			book.pages = authorObject[j][1];
			dictionaryArray.push(book);
		}
		i++;
	}
	return dictionaryArray;
}

// Bonus: Iteration 6 | Average Page Count

function averagePageCount(books) {
	let averagePages = 0;
	for (let i = 0; i < books.length; i++) {
		averagePages += books[i].pages;
	}

	return averagePages / books.length;
}
