import BookList from "./BookList";

const BookShow = ({ books, onDelete }) => {
  const bookToShow = books.map((book) => {
    return <BookList key={book.id} book={book} onDelete={onDelete} />;
  });

  return <div className="book-list">{bookToShow}</div>;
};

export default BookShow;
