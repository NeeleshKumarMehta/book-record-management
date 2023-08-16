const express = require("express");
const {getAllBooks, getSingleBookById, getAllIssuedBooks, addNewBook, updateBookById} = require("../controllers/book-controller");
const {books} = require("../data/books.json");
const {users} = require("../data/users.json");

const router = express.Router();

/*
Route: /books
Method: GET
Description: Get all books
Access: Public
Parameters: None
*/
router.get('/', getAllBooks);

/*
Route: /Books/:id
Method: GET
Description: Get book by id
Access: Public
Parameters: id
*/
router.get('/:id', getSingleBookById);

/*
Route: /Books/issued
Method: GET
Description: Get all issued books
Access: Public
Parameters: None
*/
router.get('/issued/books', getAllIssuedBooks);

/*
Route: /Books
Method: POST
Description: Create new book
Access: Public
Parameters: None
Data: author, name, genre, price, publisher, id
*/

router.post('/',addNewBook);

/*
Route: /Books/:id
Method: PUT
Description: update book
Access: Public
Parameters: id
Data: author, name, genre, price, publisher, id
*/
router.put('/:id', updateBookById);




module.exports = router;