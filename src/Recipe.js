import React from 'react';
import style from './recipe.module.css';

const Recipe =({title,image,calories,ingredients,procedure}) =>{
    return(
        <div className={style.recipe}>
            <h1 className={style.title}>{title} </h1>
            <p className={style.text}>CALORIES : {calories}</p>
            <img className={style.image} src ={image} alt="" />
            <ol className={style.text}>
            {ingredients.map(ingredient =>(
                <li>{ingredient.text}</li>
            ))}
            </ol>
            <p className={style.text}>
           Click <a href={procedure}>Here</a> for full procedure
                </p>
        </div>
    );
};

export default Recipe;
