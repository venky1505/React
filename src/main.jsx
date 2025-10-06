
import {createRoot} from 'react-dom/client'
import './App.css';
import App from './App';
import RecipeCard from './App';

const root=createRoot(document.getElementById("root"));
export default function Recipe(){
    return(
        <div className="recipe-list">
            <RecipeCard RecipeName="Masala Chai" 
            preptime="10" cookingtime="5"
            servesize="1" diificulty="Easy" type="Beverage" 
            chef="Tea by Harish"    />
            <RecipeCard RecipeName="Biryani" 
            preptime="30" cookingtime="45"
            servesize="7" diificulty="More difficult" type="Lunch/Dinner" 
            chef="Biryani by Ravi"    />
            <RecipeCard RecipeName="Dosa" 
            preptime="40" cookingtime="5"
            servesize="10" diificulty="Moderate" type="Tiffin" 
            chef="Dosa by Charan"    />
        </div>
    )
}
root.render(<Recipe/>)