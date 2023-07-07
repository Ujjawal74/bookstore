import { ToastContainer } from "react-toastify";

const AddBook = ({ handleInputChange, fileHandler, handleSubmit }) => {
  return (
    <>
      <div className="col-md-6 p-3">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Harry Potter"
            name="title"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="J.K.Rowling"
            name="author"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="description"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Choose Image
          </label>
          <input
            className="form-control"
            type="file"
            id="formFile"
            name="image"
            onChange={fileHandler}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="&#x20B9; 100"
            name="price"
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Rating
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="4.8"
            min="1"
            max="5"
            name="rating"
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Choose Genre
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            name="genre"
            onChange={handleInputChange}
          >
            <option defaultValue>Choose Genre</option>
            <option value="Fiction">Fiction</option>
            <option value="Science">Science</option>
            <option value="Travel">Travel</option>
            <option value="Literature">Literature</option>
            <option value="Story">Story</option>
            <option value="Drama">Drama</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Publication Date
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Date"
            name="publication_date"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <button
            onClick={handleSubmit}
            type="button"
            className="btn btn-outline-success"
          >
            Add Book
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default AddBook;
