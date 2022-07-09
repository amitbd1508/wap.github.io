const Book = require("../models/book");

const getAll = (req, res, next) => {
  res.status(200).json(Book.getAll());
};
const getById = (req, res, next) => {
  res.status(200).json(Book.getById(req.params.id));
};
const deleteById = (req, res, next) => {
  res.status(200).json(Book.deleteById(req.params.id));
};
const save = (req, res, next) => {
  const book = new Book(
    null,
    req.body.title,
    req.body.isbn,
    req.body.publishedDate,
    req.body.author
  );
  res.status(201).json(book.save());
};
const update = (req, res, next) => {
  const book = new Book(
    req.params.id,
    req.body.title,
    req.body.isbn,
    req.body.publishedDate,
    req.body.author
  );
  res.status(200).json(book.update());
};
module.exports = { getAll, getById, deleteById, save, update };
