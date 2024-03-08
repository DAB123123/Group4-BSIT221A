import React from "react";

function Header({ searchQuery, handleSearchInputChange }) {
  return (
    <section className="header">
      <h1>Recipe App</h1>
      <h2>Filipino Cuisines</h2>
      <input
        type="text"
        id="search"
        placeholder="Search"
        className="search"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
    </section>
  );
}

export default Header;
