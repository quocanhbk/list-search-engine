import React from "react";
import { BsSearch } from "react-icons/bs";
import SearchEnginePage from "./components/SearchEngine";

const pageList = [
  {
    icon: <BsSearch size="24px" />,
    text: "Search Engine",
    path: "/",
    comp: <SearchEnginePage />,
  },
];

export default pageList;
