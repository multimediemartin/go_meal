window.addEventListener("load", getData);

const recipelist = document.querySelector("#list_grid");
// const recipes = new URLSearchParams(window.location.search).get("category");
let allRecipes = [];
let url = `https://dummyjson.com/recipes?limit=50`;

// *** CUISINE DROPDOWN MENU ***
document.querySelector("#cuisine_button").addEventListener("click", toggleCuisineMenu);

function toggleCuisineMenu() {
	let dropdown = document.querySelector(".categories_flex_mini");

	// Hvis dropdown ikke eksisterer, så lav den
	if (!dropdown) {
		dropdown = document.createElement("div");
		dropdown.classList.add("categories_flex_mini");
		document.querySelector(".categories_buttons").appendChild(dropdown);

		// Hent alle unikke cuisine-typer fra opskrifterne
		const cuisines = [...new Set(allRecipes.map((r) => r.cuisine))];
		console.log(cuisines);

		// Lav en knap for hver type cuisine
		cuisines.forEach((cuisine) => {
			const btn = document.createElement("button");
			btn.classList.add("mini_button");
			btn.innerText = cuisine;
			btn.addEventListener("click", () => filterByCuisine(cuisine));
			dropdown.appendChild(btn);
		});
	}

	// Toggle synlighed af dropdown-menu
	dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
}

function filterByCuisine(category) {
	const filtered = allRecipes.filter((recipe) => recipe.cuisine === category);
	showRecipes(filtered);
}

// *** FILTRERING ***
// Sværhedsgrad (nemmeste først)
document.querySelector("#difficulty_button").addEventListener("click", () => {
	const sorted = allRecipes.filter((recipe) => recipe.difficulty === "Easy");
	showRecipes(sorted);
});

// Tid (korteste tid først)
document.querySelector("#time_button").addEventListener("click", () => {
	const sorted = [...allRecipes].sort((a, b) => a.prepTimeMinutes - b.prepTimeMinutes);
	showRecipes(sorted);
});

// Rating (højeste rating først)
document.querySelector("#rating_button").addEventListener("click", () => {
	const sorted = [...allRecipes].sort((a, b) => b.rating - a.rating);
	showRecipes(sorted);
});

// *** ACTIVE CLASS TIL KNAPPER ***
const buttons = document.querySelectorAll(".categories_buttons button");
buttons.forEach((button) => {
	button.addEventListener("click", function () {
		// Fjern "active" fra alle knapper
		buttons.forEach((btn) => btn.classList.remove("active"));

		// Tilføj "active" til den klikkede knap
		this.classList.add("active");

		// Hvis det IKKE er cuisine-knappen, skal dropdown lukkes
		if (this.id !== "cuisine_button") {
			const cuisineDropdown = document.querySelector(".categories_flex_mini");
			// Kontroller om dropdown eksisterer og luk den
			if (cuisineDropdown) {
				cuisineDropdown.style.display = "none";
			}
		}
	});
});

function getData() {
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			allRecipes = data.recipes; // Gemmer alle opskrifter
			showRecipes(allRecipes);
		});
}

function showRecipes(recipes) {
	console.log("showRecipes kaldt med:", recipes);

	const markup = recipes
		.slice(0, 20)
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
