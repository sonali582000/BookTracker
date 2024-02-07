import { useState } from "react";
import BookEdit from "./BookEdit";

const BookList = ({ book, onDelete, onEdit }) => {
  const [showBookEdit, setShowBookEdit] = useState(false);

  const handleEditClick = () => {
    setShowBookEdit(!showBookEdit);
  };

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleSubmit = (id, newTitle) => {
    setShowBookEdit(false);
    onEdit(id, newTitle);
  };

  let content = <h3>{book.title}</h3>;
  if (showBookEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
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
