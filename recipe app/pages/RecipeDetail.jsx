import { useState,useEffect } from "react";
import axios from 'axios';
import {useParams} from 'react-router-dom';

let RecipeDetail=()=>{
    let {id}=useParams();
    let [recipe,setRecipe]=useState();

    useEffect(()=>{
        axios.get(`https://dummyjson.com/recipes/${id}`).then(res=>{
            setRecipe(res.data);
        });
    })

    if(!recipe) return <p>Details are loading...</p>

    return (
        <div>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} />        
            <p>{recipe.cuisine}</p>
            <p>Instructions: {recipe.instructions}</p>
        </div>
    )
}
export default RecipeDetail;