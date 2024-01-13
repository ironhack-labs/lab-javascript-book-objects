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
// title: Pride and Prejudice
// pages: 279
// author: Jane Austen
// details: {
//    language: English
//    description: One of the most popular novels in the English language...
// }

// Book 4
// title: Educated - A Memoir
// pages: 352
// author: Tara Westover
// details: {
//    language: English
//    description: Educated is an account of the struggle for self-invention...
// }

// Book 5
// title: The Art of Learning
// pages: 288
// author: Josh Waitzkin
// details: {
//    language: English
//    description: The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.
// }

// Your code here:
const booksArray = [];
const book1 = {
	title: "The Old Man and the Sea",
	pages: 128,
	author: "Ernest Hemingway",
	details: {
		language: "English",
		description:
			"One of Hemingway's most famous works, it tells the story of Santiago...",
	},
};
const book2 = {
	title: "The Airbnb Story",
	pages: 256,
	author: "Leight Gallagher",
	details: {
		language: "English",
		description:
			"One of the most popular novels in the English language...",
	},
};
const book3 = {
	title: "Pride and Prejudice",
	pages: 279,
	author: "Jane Austen",
	details: {
		language: "English",
		description:
			" One of the most popular novels in the English language...",
	},
};
const book4 = {
	title: " Educated - A Memoir",
	pages: 352,
	author: "Tara Westover",
	details: {
		language: "English",
		description:
			"Educated is an account of the struggle for self-invention...",
	},
};
const book5 = {
	title: "The Art of Learning",
	pages: 288,
	author: " Josh Waitzkin",
	details: {
		language: "English",
		description:
			"The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.",
	},
};
booksArray.push(book1, book2, book3, book4, book5);
// Iteration 2 | Book Details
function getBookDetails(book) {
	// Your code here:
	const title = book.title;
	const author = book.author;
	const pages = book.pages;
	return `${title} - ${author} - ${pages} pages`;
}

// Iteration 3 | Delete Language
// Your code here:
for (const iterator of booksArray) {
	delete iterator.details.language;
}

// Iteration 4 | Estimated Reading Time
// Your code here:
for (const iterator of booksArray) {
	let newReadingTime = Math.ceil((iterator.pages * 500) / 90);
	iterator.readingTime = newReadingTime;
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

function booksByAuthor(dictionary) {
	// Your code here:
	const newBooksByAuthor = [];
	 // loop through each author in the dictionary
	for (const author in dictionary) {
		const books = dictionary[author];
		// loop through each book  in author array 
		for (const bookInfo of books) {
			//destruction of the looped array
			const [title, pages] = bookInfo;
			// create an object for book array and author 
			const bookObject = {
				title: title,
				pages: pages,
				author: author,
			};
			newBooksByAuthor.push(bookObject);
		}
	}
	return newBooksByAuthor;
}

// Bonus: Iteration 6 | Average Page Count
function averagePageCount(booksArray) {
	// Your code here:
	let totalPageCount = 0;
	for (const iterator of booksArray) {
		totalPageCount += iterator.pages;
	}
	return totalPageCount / booksArray.length;
}

// function getGrade(s1, s2, s3) {
// 	// Code here
// 	let score = Math.round((s1 + s2 + s3) / 3);
// 	console.log(score);
// 	let grade = "";

// 	switch (score) {
// 		case 90 <= score && score < 10:
// 			grade = "A";
// 			console.log(grade);
// 		case 80 <= score && score < 90:
// 			grade = "B";
// 		case 70 <= score && score < 80:
// 			grade = "C";
// 		case 60 <= score && score < 70:
// 			grade = "D";
// 		case 0 <= score < 60:
// 			grade = "F";
// 		default:
// 			break;
// 	}
// 	//   return grade
// }
// if (condition) {
// } else if (condition) {
// } else if (condition) {
// } else if (condition) {
// }
// function getGrade(s1, s2, s3) {
// 	// Code here
// 	let score = Math.round((s1 + s2 + s3) / 3);
// 	console.log(score);
// 	let grade = "";

// 	if (90 <= score && score < 10) {
// 		return (grade = "A");
// 	} else if (80 <= score && score < 90) {
// 		return (grade = "B");
// 	} else if (70 <= score && score < 80) {
// 		return (grade = "C");
// 	} else if (60 <= score && score < 70) {
// 		return (grade = "D");
// 	} else {
// 		return (grade = "F");
// 	}
// }
