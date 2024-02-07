import { useState } from "react";
import BookEdit from "./BookEdit";

const BookList = ({ book, onDelete }) => {
  const [showBookEdit, setShowBookEdit] = useState(false);

  const handleEditClick = () => {
    setShowBookEdit(!showBookEdit);
  };

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  let content = <h3>{book.title}</h3>;
  if (showBookEdit) {
    content = <BookEdit book={book} />;
  }

  return (
    <div className="book-show">
      {content}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookList;
