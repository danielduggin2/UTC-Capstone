from flask import Blueprint,render_template,redirect,url_for,request,session,jsonify,flash
from flask_login import login_required, current_user
views = Blueprint("views", __name__)
from flask_project.models import Recipe, Review, User
from flask_project import db
import json
from sqlalchemy import and_, or_, select
from sqlalchemy.sql import func
import os




# START: Define a route for the HTML pages
@views.route("/")
@views.route("/home", methods=["GET", "POST"])
@login_required
def home():
    recipe_query = db.session.query(Recipe)
    if request.content_type:
        search = request.args.get("search")
        category = request.args.get("category")
        difficulty = request.args.get("difficulty")

        if search:
            search = "%{}%".format(search)
            recipe_query = recipe_query.filter(Recipe.name.like(search))

        if category:
            recipe_query = recipe_query.filter(Recipe.category_id == category)

        if difficulty:
            recipe_query = recipe_query.filter(Recipe.difficulty_id == difficulty)

    recipe_query = recipe_query.all()
    # create dictionary ready to store array of recipes
    recipe_json = {"recipes": []}

    # iterate through recipe_query, and assign db values to dictionary values for frontend
    # each column name defined in the models is the column name in SQL
    for recipe in recipe_query:
        favorited = "true" if (current_user in recipe.users_who_favorited) else None
        thisdict = {
            "id": recipe.id,
            "user_id": recipe.user_id,
            "name": recipe.name,
            "instructions": recipe.instructions,
            "hours": recipe.hours_to_make,
            "minutes": recipe.minutes_to_make,
            "calories": recipe.calories,
            "description": recipe.description,
            "image": recipe.image,
            "ingredients": recipe.ingredients,
            "category_id": recipe.category_id,
            "favorited": favorited,
            "category": recipe.category.name,
            "difficulty": recipe.difficulty.difficulty,
        }
        # append dicionary to list in recipes dictionary
        recipe_json["recipes"].append(thisdict)

    if request.content_type:
        return jsonify(recipe_json)
    return render_template("home.html", recipes=recipe_json)


# <int:recipe_id> passing integer to this route and the name is integer_id
@views.route("/edit/<int:recipe_id>", methods=["GET", "POST"])
@login_required
def recipe_edit(recipe_id):
    recipe = Recipe.query.get(recipe_id)
    if recipe.user_id == current_user.id:
        if request.method == "POST":
            name = request.form.get("name")
            instructions = request.form.get("instructions")
            hours_to_make = request.form.get("hours_to_make")
            minutes_to_make = request.form.get("minutes_to_make")
            calories = request.form.get("calories")
            description = request.form.get("description")
            image = request.form.get("image")
            ingredients = request.form.get("ingredients")
            category_id = request.form.get("category_id")
            difficulty_id = request.form.get("difficulty_id")

            db.session.query(Recipe).filter(Recipe.id == recipe_id).update(
                {
                    "name": name,
                    "instructions": instructions,
                    "hours_to_make": hours_to_make,
                    "minutes_to_make": minutes_to_make,
                    "calories": calories,
                    "description": description,
                    "image": image,
                    "ingredients": ingredients,
                    "category_id": category_id,
                    "difficulty_id": difficulty_id,
                }
            )
            db.session.commit()

            return redirect(url_for("views.recipe", recipe_id=recipe_id))

        # create dictionary ready to store array of recipes
        # iterate through recipe_query, and assign db values to dictionary values for frontend
        # each column name defined in the models is the column name in SQL
        recipe = {
            "id": recipe.id,
            "user_id": recipe.user_id,
            "username": recipe.user.username,
            "name": recipe.name,
            "instructions": recipe.instructions,
            "hours": recipe.hours_to_make,
            "minutes": recipe.minutes_to_make,
            "calories": recipe.calories,
            "description": recipe.description,
            "image": recipe.image,
            "ingredients": recipe.ingredients,
            "category_id": recipe.category_id,
            "difficulty_id": recipe.difficulty_id,
            "category": recipe.category.name,
            "difficulty": recipe.difficulty.difficulty,
        }
        return render_template("edit.html", recipe=recipe)
    else:
        return redirect(url_for("views.recipe", recipe_id=recipe_id))
    
@views.route("/delete/<int:recipe_id>", methods=["GET"])
@login_required
def recipe_delete(recipe_id):
    recipe = Recipe.query.get(recipe_id)
    db.session.delete(recipe)
    db.session.commit()
    return redirect(url_for("views.profile"))
    
import json

@views.route("/recipe/<int:recipe_id>", methods=["GET", "POST"])
@login_required
def recipe(recipe_id):
    recipe_obj = Recipe.query.get(recipe_id)  # Use a different name like 'recipe_obj'
    reviews = recipe_obj.reviews

    if recipe_obj.ingredients:
        ingredients_list = recipe_obj.ingredients.split('¦')
    else:
        ingredients_list = []

    if recipe_obj.instructions:
        instructions_list = recipe_obj.instructions.split('¦')
    else:
        instructions_list = []
    print(ingredients_list)
    print(instructions_list)
    rating_float = (
        Recipe.query.with_entities(func.avg(Review.stars).label("average"))
        .filter(Review.recipe_id == recipe_id)
        .scalar()
    )
    rating = round(rating_float) if rating_float else 0
    favorited = "true" if current_user in recipe_obj.users_who_favorited else None
    # Create a dictionary with recipe data
    recipe_data = {
        "id": recipe_obj.id,
        "user_id": recipe_obj.user_id,
        "username": recipe_obj.user.username,
        "name": recipe_obj.name,
        "instructions": instructions_list,
        "hours": recipe_obj.hours_to_make,
        "minutes": recipe_obj.minutes_to_make,
        "calories": recipe_obj.calories,
        "description": recipe_obj.description,
        "image": recipe_obj.image,
        "ingredients": ingredients_list,  # Use the ingredients_list here
        "category_id": recipe_obj.category_id,
        "favorited": favorited,
        "category": recipe_obj.category.name,
        "difficulty": recipe_obj.difficulty.difficulty,
        "rating": rating,
    }

    # Prepare review data
    review_json = {"reviews": []}
    for review in reviews:
        user = User.query.get(review.user_id)
        review_dict = {
            "user_id": review.user_id,
            "username": user.username,
            "stars": review.stars,
            "review": review.review,
        }
        review_json["reviews"].append(review_dict)
        
    # Pass the recipe_data dictionary to the template
    return render_template("recipe.html", recipe=recipe_data,reviews=review_json)






# Oct 25 - Added Route for About Page
@views.route("/about")
@login_required
def about():
    return render_template("about.html")


@views.route("/review", methods=["GET", "POST"])
@login_required
def review():
    if request.method == "POST":
        recipe_id = request.form.get("recipe_id")
        star_value = request.form.get("star_value")
        review = request.form.get("review")
        existing_review = (
            db.session.query(Review)
            .filter(
                and_(Review.recipe_id == recipe_id, Review.user_id == current_user.id)
            )
            .all()
        )

        if not (existing_review):
            new_review = Review(
                recipe_id=recipe_id,
                user_id=current_user.id,
                stars=star_value,
                review=review,
            )
            db.session.add(new_review)
            db.session.commit()
        else:
            flash('You can only write one review per Recipe!', category='error')
    return redirect(url_for("views.recipe", recipe_id=recipe_id))


@views.route("/delete-review", methods=["POST"])
def delete_review():
    json_data = json.loads(request.data)
    recipe_id = json_data["recipe_id"]

    review = Review.query.get((recipe_id, current_user.id))
    if review:
        db.session.delete(review)
        db.session.commit()
    return jsonify({})


# route for favorites - ANDRES CHECK THIS CODE PLEASE
@views.route("/favorites")
@login_required
def favorites():
    # recipe_query = current_user.favorites
    recipe_query = select(Recipe).join(User.favorites).where(User.id == current_user.id)

    if request.content_type:
        search = request.args.get("search")
        category = request.args.get("category")
        difficulty = request.args.get("difficulty")

        if search:
            recipe_query = recipe_query.where(Recipe.name.like(f"%{search}%"))

        if category:
            recipe_query = recipe_query.where(Recipe.category_id == category)

        if difficulty:
            recipe_query = recipe_query.where(Recipe.difficulty_id == difficulty)

    recipe_query = db.session.execute(recipe_query).scalars()

    # create dictionary ready to store array of recipes
    recipe_json = {"recipes": []}
    # iterate through recipe_query, and assign db values to dictionary values for frontend
    # each column name defined in the models is the column name in SQL
    for recipe in recipe_query:
        favorited = "true" if (current_user in recipe.users_who_favorited) else None
        thisdict = {
            "id": recipe.id,
            "user_id": recipe.user_id,
            "name": recipe.name,
            "instructions": recipe.instructions,
            "hours": recipe.hours_to_make,
            "minutes": recipe.minutes_to_make,
            "calories": recipe.calories,
            "description": recipe.description,
            "image": recipe.image,
            "ingredients": recipe.ingredients,
            "category_id": recipe.category_id,
            "favorited": favorited,
            "category": recipe.category.name,
            "difficulty": recipe.difficulty.difficulty,
        }
        # append dicionary to list in recipes dictionary
        recipe_json["recipes"].append(thisdict)
    if request.content_type:
        return jsonify(recipe_json)
    return render_template("favorites.html", recipes=recipe_json)


# route for create
@views.route("/create", methods=["GET", "POST"])
@login_required
def create():
    if request.method == "POST":
        # get form data
        name = request.form.get("name")
        instructions = request.form.get("instructions")
        hours_to_make = request.form.get("hours_to_make")
        minutes_to_make = request.form.get("minutes_to_make")
        calories = request.form.get("calories")
        description = request.form.get("description")
        image = request.form.get("image")
        ingredients_list = request.form.getlist("ingredients[]")
        category_id = request.form.get("category_id")
        difficulty_id = request.form.get("difficulty_id")
        img = request.files.get("img")
        img.save(os.path.join("flask_project/static/Images/",img.filename))
        # Use '¦' as the delimiter to join ingredients
        ingredients_string = '¦'.join(ingredients_list)
        # split the list of instructions
        instruction_list = instructions.split("|")
        instructions_string = "|".join(instruction_list)

        # creating instance of Recipe and passing parameters
        new_recipe = Recipe(
            user_id=current_user.id,
            name=name,
            instructions=instructions_string,
            hours_to_make=hours_to_make,
            minutes_to_make=minutes_to_make,
            calories=calories,
            description=description,
            image="../static/Images/"+img.filename,
            ingredients=ingredients_string,  # Updated ingredients string
            category_id=category_id,
            difficulty_id=difficulty_id,
        )
        # inserts this row, becomes part of database
        db.session.add(new_recipe)
        db.session.commit()
        return redirect(url_for("views.recipe", recipe_id=new_recipe.id))
    return render_template("create.html")



# route for profile (profile icon is the button for it)
@views.route("/profile")
@login_required
def profile():
    recipe_query = select(Recipe).where(Recipe.user_id == current_user.id)

    recipe_query = db.session.execute(recipe_query).scalars()

    recipe_json = {"recipes": []}
    # iterate through recipe_query, and assign db values to dictionary values for frontend
    # each column name defined in the models is the column name in SQL
    for recipe in recipe_query:
        favorited = "true" if (current_user in recipe.users_who_favorited) else None
        thisdict = {
            "id": recipe.id,
            "user_id": recipe.user_id,
            "name": recipe.name,
            "instructions": recipe.instructions,
            "hours": recipe.hours_to_make,
            "minutes": recipe.minutes_to_make,
            "calories": recipe.calories,
            "description": recipe.description,
            "image": recipe.image,
            "ingredients": recipe.ingredients,
            "category_id": recipe.category_id,
            "favorited": favorited,
            "category": recipe.category.name,
            "difficulty": recipe.difficulty.difficulty,
        }
        # append dicionary to list in recipes dictionary
        recipe_json["recipes"].append(thisdict)

    return render_template("profile.html", user=current_user, recipes=recipe_json )


# route for profile (profile icon is the button for it)
@views.route("/favoriteToggle", methods=["GET", "POST"])
@login_required
def favoriteToggle():
        # Extracting recipe_id from incoming JSON data
    recipe_id = json.loads(request.data)["recipe_id"]

    # Query the Recipe model using the recipe_id
    recipe = Recipe.query.get(recipe_id)
        # Flag indicating whether the recipe is favorited or unfavorited
    favorited = 1
        # Check if the recipe is in the current user's favorites
    if recipe in current_user.favorites:
                # If already favorited, remove it from favorites
        favorited = 0
        current_user.favorites.pop(current_user.favorites.index(recipe))
    else:
                # If not favorited, add it to favorites
        current_user.favorites.append(recipe)
        db.session.add(recipe)
            # Commit changes to the database
    db.session.commit()
        # Return JSON response indicating the new favorite status
    return jsonify({"favorited": favorited})
