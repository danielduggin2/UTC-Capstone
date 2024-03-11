import json
import os

# Get the Flask app's working directory
app_dir = os.path.dirname(os.path.abspath(__file__))

# Construct the absolute path to the 'recipe.json' file
json_file_path = os.path.join(app_dir, "recipe.json")

# Construct the absolute path to the 'defaultState.sql' file
sql_file_path = os.path.join(app_dir, "defaultState.sql")

# Open json file
recipe_json = open(json_file_path, "r").read()

# Open sql file
f = open(sql_file_path, "w", encoding="utf-8")

# Mapping dictionaries for difficulty levels and categories
difficulty_mapping = {
    "beginner": 1,
    "intermediate": 2,
    "advanced": 3,
}

category_mapping = {
    "breakfast": 1,
    "lunch": 2,
    "dinner": 3,
}

# Initialize the string with the beginning of an SQL INSERT statement
script_string = """
--INSERTING USER
INSERT INTO "user"
(id, username, email, password, first_name, last_name)
VALUES(1, 'admin', 'admin1@gmail.com', 'sha256$oBgJRJIajQTsgjRV$eeb764ccce2678b3788987258307f1f552b8e4b19c6c75003302bfe3f8a43c1f', 'Admin', 'User');

--INSERT CATEGORIES
INSERT INTO category (id, name) VALUES(1, 'Breakfast');
INSERT INTO category (id, name) VALUES(2, 'Lunch');
INSERT INTO category (id, name) VALUES(3, 'Dinner');

--INSERT DIFFICULTIES
INSERT INTO difficulty (id, difficulty) VALUES(1, 'Beginner');
INSERT INTO difficulty (id, difficulty) VALUES(2, 'Intermediate');
INSERT INTO difficulty (id, difficulty) VALUES(3, 'Advanced');

INSERT INTO recipe (user_id, name, instructions, hours_to_make, minutes_to_make, calories, description, image, ingredients, category_id, difficulty_id)
VALUES 
"""

# Iterate through all recipes in json
for i, recipe in enumerate(json.loads(recipe_json)["recipes"]):
    # Create a string delimited by ¦ from the array of instructions
    instructions_string = "¦".join(recipe["instructions"])

    # Create a string delimited by ¦ from the array of ingredients
    ingredients_string = "¦".join(recipe["ingredients"])

    # Map difficulty level and category to difficulty_id and category_id
    difficulty_id = str(difficulty_mapping.get(recipe["difficulty"].lower(), 1))
    category_id = str(category_mapping.get(recipe["category"].lower(), 1))

    # Extract time and calories
    time_to_make = int("".join(filter(str.isdigit, recipe.get("time", "0"))))
    calories = int("".join(filter(str.isdigit, str(recipe.get("calories", "0")))))

    # Formatted string to put JSON values in the VALUES part of the INSERT statement
    script_string += f'({1},"{recipe["recipe_name"]}","{instructions_string}",{0},{time_to_make},{calories},"{recipe["description"]}","{recipe["image"]}","{ingredients_string}",{category_id},{difficulty_id})'

    # Insert ";" if the last recipe, "," else
    script_string += ",\n" if i < len(json.loads(recipe_json)["recipes"]) - 1 else ";\n"

# Write to file
f.write(script_string)
