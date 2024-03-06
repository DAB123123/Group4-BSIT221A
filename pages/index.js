import React, { useState } from "react";
import Header from "./components/header";
import RecipeCard from "./components/recipecard";
import recipes from "./components/recipe.json";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header
        searchQuery={searchQuery}
        handleSearchInputChange={handleSearchInputChange}
      />

      <div className="row">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const recipe = require("./components/recipe.json");
  return {
    props: {
      recipe: recipe,
    },
  };
}
