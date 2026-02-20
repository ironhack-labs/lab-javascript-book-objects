
//Esto es un array o matriz que contiene 4 libros , cada libro es un objeto, cada objeto contiene las propiedades de cada uno de los libros ,
//  que son con las que trabajamos en las funciones y bubles  de abajo 
let booksArray = [
  {
    title: 'The Old Man and the Sea',
    pages: 128,
    author: 'Ernest Hemingway',
    details: {
      language: 'English',
      description:
        "One of Hemingway's most famous works, it tells the story of Santiago",
    },
  },
  {
    title: 'The Airbnb Story',
    pages: 256,
    author: 'Leight Gallagher',
    details: {
      language: 'English',
      description:
        'This is the remarkable behind-the-scenes story of the creation and growth of Airbnb',
    },
  },
  {
    title: 'Educated - A Memoir',
    pages: 532,
    author: 'Tara Westover',
    details: {
      language: 'English',
      description: 'Educated is an account of the struggle for self-invention',
    },
  },
  {
    title: 'The Art of Learning',
    pages: 288,
    author: 'Josh Waitzkin',
    details: {
      language: 'English',
      description:
        "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure",
    },
  },
];
// En el ejercicio piden una funcion que devuelva (return)  los detalles de un libro en concreto, no de todos ,
//  solo de uno en concreto que nosotros querramos;
function getBookDetails(book) {
// recibimos el libro que estamos pasando como argumento en el momento que 
// invocamos la  funcion ( abajo donde le estamos pasando el libro numero 3)
//lo que hago es pintar en el return el titulo , el autor y el numero de paginas  separados por un guion alto
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}


// aqui es donde llamamos a la funcion getbookdetails y le pasamos como argumento , 
// el libro en cuestion que queremos consultar sus detalles ,
//  en este caso es el libro en la posicion numero 3 del array de libros 
console.log(getBookDetails(booksArray[3]));

console.log(booksArray);

// con este bucle emos eliminado una propiedad del objeto del arr
// y con el delete eliminamos la propiedad del objeto

for (let i = 0; i < booksArray.length; i++) {
  delete booksArray[i].details.description;
}
console.log(booksArray);

//Este bucle lo que hace es recorrer el array de libros  y lo que hace es que cada vez que esta iterando sobre un libro  esta calculando los minutos de lectura en decimales basado en el numero de paginas (pages) y con eso almacenamos el numero de minutos en decimales en la variable readingTimeCalc y una vez que tenemos eso ,  cogemos y creamos la propiedad readingTime dentro del objeto en cuestion que se esta recorriendo en ese momento en el bucle y lo que hacems es coger el valor de readingTimeCalc que ya esta en decimales y con el uso de la funcion Math.ceil , redondeamos el valor al alza al siguiente numero entero mas cercano , eso lo que hace es que al crear la nueva propiedad en el book , la crea ya redondeada.
for (let i = 0; i < booksArray.length; i++) {
  //cogemos el libro y calculamos el valos en minutos pero en decimal sin redondear y lo almacenamos en la variable
  let readingTimeCalc = (booksArray[i].pages * 500) / 90;

  // cogemos el valos de arriba de la variable y lo redondeamos y al mismo tiempo usando el .readingTime estamos creando la nueva propiedad en el objeto con el numero de minutos redondeado
  booksArray[i].readingTime = Math.ceil(readingTimeCalc);
}
console.log(booksArray);
