const user1 = { name: 'Erick', id: 7 };

const book1 = { title: 'The Catcher in the Rye', author: 'J.D Salinger', isbn: '0316769487', category: 'Classic Literature' };
const book2 = { title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '0446310786', category: 'Classic Literature' };
const book3 = { tittle: 'Dad rich, dad poor', author: 'Robert Kiyosaky', isbn: '010203040', category: 'Economy' };

user1.books = [book1, book2];

const user2 = { name: 'Ana', id: 8 };

const book4 = { tittle: 'The good parts', author: 'Douglas Crockford', isbn: '0596517742', category: 'Programming' };
const book5 = { tittle: 'JavaScrip for you', author: ' Julio Atman', isbn: '0303030255', category: 'Programming' };
const book6 = { tittle: 'JavaScript new era', author: 'Peter Parker', isbn: '0105027627272', category: 'Programing' };

user2.books = [book4, book5, book6];


const library = [];
library.push(user);

library.forEach(user => {
    console.log(`${user.name}'s books:`)
    user.books.forEach(book => {
        console.log(`- ${book.tittle}, ${book.author}`);
    });
});