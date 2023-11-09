const express = require("express");

const bookController = require("../controllers/bookController");

const router = express.Router();

//routes
router.post("/create",bookController.createBook); //create a book
router.get("/getBooks",bookController.getAllBooks); //get all books
router.get("/getBookById",bookController.getBookById); //get one book by using id
router.put("/updateBook",bookController.updateBook); //update a book using id
router.delete("/deleteBook",bookController.deleteBook); //Delete a book using id


module.exports = router;
