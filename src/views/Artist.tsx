import React, { useState, useEffect } from "react";
import { getArtistReleases, getArtist } from "../api/discogs";
import List from "../components/List";
import { Artist, Release } from "../models";
import ReleaseCard from "../components/ReleaseCard";
import { useParams } from "react-router-dom";

function ArtistPage() {
  const [releases, setReleases] = useState<Release[]>([]);
  const [artist, setArtist] = useState<Artist>();
  const [sortCriteria, setSortCriteria] = useState<"year" | "title">("year");
  const { id } = useParams();

  // TODO better type
  const handleChange = (e: any) => {
    setSortCriteria(e.target.value);
  };

  const handleButtonSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    if (artist) {
      getArtistReleases(artist.id, sortCriteria)
        .then((res) => {
          setReleases(res.data.releases);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  useEffect(() => {
    getArtist(id)
      .then((res) => {
        setArtist(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

    getArtistReleases(id, sortCriteria)
      .then((res) => {
        setReleases(res.data.releases);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id, sortCriteria]);

  // TODO extract form fields and buttons into components
  return (
    <div>
      <h1>{artist?.name}</h1>
      <form onSubmit={handleButtonSubmit}>
        <select name="sortby" id="sortby" onChange={handleChange}>
          <option value="year">year</option>
          <option value="title">title</option>
        </select>
        <button type="submit">change sort criteria</button>
      </form>
      <List>
        {releases.map((release: Release) => (
          <ReleaseCard release={release} />
        ))}
      </List>
    </div>
  );
}

export default ArtistPage;
