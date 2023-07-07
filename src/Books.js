import Card from "./Card";

const Books = ({ booksFound }) => {
  return (
    <>
      <div className="container d-flex justify-content-center flex-wrap">
        {booksFound.length ? (
          booksFound.map((card) => <Card card={card} key={card.id} />)
        ) : (
          <h4>No Books Found</h4>
        )}
      </div>
    </>
  );
};

export default Books;
