import React from "react";
// import AdvanceFilters from "../Components/AdvanceFilters";
import Filters from "../DisplayDynamically/Filters";
const HomePage = () => {
  return (
    <>
      <h5 className="heading">Advance Filters</h5>
      {/* <AdvanceFilters /> */}
      <Filters />
    </>
  );
};
export default HomePage;
