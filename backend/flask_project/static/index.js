window.onload = startupFunction;

function startupFunction() {
    let searchbar = document.querySelector("#search");
    if (searchbar != null){
      searchbar.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
            //checks whether the pressed key is "Enter"
            search(e.target.value);
        }
      });
    }
    let star_icons = document.querySelectorAll(".rating-icon");
    let star_value = document.getElementById("star_value");
    star_icons.forEach((button) => {
      button.addEventListener("click", (e) => {
        icon_value = e.target.getAttribute("value");
        star_unclicked = e.target.classList.contains("fa-regular");
        if (star_unclicked) {
          star_value.setAttribute("value", icon_value);
          for (let i = 0; i < icon_value; i++) {
            star_icons[i].classList.remove("fa-regular");
            star_icons[i].classList.add("fa-solid");
          }
        } else {
          star_value.setAttribute("value", "0");
          star_icons.forEach((button) => {
            button.classList.add("fa-regular");
            button.classList.remove("fa-solid");
          });
        }
      });
    });
    let rating_div_value = document.querySelector(".rating");
    let div = document.querySelectorAll(".rating > .fa-star");
    div.forEach((star) => {
      if (star.getAttribute("value") <= rating_div_value.getAttribute("value")){
        star.classList.add("fa-regular");
        star.classList.add("fa-solid");
      }
    })
}

function deleteReview(recipe_id) {
    fetch("/delete-review", {
      method: "POST",
      body: JSON.stringify({ recipe_id: recipe_id }),
    }).then((_res) => {
      window.location.href = "/recipe/" + recipe_id;
    });
}

function favoriteToggle(id) {
    button = event.target;
    // Send a POST request to the server to toggle the favorite status
    fetch("/favoriteToggle", {
        method: "POST",
        body: JSON.stringify({ recipe_id: id }),
    }).then((response) => {
        return response.json(); // Parse the JSON response
    }).then((data) => {
        // Call the handleSaveButton function to update the save button text
        handleSaveButton((favorited = data.favorited), (button = button));
    });
}

// Function to update the save button text based on the favorite status
function handleSaveButton(favorited, button) {
    button.innerHTML = favorited ? "Saved" : "Save Recipe";
    // Store the current state of the recipe container in the browser's history
}
function render_recipes(recipes) {
    // Remove existing recipe cards from the container

    // Select the recipe container element
    let container = document.querySelector(".recipe-container");
    while (container.firstChild) {
    container.removeChild(container.firstChild);
}
    // Iterate over the recipes and generate HTML for each recipe card
    if(recipes.length > 0){
      recipes.forEach((recipe) => {
          container.innerHTML =
          container.innerHTML +
      
          `
          <div class="recipe-card">
              <img
              src="${recipe.image}"
              alt="chicken-and-waffle"
              />
              <div class="recipe-details" date-category="">
              <ul>
                  <li>Time: ${recipe.minutes} minutes</li>
                  <li>Difficulty: ${recipe.difficulty}</li>
                  <li>Category: ${recipe.category}</li>
                  <li>Calories: ${recipe.calories}</li>
              </ul>
              </div>
              <p class="recipe-description">${recipe.name}</p>
              <button class="save-button ${
              recipe.favorited ? "favorited" : ""
              }" onClick="favoriteToggle(${recipe.id})">${
              recipe.favorited ? "Saved" : "Save Recipe"
          }</button>
              <button class="info-button" onClick="window.location.href='/recipe/${recipe.id}'">More Info</button>
          </div>`;
      });
    }
    else{
      container.innerHTML = '<p class = "error-message">No results found</p>'
    }
}

