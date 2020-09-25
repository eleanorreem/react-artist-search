import React from "react";
import { SearchResult } from "../models";

const SearchItem = ({ item }: { item: SearchResult }) => {
  return (
    <li className="List-li">
      <a href={`/artist/${item.id}`}>{item.title}</a>
    </li>
  );
};

export default SearchItem;
