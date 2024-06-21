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
// title: Educated - A Memoir
// pages: 352
// author: Tara Westover
// details: {
//    language: English
//    description: Educated is an account of the struggle for self-invention...
// }

// Book 4
// title: The Art of Learning
// pages: 288
// author: Josh Waitzkin
// details: {
//    language: English
//    description: The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.
// }

const book1 = {
  title: "A vida feliz",
  pages: 160,
  author: "Seneca",
  details: {
    language: "portuguese",
    description:
      "Não há nada neste mundo, talvez, que seja mais falado e menos compreendido do que o assunto de uma vida feliz. É o desejo e o desígnio de todo homem e, no entanto, nem um entre mil sabe em que consiste essa felicidade. Vivemos, entretanto, em uma busca cega e ávida por ela e quanto mais pressa colocamos na direção errada, mais longe estamos ao final de nossa jornada. Vamos, portanto, primeiro considerar o que é e aonde devemos chegar e, em segundo lugar, qual é a maneira mais rápida de alcançá-la. Se estivermos certos, descobriremos a cada dia o quanto melhoramos mas, se seguirmos o chamado ou a trilha das pessoas que estão fora do caminho, podemos contar em seguirmos perdidos e continuar nossos dias vagando no erro.",
  },
};

const book2 = {
  title: "Liquid Love",
  pages: 162,
  author: "Zygmunt Bauman",
  details: {
    language: "english",
    description:
      "Liquid Love by Zygmunt Bauman explores the frailty of human bonds in the modern world. It delves into the complexities and ambivalence of relationships, the concept of love, and the challenges faced in a consumer culture that favors instant gratification.",
  },
};

const book3 = {
  title: "1984",
  pages: 368,
  author: "George Orwell",
  details: {
    language: "english",
    description:
      "A masterpiece of rebellion and imprisonment where war is peace freedom is slavery and Big Brother is watching Thought Police Big Brother Orwellian These words have entered our vocabulary because of George Orwell s classic dystopian novel 1984 The story of one man s nightmare odyssey as he pursues a forbidden love affair through a world ruled by warring states and a power structure that controls not only information but also individual thought and memory 1984 is a prophetic haunting tale More relevant than ever before 1984 exposes the worst crimes imaginable the destruction of truth freedom and individuality With a foreword by Thomas Pynchon With a foreword by Thomas Pynchon A masterpiece of rebellion and imprisonment where war is peace freedom is slavery and Big Brother is watching View our feature on George Orwell s 1984 Thought Police Big Brother Orwellian These words have entered our vocabulary because of George Orwell s classic dystopian novel 1984 The story of one man s nightmare odyssey as he pursues a forbidden love affair through a world ruled by warring states and a power structure that controls not only information but also individual thought and memory 1984 is a prophetic haunting tale More relevant than ever before 1984 exposes the worst crimes imaginable the destruction of truth freedom and individuality This beautiful paperback edition features deckled edges and french flaps a perfect gift for any occasion",
  },
};

const book4 = {
  title: "The Catcher in the Rye",
  pages: 277,
  author: "J.D. Salinger",
  details: {
    language: "english",
    description:
      "Fleeing the crooks at Pencey Prep, he pinballs around New York City seeking solace in fleeting encounters—shooting the bull with strangers in dive hotels, wandering alone round Central Park, getting beaten up by pimps and cut down by erstwhile girlfriends. The city is beautiful and terrible, in all its neon loneliness and seedy glamour, its mingled sense of possibility and emptiness. Holden passes through it like a ghost, thinking always of his kid sister Phoebe, the only person who really understands him, and his determination to escape the phonies and find a life of true meaning.",
  },
};

// Your code here:
const booksArray = [book1, book2, book3, book4];

// Iteration 2 | Book Details
function getBookDetails() {
  // Your code her˜e:
}

// Iteration 3 | Delete Language
// Your code here:

// Iteration 4 | Estimated Reading Time
// Your code here:

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

function booksByAuthor() {
  // Your code here:
}

// Bonus: Iteration 6 | Average Page Count
function averagePageCount() {
  // Your code here:
}
