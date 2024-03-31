const express = require('express');
const { checkToken } = require('../middlewares/auth');
const bookController = require('../controllers/bookController');
const { body } = require('express-validator');

const router = express.Router();

router.post('/newBook',[
    body('title').notEmpty().withMessage('Title is required'),
    body('author').notEmpty().withMessage('Author is required'),
    body('description').notEmpty().withMessage('Description is required'),
  ], checkToken, bookController.createBook);
router.get('/getAllBooks', checkToken, bookController.getAllBooks);
router.get('/getBook/:id', checkToken, bookController.getBookById);
router.put('/updateDescription/:id', checkToken, bookController.updateBookDescription);
router.put('/updateLastRead/:id', checkToken, bookController.updateLastRead);
router.delete('/deleteBook/:id', checkToken, bookController.deleteBook);

module.exports = router;
