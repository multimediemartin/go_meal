window.addEventListener("load", getData);

const recipelist = document.querySelector("#list_grid");
// const recipes = new URLSearchParams(window.location.search).get("category");

let url = `https://dummyjson.com/recipes`;

function getData() {
  console.log("getData");
  fetch(url)
    .then((response) => response.json())
    .then((data) => showRecipes(data.recipes));
}

function showRecipes(recipes) {
  console.log("showRecipes kaldt med:", recipes);

  const markup = recipes
    .map(
      (recipe) => `
      <div>
            <a class="list_card" href="single_view.html?id=${recipe.id}">
                <img class="list_card_img" src="https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp" alt="picture of dish" />
                <h3 class="list_card_title">${recipe.name}</h3>
                <div class="card_category_grid">
                    <h4 class="list_card_category">${recipe.cuisine}</h4>
                    <h4 class="list_card_category">${recipe.difficulty}</h4>
                    <h4 class="list_card_category">${recipe.prepTimeMinutes} MINUTES</h4>
                    <h4 class="list_card_category">${recipe.rating} STARS</h4>
                </div>
            </a>
            </div>
        `
    )
    .join("");

  recipelist.innerHTML = markup;
}
