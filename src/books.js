// Iteration 1 | Books Array

const booksArray = [
  {
    title: "The Old Man and the Sea",
    pages: 128,
    author: "Ernest Hemingway",
    details: {
      language: "English",
      description: "One of Hemingways most famous works, it tells the story of Santiago..."
    }
  },

  {
    title: "The Airbnb Story",
    pages: 256,
    author: "Leight Gallagher",
    details: {
      language: "English",
      description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
    }
  },

  {
    title: "Educated - A Memoir",
    pages: 352,
    author: "Tara Westover",
    details: {
      language: "English",
      description: "Educated is an account of the struggle for self-invention..."
      }
  },

  {
    title: "The Art of Learning",
    pages: 288,
    author: "Josh Waitzkin",
    details: {
      language: "English",
      description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
      }
  }
];



// Iteration 2 | Book Details
function getBookDetails(booksArray) {
  return (`${booksArray.title} - ${booksArray.author} - ${booksArray.pages} pages`);
  }

  console.log(getBookDetails(booksArray[0]));



// Iteration 3 | Delete Language
function deleteLanguage(booksArray) {
  booksArray.forEach(book => {
    delete book.details.language;
  });

  console.log(booksArray);
} // Pendiente consultar el fallo en Jasmine



// Iteration 4 | Estimated Reading Time
function estimatedReadingTime(booksArray) {
  booksArray.forEach((book) => {
    const time = Math.ceil((book.pages * 500) / 90);
    book.readingTime = time;
  });

return booksArray;
}

estimatedReadingTime(booksArray);



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

/* Objetivo principal de la función:
      Devolver un array de objetos con las claves 'title' 'pages' y 'author' para cada libro del objeto dictionary*/

  // Paso 0: A la función le asignaremos como único argumento o parámetro el objeto dictionary
function booksByAuthor(dictionary) {
 // Paso 1: Obtener las claves del objeto dictionary para poder iterar sobre ellas y crear un array (arrayAutores) contenedor de las mismas
 const arrayAutores = Object.keys(dictionary);
  
 // Paso 2: Crear un array vacío (librosComoObjetos) contenedor  de los libros como objetos

 let librosComoObjetos = [];

 // Paso 3: Para cada  autor o elemento del array autores (correspondientes a las claves del objeto dictionary), obtener cada uno de sus libros que serán almacenados en un nuevo array (arrayLibros)
 arrayAutores.forEach(author => {
   
   const arrayLibros = dictionary[author]; // Contenedor de los libros de cada autor
   

 // Paso 4: Convertir cada libro del arrayLibros en un objeto (librosDatos) con las claves 'title' y 'pages' y 'author'
   arrayLibros.forEach(libro => {
     const librosDatos = {
       title: libro[0],
       pages: libro[1],
       author: author
     };
 
     // Paso 5: Convertir y almacenar todos los libros del arrayLibros en un nuevo array (librosComoObjetos)
     librosComoObjetos.push(librosDatos);
   });
 });
   
 
 // Paso 6: Devolver el array de librosComoObjetos
 return librosComoObjetos;
}



// Bonus: Iteration 6 | Average Page Count

  // Paso 1: Inicializar la función que recibe como argumento un array  de libros (booksArray)
function averagePageCount(booksArray) {

  // Paso 2: Calcular la suma total de páginas de todos libros co un bucle for
  let totalPages = 0;
  for (let i = 0; i < booksArray.length; i++) {
    totalPages += booksArray[i].pages;
  }

  // Paso 3: Calcular la media de páginas
  const average = totalPages / booksArray.length;
  const result = average;

  // Paso 4: Devolver el resultado obtenido
return result;
}

