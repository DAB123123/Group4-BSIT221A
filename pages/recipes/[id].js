import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import RecipeDetails from "@/components/recipedetails";

const RecipePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const recipe = { id: id };

  return (
    <>
      <Head>
        <title>Recipe Details</title>
        <meta
          name="description"
          content="Recipe details for the chosen recipe."
        />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <RecipeDetails recipe={recipe} />;
    </>
  );
};

export default RecipePage;
