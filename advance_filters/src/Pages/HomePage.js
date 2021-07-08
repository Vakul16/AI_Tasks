import React from "react";
import AdvanceFilters from "../Components/AdvanceFilters";
import MovieList from "../Context/MovieList";
import { MovieProvider } from "../Context/MovieContext";
import AddMovie from "../Context/AddMovie";
import Filters from "../DisplayDynamically/Filters";
import RecursiveFilter from "../Components/Recursion/RecursiveFilter";
import URI from "urijs";
import { treeData } from "../Components/Recursion/RecursiveData";
const HomePage = () => {
  // console.log(window.location.href);
  // var uri = new URI(window.location.href);
  // console.log(uri);
  // uri.query({ foo: "bar", hello: ["world", "mars"] });

  return (
    <>
      {/* <h5 className="heading">Advance Filters</h5> */}
      {/* <AdvanceFilters /> */}
      <RecursiveFilter data={treeData} />
      {/* <Filters /> */}
      {/* <MovieProvider>
        <AddMovie />
        <MovieList />
      </MovieProvider> */}
    </>
  );
};
export default HomePage;
