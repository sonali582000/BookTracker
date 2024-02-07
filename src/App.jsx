import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookShow from "./components/BookShow";

function App() {
  const [book, setBook] = useState([]);

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
        <BookShow books={book} onDelete={handleBookDeleteId} />
        <BookCreate onCreate={handleCreateBook} />
      </div>
    </>
  );
}

export default App;
