import "./App.css";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddBook from "./AddBook";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Books from "./Books";
import ManageBooks from "./ManageBooks";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const API_URL = "http://localhost:5000";
const API_URL = "https://ujjawal74.pythonanywhere.com";

function App() {
  const initialBook = {
    title: "",
    author: "",
    description: "",
    cover: "",
    price: "",
    rating: "",
    genre: "",
    publication_date: "",
  };
  const [book, setBook] = useState(initialBook);
  const [booksFound, setBooksFound] = useState([]);

  // finds all books and saving to the state
  const getData = async () => {
    try {
      const res = await fetch(`${API_URL}/get`);
      const data = await res.json();
      setBooksFound(data.books);
    } catch (error) {
      console.log(error);
    }
  };

  // first initial call [component_did_mount]
  useEffect(() => {
    getData();
  }, []);

  // handling input fields of form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
  };

  // seprate handling of file and fetching its readable url
  const fileHandler = async (e) => {
    console.log(e.target.files[0]);
    let file = e.target.files[0];
    const data = new FormData();
    data.append("image", file);
    const url = `${API_URL}/upload`;
    try {
      const res = await fetch(url, {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      setBook({
        ...book,
        cover: result.url,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // normal fetch post request and retrieving data
  const postReq = async (url, obj) => {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  // handle form submit button
  const handleSubmit = async () => {
    const {
      title,
      author,
      description,
      cover,
      price,
      rating,
      genre,
      publication_date,
    } = book;
    if (
      title &&
      author &&
      description &&
      cover &&
      price &&
      rating &&
      genre &&
      publication_date
    ) {
      let url = `${API_URL}/add-book`;
      const res = await postReq(url, book);
      if (res.status === "ok") {
        getData();
        toast(res.msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      alert("please fill all the fields!");
    }
  };

  // handle edit modal from submit button
  const handleEdit = async () => {
    // let id = book.id;
    let url = `${API_URL}/edit-book`;
    const res = await postReq(url, book);
    console.log(res);
    if (res.status === "ok") {
      toast(res.msg);
      getData();
    }
  };

  // handle delete button
  const handleDelete = async (id) => {
    let url = `${API_URL}/book/delete`;
    const res = await postReq(url, { id: id });
    if (res.status === "ok") {
      toast(res.msg);
      getData();
    }
  };

  // for filters which filter is selected and refresh the data
  const onRadioButtonPressed = async (e) => {
    let url = `${API_URL}/get`;
    let res = await postReq(url, { filter: e.target.value });
    setBooksFound(res.books);
  };

  // on entering a word in search box if word is starts with that query
  const handleSearchInput = async (e) => {
    let url = `${API_URL}/search`;
    if (e.target.value === "") {
      getData();
    }
    let res = await postReq(url, { query: e.target.value });
    setBooksFound(res.books);
  };

  // created routing with react-router-dom
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar handleSearchInput={handleSearchInput} />,
      children: [
        {
          index: true, // index == true nothing after slash
          element: (
            <>
              {booksFound.length ? (
                <Filter
                  booksFound={booksFound}
                  onRadioButtonPressed={onRadioButtonPressed}
                />
              ) : (
                <></>
              )}
              <Books booksFound={booksFound} />
            </>
          ),
        },
        {
          path: "add-book", // removing slash before add-book ecause its a nested route and should be relative as "/route" is absolute
          element: (
            <AddBook
              handleInputChange={handleInputChange}
              fileHandler={fileHandler}
              handleSubmit={handleSubmit}
            />
          ),
        },
        {
          path: "manage-books",
          element: (
            <ManageBooks
              book={book}
              setBook={setBook}
              booksFound={booksFound}
              handleInputChange={handleInputChange}
              fileHandler={fileHandler}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
