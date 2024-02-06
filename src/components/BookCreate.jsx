import { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <>
      <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            className="input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="button">Create!</button>
        </form>
      </div>
    </>
  );
};

export default BookCreate;
