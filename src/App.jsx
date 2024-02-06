import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [book, setBook] = useState([]);

  const handleCreateBook = (title) => {
    console.log(title);
  };
  return (
    <>
      <h1>Book Tracker</h1>
      <BookCreate onCreate={handleCreateBook} />
    </>
  );
}

export default App;
