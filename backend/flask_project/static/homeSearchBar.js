function search() {
// Get the search term from the input field
search_term = document.querySelector("#search");
difficulty = document.querySelector("#difficultySelect");
category = document.querySelector("#categorySelect");
// Make a GET request to the server with the search term as a query parameter
fetch(
    "/home?" +
    new URLSearchParams({
        search: search_term.value,
        category: category.value,
        difficulty: difficulty.value,
    }),
    {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
    }
)
    .then((response) => response.json()) // Parse the JSON response
    .then((data) => {
    // Call the render_recipes function to display the search results
    render_recipes(data.recipes);
    });
}