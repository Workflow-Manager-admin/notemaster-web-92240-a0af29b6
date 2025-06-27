import React from "react";

// PUBLIC_INTERFACE
/**
 * RecipeCarousel displays a horizontally scrollable list of recipe cards.
 * @param {Array} recipes - Array of {id, title, image, shortDesc}.
 */
function RecipeCarousel({ recipes }) {
  return (
    <div className="recipe-carousel">
      {recipes.map(recipe => (
        <div className="recipe-card" key={recipe.id}>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="recipe-img"
            loading="lazy"
          />
          <div className="recipe-title">{recipe.title}</div>
          <div className="recipe-desc">{recipe.shortDesc}</div>
        </div>
      ))}
    </div>
  );
}

export default RecipeCarousel;
