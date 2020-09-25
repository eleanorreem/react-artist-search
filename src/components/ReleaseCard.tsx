import React from "react";
import { Release } from "../models";

const ReleaseCard = ({ release }: { release: Release }) => {
  return (
    <li className="List-li">
      <p>{release.title}</p>
    </li>
  );
};

export default ReleaseCard;
