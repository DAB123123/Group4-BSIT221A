import { useState } from "react";
import Header from "./components/header";
import RecipeCard from "./components/recipe";

const recipes = [
  { name: "Sinigang", image: "images/sinigang.webp" },
  { name: "ChickenAdobo", image: "images/chickenadobo.jpg" },
  { name: "PorkSisig", image: "images/sisig.jpg" },
  { name: "Kare-Kare", image: "images/kare-kare.jpg" },
  { name: "Tinola", image: "images/tinola.jpg" },
  { name: "BicolExpress", image: "images/bicol_express.webp" },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
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
      <section className="row">
        {filteredRecipes.map((recipe, index) => (
          <RecipeCard key={index} name={recipe.name} image={recipe.image} />
        ))}
      </section>
    </>
  );
}
