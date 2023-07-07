const Card = ({ card }) => {
  let score = 3.6 * ((card.rating / 5) * 100);

  return (
    <>
      <div className="col-md-4 col-lg-4 col-xl-3 m-3">
        <div className="card" style={{ borderRadius: "15px" }}>
          <div
            className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light"
          >
            <img
              src={card.cover}
              style={{
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
              className="img-fluid"
              alt="Laptop"
            />
            <a href="#!">
              <div className="mask"></div>
            </a>
          </div>
          <div className="card-body pb-0">
            <div className="d-flex justify-content-between">
              <div>
                <p>
                  <a href="#!" className="text-dark">
                    {card.title}
                  </a>
                </p>
                <p className="small text-muted">{card.genre}</p>
              </div>
              <div>
                <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                  <div
                    className="rating"
                    style={{
                      background: `conic-gradient(hotpink ${score}deg, #eee 0deg)`,
                    }}
                  >
                    <div className="hollow">{card.rating}/5</div>
                  </div>
                </div>
                <p className="small text-muted">Rated {card.rating}/5</p>
              </div>
            </div>
          </div>
          <hr className="my-0" />
          <div className="card-body pb-0">
            <div className="d-flex justify-content-between">
              <p>&#x20B9;{card.price}</p>
              <button type="button" className="btn btn-sm btn-primary">
                Add To Cart
              </button>
            </div>
            <p className="small text-muted">{card.author}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
