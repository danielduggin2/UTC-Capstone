# UTC-Capstone

To get started...
1. Fork the directory (fork option above). This will clone the repo to your local machine and put you in the develop branch. This is important for working on new features (user auth, UI overhaul, etc.). This makes it so we do not overlap code and lose any progress.
2. Once you have clones the repo and opened it on your local machine, you will need to set up upstream. To do so, first run this command in your vscode terminal: git remote -v.
3. This should give you two lines that read the following: origin  https://github.com/yourName/UTC-Capstone.git (fetch) and https://github.com/yourName/UTC-Capstone.git (push)
4. If you opened the clones repo via Github Desktop, running git remote -v may give you the above lines plus two more that have "upstream" in front of them. If so, ignore remaining steps.
5. Next, run this command: git remote add upstream git@github.com:danielduggin2/UTC-Capstone.git
6. Run git remote -v again and you should now have 4 lines similar to the two above.
7. Now upstream is set up. In the future, whenver you beign to work, run git pull upstream develop to get new changes.

Here are some useful terminal commands for upstream
1. git pull upstream develop - pull updated code
2. git checkout -b branchName - creates a new branch. This is useful in big changes (ex: git checkout -b authentication)
3. git checkout branchName - navigate to a branch (ex: git checkout authentication)
4. git stash - If you have changes made and someone else just made changes, you will want to stash your code so when you pull the changes, you will not lose your work. 
5. git stash pop - implements the changes you were previously working on
6. git stash clear - clears the stash if you do not want to use that code

Read by Andres Cavalie
Read by Halle Olson
Read by Brianna Black