import styles from "@/styles/recipe.module.scss";
import { useEffect, useState } from "react";

export default function Karekare({ recipe }) {
  const [karekare] = useState(recipe);

  useEffect(() => {}, []);
  return (
    <>
      <main className={styles.main}>
        <section className={styles.section1}>
          <img
            src={karekare.image}
            alt={karekare.name}
            className={styles.food_image}
          />
          <h1>{karekare.name}</h1>
          <img src={karekare.rating} alt="rating" />
          <p>{karekare.information}</p>
          <img src={karekare.time} alt="prep_time" className={styles.time} />
        </section>
        <section className={styles.section2}>
          <img src="images/ingredients_logo.png" alt="ingredients_logo" />
          <h1>Ingredients</h1>
          <ul className={styles.list}>
            {karekare.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </section>
        <section className={styles.section3}>
          <img src="images/procedure_logo.png" alt="procedure_logo" />
          <h1>Procedure</h1>
          <ol className={styles.list}>
            {karekare.procedure.map((step, index) => (
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

  const karekare = recipes.find((recipe) => recipe.name === "Kare-kare");

  return {
    props: {
      recipe: karekare,
    },
  };
}
