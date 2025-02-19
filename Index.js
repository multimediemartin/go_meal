window.addEventListener("load", getData);

let allRecipes = [];
let url = `https://dummyjson.com/recipes?limit=50`;

function getData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      allRecipes = data.recipes;
      renderRecipes();
    });
}

function renderRecipes() {
  const gridContainer = document.querySelector(".grid2_1-1-1");
  gridContainer.innerHTML = allRecipes
    .slice(0, 3)
    .map(
      (recipe) => `
      <div>
        <a class="list_card" href="single_view.html?id=${recipe.id}">
          <img class="list_card_img" src="https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp" alt="picture of dish" />
          <h3 class="list_card_title">${recipe.name}</h3>
          <div class="card_category_grid">
            <h4 class="list_card_category cuisine">${recipe.cuisine}</h4>
            <h4 class="list_card_category difficulty">${recipe.difficulty}</h4>
            <h4 class="list_card_category time">${recipe.prepTimeMinutes} MINUTES</h4>
            <h4 class="list_card_category rating">${recipe.rating} STARS</h4>
          </div>
        </a>
      </div>
      `
    )
    .join("");
}

// function til redirect to listview.html med gældende filter
function applyFilter(filterType, value) {
  window.location.href = `listview.html?${filterType}=${encodeURIComponent(
    value
  )}`;
}

// Cuisine dropdown
document
  .querySelector("#cuisine_button")
  .addEventListener("click", toggleCuisineMenu);

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

    // Lav en knap for hver type
    cuisines.forEach((cuisine) => {
      const btn = document.createElement("button");
      btn.classList.add("mini_button");
      btn.innerText = cuisine;
      btn.addEventListener("click", () => applyFilter("cuisine", cuisine));
      dropdown.appendChild(btn);
    });
  }

  dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
}

// Difficulty filter
document
  .querySelector("#difficulty_button")
  .addEventListener("click", () => applyFilter("difficulty", "Easy"));

// Time sort
document
  .querySelector("#time_button")
  .addEventListener("click", () => applyFilter("sort", "time"));

// Rating sort
document
  .querySelector("#rating_button")
  .addEventListener("click", () => applyFilter("sort", "rating"));

//  <section class="index_top">
//         <div class="grid_1-1-1">
//           <img class="index_img" src="https://cdn.dummyjson.com/recipe-images/11.webp" alt="" />
//           <h1 class="h1_standart">
//             <span>FRESH</span>
//             <span>FOOD</span>
//             <span>FOR</span>
//             <span class="span_red">EVERYONE</span>
//           </h1>
//           <h1 class="h1_highlight">EVERYONE</h1>
//           <div class="button-container">
//             <button class="index_button2">TRY IT OUT</button>
//           </div>
//           <div class="subgrid_1-1-1">
//             <div class="forside_infobox">
//               <h3 class="h3_infobox">FULL CONTROL.</h3>
//               <p>Easily customize your subscription - skip deliveries or adjust to fit your schedule.</p>
//             </div>

//             <div class="forside_infobox">
//               <h3 class="h3_infobox">SKIP THE HASSLE.</h3>
//               <p>Get fresh ingredients delivered to your door and skip the trip to the supermarket.</p>
//             </div>

//             <div class="forside_infobox">
//               <h3 class="h3_infobox">DISCOVER NEW FLAVORS.</h3>
//               <p>Try new dishes, explore unique ingredients, and discover exciting flavors from different cultures.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section class="index_mid">
//         <div class="grid_button">
//           <h2>PICK FROM ANY CATEGORY.</h2>
//           <div class="categories_flex">
//             <div class="categories_buttons">
//               <button id="cuisine_button">CUISINE</button>
//               <button id="difficulty_button">DIFFICULTY</button>
//               <button id="time_button">TIME</button>
//               <button id="rating_button">RATING</button>
//             </div>
//           </div>
//         </div>

//         <div class="grid_2-4-1">
//           <div class="background_box1"></div>
//           <img src="img/image 1.webp" alt="Food bowl" />
//           <div class="p_div">
//             <p>Discover Freshness, Delivered to Your Doorstep. At FreshBite, we bring the best flavors straight to your home.</p>
//             <p>Whether you're a foodie, a busy professional, or someone who loves fresh, high-quality ingredients, our carefully curated food crates are designed to make your meals exciting and effortless.</p>
//           </div>
//         </div>

//         <div class="grid_1">
//           <div>
//             <button class="index_button2">GO to recepies</button>
//           </div>
//         </div>
//       </section>
//       <section class="index_bottom">
//         <div class="grid_1">
//           <h2>EXAMPLES OF WHAT YOU MIGHT LIKE</h2>
//         </div>
//         <!-- opskrifternes opsætning -->
//         <div class="grid2_1-1-1">
//           <div class="list_card">
//             <img class="list_card_img" src="img/food_placeholder.webp" alt="picture of dish" />
//             <h3 class="list_card_title">MEXICAN STREET CORN</h3>
//             <div class="card_category_grid">
//               <h4 class="list_card_category cuisine">MEXICAN</h4>
//               <h4 class="list_card_category difficulty">EASY</h4>
//               <h4 class="list_card_category time">30 MINUTES</h4>
//               <h4 class="list_card_category rating">4.6 STARS</h4>
//             </div>
//           </div>
//           <div class="list_card">
//             <img class="list_card_img" src="img/food_placeholder.webp" alt="picture of dish" />
//             <h3 class="list_card_title">Butter Chicken (Murgh Makhani)</h3>
//             <div class="card_category_grid">
//               <h4 class="list_card_category">MEXICAN</h4>
//               <h4 class="list_card_category">EASY</h4>
//               <h4 class="list_card_category">30 MINUTES</h4>
//               <h4 class="list_card_category">4.6 STARS</h4>
//             </div>
//           </div>
//           <div class="list_card">
//             <img class="list_card_img" src="img/food_placeholder.webp" alt="picture of dish" />
//             <h3 class="list_card_title">MEXICAN STREET CORN</h3>
//             <div class="card_category_grid">
//               <h4 class="list_card_category">MEXICAN</h4>
//               <h4 class="list_card_category">EASY</h4>
//               <h4 class="list_card_category">30 MINUTES</h4>
//               <h4 class="list_card_category">4.6 STARS</h4>
//             </div>
//           </div>
//         </div>
//         <!-- tilføj eventuelt scroll hvis dere er tid -->
//         <div class="background_box2">
//           <div class="grid2_1">
//             <ul>
//               <li class="li_index">Handpicked, premium ingredients</li>
//               <li class="li_index">Seasonal & locally sourced products</li>
//               <li class="li_index">Convenient, eco-friendly packaging</li>
//             </ul>
//           </div>
//         </div>
//       </section>
