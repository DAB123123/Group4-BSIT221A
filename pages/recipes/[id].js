import React from "react";
import { useRouter } from "next/router";
import RecipeDetails from "../components/recipedetails";

const RecipePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const recipe = { id: id };

  return <RecipeDetails recipe={recipe} />;
};

export default RecipePage;

