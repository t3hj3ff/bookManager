const express = require('express');
const { checkToken } = require('../middlewares/auth');
const bookController = require('../controllers/bookController');
const { body } = require('express-validator');

const router = express.Router();

//POST route for creating new book with example validations.
//IMPORTANT: I only provided validations for one endpoint, for others it will be applied similarly
router.post('/newBook',[
    body('title').notEmpty().withMessage('Title is required'),
    body('author').notEmpty().withMessage('Author is required'),
    body('description').notEmpty().withMessage('Description is required'),
  ], checkToken, bookController.createBook);
//GET route for retriving all books
router.get('/getAllBooks', checkToken, bookController.getAllBooks);
//GET reoute for retriving book by ID
router.get('/getBook/:id', checkToken, bookController.getBookById);
//PUT route for updating book description by provided ID
router.put('/updateDescription/:id', checkToken, bookController.updateBookDescription);
//PUT route for updating book last read page by provided ID
router.put('/updateLastRead/:id', checkToken, bookController.updateLastRead);
//DELETE route for deleting book by provided ID
router.delete('/deleteBook/:id', checkToken, bookController.deleteBook);

module.exports = router;
