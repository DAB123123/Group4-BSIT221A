import React from "react";
import Link from "next/link";

function RecipeCard({ name, image }) {
  return (
    <div className="column">
      <div className="container">
        <Link href={`/${name.toLowerCase()}`}>
          <img src={image} alt={name} className="food" />
        </Link>
      </div>
      <div className="button">{name}</div>
    </div>
  );
}

export default RecipeCard;
