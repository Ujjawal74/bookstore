import { NavLink, Outlet } from "react-router-dom";

const Navbar = ({ handleSearchInput }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-info" to="/">
            Flash Books
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  style={({ isActive }) =>
                    isActive ? { color: "blue" } : undefined
                  }
                  className="nav-link"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={({ isActive }) =>
                    isActive ? { color: "blue" } : undefined
                  }
                  className="nav-link"
                  to="/add-book"
                >
                  Add Book
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={({ isActive }) =>
                    isActive ? { color: "blue" } : undefined
                  }
                  className="nav-link"
                  to="/manage-books"
                >
                  Manage Books
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Title, Genre or Author"
                aria-label="Search"
                onChange={handleSearchInput}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
