//model book.js
let books = [
  {
    id: 1,
    title: "C",
    isbn: "122-11-2022",
    publishedDate: "2-12-2022",
    author: "Richi",
  },
  {
    id: 2,
    title: "Algorithm",
    isbn: "123-11-2222",
    publishedDate: "2-12-1993",
    author: "Wrox",
  },
  {
    id: 3,
    title: "The famous book",
    isbn: "124-11-2000",
    publishedDate: "2-12-2002",
    author: "Tina",
  },
  {
    id: 4,
    title: "Complete Java",
    isbn: "01-11-1978",
    publishedDate: "2-12-2022",
    author: "Godwin",
  },
];
class Book {
  constructor(id, title, isbn, publishedDate, author) {
    this.id = id;
    this.title = title;
    this.isbn = isbn;
    this.publishedDate = publishedDate;
    this.author = author;
  }
  save() {
    this.id = Math.floor(Math.random() * 100000).toString();
    books.push(this);
    return this;
  }
  update() {
    const index = books.findIndex((x) => x.id == this.id);
    if (index >= 0) {
      books.splice(index, 1, this);
      return this;
    } else {
      throw new Error("Record Not Found");
    }
  }
  static getAll() {
    return books;
  }

  static getById(id) {
    const index = books.findIndex((x) => x.id == id);
    if (index >= 0) {
      return books[index];
    } else {
      throw new Error("Record Not Found");
    }
  }
  static deleteById(id) {
    const index = books.findIndex((x) => x.id == id);
    if (index >= 0) {
      books = books.filter((x) => x.id != id);
      return books;
    } else {
      throw new Error("Record Not Found.");
    }
  }
}
module.exports = Book;
