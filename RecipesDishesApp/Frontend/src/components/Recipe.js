import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../stylse/Recipe.css";

function Recipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://127.0.0.1:8000/api/recipes/${id}`);
                setRecipe(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (recipe) {
        return(
            <>
                <h2>Рецепт: {recipe.name}</h2>
                <p>{recipe.text}</p>
            </>
        );
    }
    
    return <div>Recipe not found.</div>;
}

export default Recipe;