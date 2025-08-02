import {useState} from "react";

let RecipeCard = ({recipe})=>{
    let [favourite,setFavourite]=useState(false);

    return (
    <div className='card'>
        <img src={recipe.image} alt={recipe.name} />
        <h3>{recipe.name}</h3>
        <p>{recipe.cuisine}</p>
        <button onClick={()=>setFavourite(!favourite)}>
            {favourite?"👍":"👎"}</button>
    </div>
  )
}
export default RecipeCard;
