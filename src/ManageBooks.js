import EditModal from "./EditModal";

const ManageBooks = ({ setBook, booksFound, handleDelete }) => {
  const clickHandler = (item) => {
    setBook(item);
  };

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Title</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {booksFound.map((item, i) => {
            return (
              <tr key={i + 1}>
                <th scope="row">{i + 1}</th>
                <td>{item.title}</td>
                <td>
                  <button
                    onClick={() => clickHandler(item)}
                    type="button"
                    className="btn btn-outline-info mx-1"
                    data-toggle="modal"
                    data-target={`#exampleModal${i}`}
                  >
                    Edit
                  </button>
                  <EditModal index={i} item={item} />
                  <button
                    onClick={() => handleDelete(item.id)}
                    type="button"
                    className="btn btn-outline-danger mx-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ManageBooks;
