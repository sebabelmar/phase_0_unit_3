## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.


#### add
<code>git add file.rb</code>   
Inserts a file into the futere "commit bucket" aka. Stage or Index.
It does not add a file to the repo. Instead brings git's attention to the file an leaves it ready to be commited.

<code>git remote add origin https://github.com/username/myproject.git </code>  
It can be use to reroute the git conection to github by adding a remote or remote upstream depenfing if we want to point our local repository to our remote version or the original version of it.

#### branch
<code>git branch branch_name</code>  
Creates a new brach, it has to include the name of the branch (no quatations)
It makes files accesible on an other point in history.

#### checkout
<code>git checkout branch_name</code>  
Copy files form history (or stage) to the working directory WHEN filename is given. "Fix local mistakes with previuos files"
And to optionally switch branches WHEN filename is not given. Activates a branch. "Delete mos recent files, safe old good files new local scenario"
Detached HEAD, WHEN filename and reference is not a branch.

#### clone
<code>git clone https://github.com/username/I_want_this_project.git</code>  
Makes a copy or clone of a repository into the current directory in terminal

#### commit
<code>git commit -m 'first commit'</code>  
Creates a new commit object using the files from the stage and sets the parent to the current commit. It then points the current branch to this new commit.
Working Directory --add--> Stage(Index) --commit--> Commit Object(History)

#### fetch
<code>git fetch upstream</code>  
Retrieves any commits from the target remote that you do not have and stores them in your local repository. However, it does not merge them with your current branch.

#### log
<code>git log</code>  
Prints a log with all commit objects and their individual metadata.

#### merge

#### pull
<!-- Your defnition here -->

#### push
<!-- Your defnition here -->

#### reset
<!-- Your defnition here -->

#### rm
<!-- Your defnition here -->

#### status


## Release 3: Git Workflow

- Push files to a remote repository
- Fetch changes
- Commit locally