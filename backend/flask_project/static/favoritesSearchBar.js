 // Function to handle the search functionality
 function search() {
   // Get the search term from the input field
   search_term = document.querySelector("#search");
   difficulty = document.querySelector("#difficultySelect");
   category = document.querySelector("#categorySelect");
   // Make a GET request to the server with the search term as a query parameter
   fetch(
     "/favorites?" +
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
       // Store the current state of the recipe container in the browser's history

     });
 }