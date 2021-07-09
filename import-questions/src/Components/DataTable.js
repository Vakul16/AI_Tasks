import React from "react";
import Search from "./Search";
import Button from "./Button";
import Table from "./Table";

const DataTable = () => {
  return (
    <div className = "main">
      <h2>Import questions</h2>
      <Search />
      <Button />
      <Table />
    </div>
  );
};

export default DataTable;
