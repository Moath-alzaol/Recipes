import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ data: { id, title, image, summary } }) {
    return (
        <Link to={`/recipeDetails/${id}`} className="recipe-card mb-4">
            <img src={image} alt="recip-img" />
            <h3>{title}</h3>
            <p dangerouslySetInnerHTML={{ __html: summary }} />
        </Link>
    );
}

export default RecipeCard;
