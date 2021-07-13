import React from "react";

const Search = () => {
  return (
    <div className = "search">
      <i class="fas fa-search"></i>
      <input
        type="text"
        className="form-control" // style={{ width: "240px" }}
        placeholder="Search for saved questions"
        value={""}
      />
    </div>
  );
};

export default Search;
