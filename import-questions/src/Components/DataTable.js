import React from "react";
import Search from "./Search";
import Button from "./Button";
import Table from "./Table";

const DataTable = () => {
  return (
    <div className="container">
      <h2>Import questions</h2>
      <div className="search-container">
        <Search />
        <Button />
      </div>
      <Table />
    </div>
  );
};

export default DataTable;
