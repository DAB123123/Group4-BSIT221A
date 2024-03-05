import styles from "@/styles/recipe.module.scss";
import { useEffect, useState } from "react";

export default function Tinola({ recipe }) {
  const [tinola] = useState(recipe);

  useEffect(() => {}, []);
  return (
    <>
      <main className={styles.main}>
        <section className={styles.section1}>
          <img
            src={tinola.image}
            alt={tinola.name}
            className={styles.food_image}
          />
          <h1>{tinola.name}</h1>
          <img src={tinola.rating} alt="rating" />
          <p>{tinola.information}</p>
          <img src={tinola.time} alt="prep_time" className={styles.time} />
        </section>
        <section className={styles.section2}>
          <img src="images/ingredients_logo.png" alt="ingredients_logo" />
          <h1>Ingredients</h1>
          <ul className={styles.list}>
            {tinola.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </section>
        <section className={styles.section3}>
          <img src="images/procedure_logo.png" alt="procedure_logo" />
          <h1>Procedure</h1>
          <ol className={styles.list}>
            {tinola.procedure.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await import("./components/recipe.json");
  const recipes = await res.default;

  const tinola = recipes.find((recipe) => recipe.name === "Tinola");

  return {
    props: {
      recipe: tinola,
    },
  };
}
