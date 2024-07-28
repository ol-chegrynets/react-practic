const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
];

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => {
        return <li key={book.id}>{book.name}</li>;
      })}
    </ul>
  );
};

const BookApp = () => {
  return (
    <>
      <h2>Books of the week</h2>
      <BookList books={favouriteBooks} />
    </>
  );
};
export default BookApp;
