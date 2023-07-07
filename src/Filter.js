const Filter = ({ onRadioButtonPressed }) => {
  return (
    <>
      <div className="col-6 p-3" onChange={onRadioButtonPressed}>
        <label className="text-success d-flex">Filters (Sort By)</label>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineCheckbox1"
            value="rating"
          />
          <label className="form-check-label" htmlFor="inlineCheckbox1">
            Rating
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineCheckbox2"
            value="price"
          />
          <label className="form-check-label" htmlFor="inlineCheckbox2">
            Price
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineCheckbox3"
            value="publication_date"
          />
          <label className="form-check-label" htmlFor="inlineCheckbox3">
            Publication Date
          </label>
        </div>
      </div>
    </>
  );
};

export default Filter;
