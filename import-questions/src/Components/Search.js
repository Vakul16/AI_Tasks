import React from "react";

const Search = () => {
  return (
    <input
      type="text"
      className="form-control"
      style={{ width: "240px" }}
      placeholder="Search for saved questions"
      value={""}
    />
  );
};

export default Search;
