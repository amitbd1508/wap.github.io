const express = require("express");
const cors = require("cors");
const bookRouter = require("./routes/book");
const app = express();

app.use(cors())

app.use(express.json());
app.use("/book", bookRouter);

app.use((req, res, next) => {
  res.status(500).json("Page not found");
});
app.use((err, req, res, next) => {
  if (err.message == "Record not found") {
    res.status(404).json({ error: err.msg });
  } else {
    res.status(500).json({ error: err.msg });
  }
});

app.listen(3000, () => {
  console.log("Server running at port number 3000...");
});
