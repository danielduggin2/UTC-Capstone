
# Culinary Canvas Install Dev Server Instructions

1. Install required python packages from the requirements.txt file.
Navigate to the flask_project directory and run the command: 

pip install -r requirements.txt

2. Because Werkzeug is required in this project, but the latest version bundled with flask and flask_login is not compatible, you must install Werkzeug on its on. To do this, run the command:

pip install Werkzeug==2.3.0

3. To Run the project(and initialize database if not already initialized), navigate to the folder containing flask_project, likely CulinaryCanvasSourceCode, and run this command:
flask --app flask_project run --debug

4. At this point, the instance folder in the parent directory, likely CulinaryCanvasSourceCode, should contain a file called CulinaryCanvas.db. If you have just initialized the database for the first time, you will need to run the included internal/defaultState.sql file on your CulinaryCanvas.db file.

5. After running this script using a tool such as dbeaver, the database should be populated with some default recipes and a default user.

6. Now, you can rerun the command from step 3, and you should now be free to sign up, browse, favorite, and create your own recipes.


