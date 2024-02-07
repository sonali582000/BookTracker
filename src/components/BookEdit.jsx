import { useState } from "react";

const BookEdit = ({ book }) => {
  const [title, setTitle] = useState(book.title);
  const handleClick = (event) => {
    event.preventDefault();
  };
  return (
    <form className="book-edit" onSubmit={handleClick}>
      <label>Title</label>
      <input
        className="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
