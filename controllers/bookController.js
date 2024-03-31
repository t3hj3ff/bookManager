const { Book } = require('../models');
const { validationResult } = require('express-validator');


//Controller for book creation
exports.createBook = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    else{
        const book = await Book.create(req.body);
        res.status(201).send(book);
    }
    
  } catch (error) {
    console.log(error)
    res.status(400).send(error);
  }
};

//Controller for retrieving all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).send(books);
  } catch (error) {
    res.status(400).send(error);
  }
};


//Controller for getting single book
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(404).send({ message: 'Book not found.' });
    }
    res.status(200).send(book);
  } catch (error) {
    res.status(400).send(error);
  }
};


//Searate controller for updating book description
exports.updateBookDescription = async (req, res) => {
  try {
    const [updated] = await Book.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedBook = await Book.findByPk(req.params.id);
      return res.status(200).send(updatedBook);
    }
    throw new Error('Book not found.');
  } catch (error) {
    res.status(400).send(error);
  }
};

//Separate controller for updating last read page
exports.updateLastRead = async (req, res) => {
    try {
        const [updated] = await Book.update(req.body, {
          where: { id: req.params.id }
        });
        if (updated) {
          const updatedBook = await Book.findByPk(req.params.id);
          return res.status(200).send(updatedBook);
        }
        throw new Error('Book not found.');
      } catch (error) {
        res.status(400).send(error);
      }
};


//Controller for Deleting a book
exports.deleteBook = async (req, res) => {
  try {
    const deleted = await Book.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      return res.status(204).send();
    }
    throw new Error('Book not found.');
  } catch (error) {
    res.status(400).send(error);
  }
};
