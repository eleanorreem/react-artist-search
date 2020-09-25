import React, { useState } from "react";
import { searchByArtist } from "../api/discogs";
import List from "../components/List";
import { SearchResult } from "../models";
import SearchItem from "../components/SearchItem";

function SearchArtists() {
  const [artists, setArtists] = useState<SearchResult[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>();

  // TODO type
  const handleChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const handleButtonSubmit = (e: any) => {
    e.preventDefault();
    if (searchTerm) {
      searchByArtist(searchTerm)
        .then((res) => {
          setArtists(res.data.results);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleButtonSubmit}>
        <h1>Artist database</h1>
        <input type="text" onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <List>
        {artists.map((artist: SearchResult) => (
          <SearchItem item={artist} />
        ))}
      </List>
    </div>
  );
}

export default SearchArtists;
