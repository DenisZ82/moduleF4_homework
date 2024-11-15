import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Table from 'react-bootstrap/Table';

function Category() {
    const { category } = useParams();
    const [recipes, setRecipes] = useState([]);

    if (!recipes.length) {
        axios.get("http://127.0.0.1:8000/api/recipes/").then(res => {
            const recipesCategory = res.data.filter(
                recipe => recipe.category === category
            );
            // console.log(recipesCategory);
            setRecipes(recipesCategory);
        })
    }


    return(
        <>
            <h2>{ category }</h2>
            <Table striped bordered hover className="tablelist">
                <tbody>
                    {recipes.map(recipe => <tr key={recipe.id}>
                        <td><Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link></td>
                    </tr>)}
                </tbody>
            </Table>
        </>
    );
}

export default Category;