const express = require("express");
const {getAllBooks, getSingleBookById, getAllIssuedBooks} = require("../controllers/book-controller");
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

router.post('/',(req,res) => {
    const {data} = req.body;
    if(!data){
        return res.status(400).json({
            success: false,
            message: "No data provided"
        });
    }

    const book = books.find((each) => each.id === data.id);

    if(book){
        return res.status(404).json({
            success: false,
            message: "Book already exists with this id, please use a unique id"
        });
    }

    const allBooks = [...books, data];
    return res.status(201).json({
        success: true,
        data: allBooks
    });
});

/*
Route: /Books/:id
Method: PUT
Description: update book
Access: Public
Parameters: id
Data: author, name, genre, price, publisher, id
*/
router.put('/:id', (req,res) => {
    const {id} = req.params;
    const {data} = req.body;

    const book = books.find((each) => each.id === id);

    if(!book){
        return res.status(404).json({
            success: false,
            message: "Book not found with this id"
        });
    }
    const updateData = books.map((each) => {
        if(each.id === id){
            return {...each, ...data};
        }
        return each;
    });
    return res.status(200).json({
        success: true,
        data: updateData
    });
});




module.exports = router;