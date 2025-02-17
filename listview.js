window.addEventListener("load", getData);

const recipelist = document.querySelector("#list_grid");
// const recipes = new URLSearchParams(window.location.search).get("category");

let url = `https://dummyjson.com/recipes`;

function getData() {
<<<<<<< HEAD
	console.log("getData");
	fetch(url)
		.then((response) => response.json())
		.then((data) => showRecipes(data.recipes));
=======
  console.log("getData");
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("Modtaget data:", data); // Debugging
      if (data.recipes && Array.isArray(data.recipes)) {
        showRecipes(data.recipes);
      } else {
        console.error("Fejl: Ingen opskrifter fundet i data!", data);
      }
    })
    .catch((error) => console.error("Fejl ved hentning af data:", error));
>>>>>>> listview-finish-ish
}

function showRecipes(recipes) {
  console.log("showRecipes kaldt med:", recipes);

<<<<<<< HEAD
	const markup = recipes
		.map(
			(recipe) => `
            <a class="list_card" href="single_view.html?id=${recipe.id}">
=======
  const markup = recipes
    .map(
      (recipe) => `
	  <div>
	  <a class="list_card" href="">
>>>>>>> listview-finish-ish
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

// `<a class="list_card" href="">
//   <img class="list_card_img" src="https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp" alt="picture of dish" />
//   <h3 class="list_card_title">${recipe.name}</h3>
//   <div class="card_category_grid">
// <h4 class="list_card_category">${recipe.cuisine}</h4>
// <h4 class="list_card_category">${recipe.difficulty}</h4>
// <h4 class="list_card_category">${recipe.prepTimeMinutes}</h4>
// <h4 class="list_card_category">${recipe.rating}</h4>
//   </div>
// </a>
// `
