import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// const API_URL = "http://localhost:5000";
const API_URL = "https://ujjawal74.pythonanywhere.com";

const BookDetails = () => {
  let navigate = useNavigate();

  let sample = {
    author: "Wait...",
    cover: "Wait...",
    description: "Wait...",
    genre: "Wait...",
    id: "Wait...",
    price: "Wait...",
    publication_date: "Wait...",
    rating: "Wait...",
    title: "Wait...",
  };

  const [book, setBook] = useState(sample);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `${API_URL}/get/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.status === "error") {
          navigate(-1);
        }
        setBook(data.book);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <div className="card mx-md-5" style={{ width: "18rem" }}>
        <img className="card-img-top" src={book.cover} alt="cover" />
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">{book.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Auther : {book.author}</li>
          <li className="list-group-item">Rating : {book.rating}</li>
          <li className="list-group-item">Price : &#x20B9;{book.price}</li>
          <li className="list-group-item">Genre : {book.genre}</li>
          <li className="list-group-item">
            Pubication Date : {book.publication_date}
          </li>
        </ul>
      </div>
    </>
  );
};

export default BookDetails;
