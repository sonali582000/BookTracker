import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookShow from "./components/BookShow";

function App() {
  const [book, setBook] = useState([]);

  const handleBookUpdateId = (id, newTitle) => {
    const BookEdit = book.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });

    setBook(BookEdit);
  };

  const handleBookDeleteId = (id) => {
    const BookToBeDelete = book.filter((book) => {
      return book.id !== id;
    });

    setBook(BookToBeDelete);
  };

  const handleCreateBook = (title) => {
    const insertBook = [
      ...book,
      { id: Math.round(Math.random() * 999), title },
    ];
    setBook(insertBook);
  };
  return (
    <>
      <div className="app">
        <h1>Reading List</h1>
        <BookShow
          books={book}
          onDelete={handleBookDeleteId}
          onEdit={handleBookUpdateId}
        />
        <BookCreate onCreate={handleCreateBook} />
      </div>
    </>
  );
}

export default App;
