import { useState,useEffect } from "react";
import axios from 'axios';
import RecipeCard from "../components/RecipeCard";
import {Link} from "react-router-dom";

let RecipeList = ()=>{
    let [recipes, setRecipes]=useState([]);

    useEffect(()=>{
        axios.get("https://dummyjson.com/recipes").then(res=>{
            setRecipes(res.data.recipes);
        });
    })
    return (
        <div>
            <h2>Recipe Listing</h2>
            <div className="grid">
                {recipes.map(recipe=>(
                    <Link key={recipe.id} to ={`${recipe.id}`}>

                    </Link>
                ))}
            </div>
        </div>
    )
}
export default RecipeList;