import React from "react";
import recipes from "./recipe.json";
import { Rating } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import styles from "@/styles/recipe.module.scss";

const RecipeDetails = ({ recipe }) => {
  const recipeId = parseInt(recipe.id);

  const selectedRecipe = recipes.find((r) => r.id === recipeId);

  if (!selectedRecipe) {
    return <div className={styles.recipe}>Recipe not found</div>;
  }

  return (
    <>
      <main className={styles.main}>
        <section className={styles.section1}>
          <img
            src={selectedRecipe.image}
            alt={selectedRecipe.name}
            className={styles.food_image}
          />
          <h1>{selectedRecipe.name}</h1>
          <Rating
            icon="star"
            defaultRating={selectedRecipe.rating}
            maxRating={5}
            disabled
            size="massive"
          />
          <p>{selectedRecipe.information}</p>
          <img
            src={selectedRecipe.time}
            alt="prep_time"
            className={styles.time}
          />
        </section>
        <section className={styles.section2}>
          <img src="../images/ingredients_logo.png" alt="ingredients_logo" />
          <h1>Ingredients</h1>
          <ul className={styles.list}>
            {selectedRecipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </section>
        <section className={styles.section3}>
          <img src="../images/procedure_logo.png" alt="procedure_logo" />
          <h1>Procedure</h1>
          <ol className={styles.list}>
            {selectedRecipe.procedure.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>
      </main>
    </>
  );
};

export default RecipeDetails;
