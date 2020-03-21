import React from "react";

function Search(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          value={props.filter}
          onChange={props.handleInputChange}
        />
        <button type="submit" onClick={props.filterEmployees} className="btn btn-succes">
          Filter
        </button>
      </div>
    </form>
  );
};

export default Search;