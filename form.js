document.addEventListener("DOMContentLoaded", () => {
	const addButtons = document.querySelectorAll(".add-button"); // Henter alle "add-button"-knapper

	if (addButtons.length > 0) {
		addButtons[0].addEventListener("click", () => addField("ingredients", "Enter ingredient", addButtons[0]));
		addButtons[1].addEventListener("click", () => addField("instructions", "Next step...", addButtons[1], true));
	}

	function addField(name, placeholder, addButton, isTextarea = false) {
		const wrapper = document.createElement("div"); // Wrapper til input + knap
		wrapper.classList.add("input-wrapper");

		const field = document.createElement(isTextarea ? "textarea" : "input");
		field.name = name;
		field.placeholder = placeholder;
		field.required = true;

		if (!isTextarea) {
			field.type = "text";
		}

		const removeButton = document.createElement("button");
		removeButton.type = "button";
		removeButton.innerHTML = "<span>-</span>"; // Minus-symbol
		removeButton.classList.add("remove-button");

		removeButton.addEventListener("click", () => {
			wrapper.remove(); // Fjerner wrapperen (og dermed både input + knap)
		});

		wrapper.appendChild(field);
		wrapper.appendChild(removeButton);
		addButton.before(wrapper); // Tilføjer før "Add"-knappen
	}
});
