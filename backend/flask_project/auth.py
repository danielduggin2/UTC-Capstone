# Import necessary modules and classes
from flask import Blueprint, render_template, request, flash, redirect, url_for
from flask_project import db
from flask_project.models import User
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user,login_required, logout_user, current_user



# Create a Blueprint named "auth" to organize authentication-related routes
auth = Blueprint("auth", __name__)


# Route for handling user login
@auth.route('/login', methods=['GET','POST'])
def login():
    if request.method == 'POST':
        # Get the username (email) and password from the submitted form
        email = request.form.get('email')
        password = request.form.get('password')
        
        # Query the database for a user with the provided email
        user = User.query.filter_by(email=email).first()
        if user:
            if check_password_hash(user.password, password):
                flash('Logged in successfully!', category='success') #commented out all these flash lines for now!!!
                login_user(user, remember=True)
                return redirect(url_for('views.home'))
            else:
                flash('Incorrect password, try again.', category='error')
        else:
            flash('Email does not exist', category='error')
    return render_template("login.html", user=current_user)

@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('auth.login'))

@auth.route('/signup', methods=['GET','POST'])
def sign_up():
    print(request.form)
    if request.method == 'POST':
        # Get form field values
        first_name=request.form.get('first_name')
        last_name=request.form.get('last_name')
        username_form=request.form.get('username')
        email=request.form.get('email')
        password=request.form.get('password')
        confirm_password=request.form.get('confirm_password')
        
        # Query the database to check if a user with the provided email or username already exists
        user_name = User.query.filter_by(username=username_form).first()
        user_email = User.query.filter_by(email=email).first()


        if user_email:
            flash('Email already exists', category='error')
        elif user_name:
            flash('Username is already taken.', category='error')
        elif len(username_form) < 4:
            flash('Username must be greater than 3 characters.', category='error')
        elif len(email) < 4:
            flash('Email must be greater than 3 characters.', category='error')
        elif len(first_name) < 2:
            flash('Name must be greater than 1 character.', category='error')
        elif password != confirm_password:
             flash('Passwords don\'t match', category='error')
        elif len(password) < 7:
             flash('Password must be at least 7 characters.', category='error')
        else:
            #add user to db
            new_user = User(email=email,first_name=first_name,last_name=last_name, password=generate_password_hash(password, method='sha256'),username=username_form)
            db.session.add(new_user)
            db.session.commit()
            # Log in the new user
            login_user(new_user, remember=True)
            flash('Account Created!', category='success')
            return redirect(url_for('views.home'))
        
            
    return render_template("signup.html", user=current_user)
