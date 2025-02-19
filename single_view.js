const myId = new URLSearchParams(window.location.search).get("id");

let recipeDesc = document.querySelector("#recipe_container");
fetch(`https://dummyjson.com/recipes/${myId}`)
  .then((response) => response.json())
  .then((data) => {
    recipeDesc.innerHTML = `
    <figure class="opskrift_navn">
          <img src="https://cdn.dummyjson.com/recipe-images/${
            data.id
          }.webp" alt="Billede af ${data.name}" />
          <h1>${data.name}</h1>
        </figure>
          <div class="tilbage">
             <a href="listview.html">&#8612 Tilbage</a>
          </div>
  
        <div class="grid_1to2 grid1">
          <h3>Ingredients</h3>
          <div class="infobox">
            <div class="info_buttons"><p class="preptime">${Math.floor(
              data.prepTimeMinutes + data.cookTimeMinutes
            )}min</p></div>
            <div class="info_buttons"><p class="cuisine">${
              data.cuisine
            }</p></div>
            <div class="info_buttons"><p class="kcal">${
              data.caloriesPerServing
            }kcal</p></div>
             <div class="rating"><p>${data.rating} / 5&#x2B50</p></div>
          </div>
        </div>
        <article id="ingrediens_container">
          <ul>
           ${data.ingredients
             .map((ingredients) => `<li>${ingredients}</li> `)
             .join("")}
          </ul>
        </article>
        <div class="grid_1to2">
          <h3>Instructions</h3>
        </div>
        <article id="fremgang_container">
        <ol>
         ${data.instructions
           .map((instructions) => `<li>${instructions}</li> `)
           .join("")}
        </ol>
        </article>
    `;
  });
