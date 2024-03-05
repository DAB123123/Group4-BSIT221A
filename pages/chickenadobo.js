import styles from "@/styles/recipe.module.scss";
import { useEffect, useState } from "react";
export default function ChickenAdobo({ recipe }) {
  const [chickenAdobo] = useState(recipe);

  useEffect(() => {}, []);
  return (
    <>
      <main className={styles.main}>
        <section className={styles.section1}>
          <img
            src={chickenAdobo.image}
            alt={chickenAdobo.name}
            className={styles.food_image}
          />
          <h1>{chickenAdobo.name}</h1>
          <img src={chickenAdobo.rating} alt="rating" />
          <p>{chickenAdobo.information}</p>
          <img
            src={chickenAdobo.time}
            alt="prep_time"
            className={styles.time}
          />
        </section>
        <section className={styles.section2}>
          <img src="images/ingredients_logo.png" alt="ingredients_logo" />
          <h1>Ingredients</h1>
          <ul className={styles.list}>
            {chickenAdobo.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </section>
        <section className={styles.section3}>
          <img src="images/procedure_logo.png" alt="procedure_logo" />
          <h1>Procedure</h1>
          <ol className={styles.list}>
            {chickenAdobo.procedure.map((step, index) => (
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

  const chickenAdobo = recipes.find(
    (recipe) => recipe.name === "Chicken Adobo"
  );

  return {
    props: {
      recipe: chickenAdobo,
    },
  };
}
