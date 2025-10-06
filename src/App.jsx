
export default function RecipeCard(props){

  return (
    <div className="recipe-card">
      <header>
        <h1>{props.RecipeName}</h1>
        <p> Prep Time: {props.preptime} min| Cookoing Time: {props.cookingtime} min</p>
      </header>
      <section>
        <p>Serves : {props.servesize} </p>
        <p>Diffficulty :{props.diificulty}</p>
        <p>Type :{props.type}</p>
      </section>
      <footer>
        <small>{props.chef}</small>
      </footer>
    </div>
  )
}
 