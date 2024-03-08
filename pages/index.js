import React, { useState } from "react";
import Header from "@/components/header";
import Head from "next/head";
import RecipeCard from "@/components/recipecard";
import recipes from "@/components/recipe.json";

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
      <Head>
        <title>Recipe App</title>
        <meta
          name="description"
          content="A simple recipe app to explore different recipes."
        />
        <meta name="theme-color" content="#317EFB" />
      </Head>
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
  const recipe = require("../components/recipe.json");
  return {
    props: {
      recipe: recipe,
    },
  };
}
