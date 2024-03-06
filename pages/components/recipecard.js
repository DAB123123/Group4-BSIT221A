import Link from "next/link";

function RecipeCard({ recipe }) {
  return (
    <div className="column">
      <div className="container">
        <Link href={`/recipes/${recipe.id}`}>
          <img src={recipe.image} alt={recipe.name} className="food" />
        </Link>
      </div>
      <div className="button">{recipe.name}</div>
    </div>
  );
}

export default RecipeCard;
