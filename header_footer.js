document.addEventListener("DOMContentLoaded", () => {
	console.log("DOM er indlæst - JavaScript kører!");

	// Funktion til at indlæse en ekstern HTML-fil
	function loadHTML(url, elementId, callback) {
		fetch(url) // Hent HTML-filen
			.then((response) => response.text()) // Konverter til tekst
			.then((data) => {
				// Indsæt HTML-indholdet i det angivne element
				document.getElementById(elementId).innerHTML = data;
				if (callback) callback(); // Kald callback, når HTML'en er indsat
			})
			.catch((error) => console.error("Fejl ved indlæsning af HTML:", error));
	}

	// Indlæs header.html og footer.html
	loadHTML("header.html", "header-placeholder", () => {
		addActiveClass(); // Tilføj active-klassen
		setupBurgerMenu(); // Opsæt burger-menuen)
	});
	loadHTML("footer.html", "footer-placeholder");

	// Funktion til at tilføje "active"-klassen til det aktive link
	function addActiveClass() {
		const navLinks = document.querySelectorAll(".headerul li a, .burgerheaderul li a");
		console.log(`Antal links fundet: ${navLinks.length}`);
		navLinks.forEach((link) => {
			console.log(`Link pathname: ${link.pathname}`);
			console.log(`Aktuel side: ${window.location.pathname}`);
			if (link.pathname === window.location.pathname) {
				console.log(`Match fundet: ${link.href}`);
				link.classList.add("active");
			}
		});
	}

	// Funktion til at opsætte burger-menuen
	function setupBurgerMenu() {
		const burger = document.querySelector(".burger");
		const burgerMenu = document.querySelector(".burgerheaderul");

		if (burger && burgerMenu) {
			burger.addEventListener("click", () => {
				burger.classList.toggle("active");
				burgerMenu.classList.toggle("active");
			});
		} else {
			console.warn("Burger-menu ikke fundet!");
		}
	}
});
