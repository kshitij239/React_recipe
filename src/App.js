import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App =() =>{

    const APP_ID ='bb5068c4';
    const APP_KEY='2e4bc57ce3f0d64403c22989658a9bff';
   
    const [recipes,setRecipes] = useState([]);
    const [search,setSearch] = useState("");
    const [query,setQuery]= useState('chicken');

    useEffect(() =>{
        const getRecipes = async () => {
      const respone= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data= await respone.json();
      setRecipes(data.hits);  
      console.log(data.hits);  
    };
      getRecipes();
    },[query]);

      

    const updateSearch = e => {
      setSearch(e.target.value);
    }

    const getSearch = e =>{
      e.preventDefault();
      setQuery(search);
      setSearch(''); 
    }

       return(
        <div className = "App">
           <form 
           onSubmit={getSearch}
           className="search-form">
               <input 
               className="search-bar" 
               type="text" value={search}
                onChange={updateSearch}/>
                   <button className="search-button" type="submit">
                        Search
                   </button>
               
           </form>
           <div className="recipes">
           {recipes.map(recipe =>(
             <Recipe 
             key={recipe.recipe.label}
             title={recipe.recipe.label} 
             calories={recipe.recipe.calories}
             image={recipe.recipe.image}
             ingredients={recipe.recipe.ingredients}
             procedure ={recipe.recipe.url}/>
           ))};
           </div> 
        </div>
    );
};

export default App;
