document.addEventListener("DOMContentLoaded", () => {
	const peopleButtons = document.querySelectorAll(".valgmulighed1 button");
	const recipesButtons = document.querySelectorAll(".valgmulighed2 button");

	const pricePerPortion = 47.5; // Oprindelig pris per portion
	const discountPerPortion = 31.25; // Rabatteret pris per portion
	const deliveryFee = 49.0; // Oprindelig leveringspris
	const discountedDelivery = 0; // Gratis levering efter rabat

	let selectedPeople = 4; // Default
	let selectedRecipes = 3; // Default

	function updatePriceOverview() {
		const totalMeals = selectedPeople * selectedRecipes;
		const originalPrice = totalMeals * pricePerPortion;
		const discountedPrice = totalMeals * discountPerPortion;

		document.querySelector(".info p").textContent = `${selectedRecipes} meals for ${selectedPeople} people per week`;
		document.querySelector(".info p:nth-child(2)").textContent = `${totalMeals} servings in total`;
		document.querySelectorAll(".info1 p:nth-child(2)")[0].textContent = `${originalPrice.toFixed(2)} kr.`;
		document.querySelectorAll(".info1 p:nth-child(2)")[1].innerHTML = `<span style="text-decoration-line: line-through">${pricePerPortion.toFixed(
			2
		)} kr.</span> <span style="color: var(--primary)">${discountPerPortion.toFixed(2)} kr.</span>`;
		document.querySelectorAll(".info1 p:nth-child(2)")[2].innerHTML = `<span style="text-decoration-line: line-through">${deliveryFee.toFixed(
			2
		)} kr.</span> <span style="color: var(--primary)">FREE</span>`;
		document.querySelectorAll(".info1 p:nth-child(2)")[3].innerHTML = `<span style="text-decoration-line: line-through">${(
			originalPrice + deliveryFee
		).toFixed(2)} kr.</span> <span style="color: var(--primary)">${(discountedPrice + discountedDelivery).toFixed(2)} kr.</span>`;
	}

	// Event listeners til at opdatere antal personer
	peopleButtons.forEach((button) => {
		button.addEventListener("click", () => {
			selectedPeople = parseInt(button.textContent);
			updatePriceOverview();
			setActiveClass(peopleButtons, selectedPeople);
		});
	});

	// Event listeners til at opdatere antal opskrifter
	recipesButtons.forEach((button) => {
		button.addEventListener("click", () => {
			selectedRecipes = parseInt(button.textContent);
			updatePriceOverview();
			setActiveClass(recipesButtons, selectedRecipes);
		});
	});

	function setActiveClass(buttons, selectedValue) {
		buttons.forEach((button) => {
			if (parseInt(button.textContent) === selectedValue) {
				button.classList.add("active");
			} else {
				button.classList.remove("active");
			}
		});
	}

	// Kør første opdatering ved load
	updatePriceOverview();
	setActiveClass(peopleButtons, selectedPeople);
	setActiveClass(recipesButtons, selectedRecipes);

	const cuisineButtons = document.querySelectorAll(".favknapper button");

	cuisineButtons.forEach((button) => {
		button.addEventListener("click", () => {
			button.classList.toggle("active"); // Tilføjer eller fjerner 'active' klassen
		});
	});
});
