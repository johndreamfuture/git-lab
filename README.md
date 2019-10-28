### Git Group exercise

# Group Git

## [Git Docs](https://www.git-scm.com/docs)

Once settled in your groups decide who will be the Git Czar
*********
### Git Czar does:

1. On GitHub(personal GitHub **NOT** Enterprise) make a project repo called `git-group-practice`. Make it public and initialize a README).

2. Share the git repo link with your team in slack.

3. In Settings, under Collaborators, add your team members.

4. Your team members should have received an invitation to collaborate via email.

5. **Clone** the repo to your local machine. **Do not fork.** `cd` into the `git-group-practice` directory.
 
 * You as the Git Czar, switch to a new branch `dev`

```
➜  git-group-practice:(master) git checkout -b dev
Switched to a new branch 'dev'
```

 * Make a change to the README.md file, add, commit and push to the remote `dev`
 
```
➜  git-group-practice git:(dev) git add .
➜  git-group-practice git:(dev) ✗ git commit -m "dev"
[dev d72b270] dev
 1 file changed, 3 insertions(+), 1 deletion(-)
➜  git-group-practice git:(dev) git push origin dev 
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Writing objects: 100% (3/3), 271 bytes | 135.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
remote: 
remote: Create a pull request for 'dev' on GitHub by visiting
remote:      https://github.com/svetlasyrimis/testing/pull/new/dev
remote: 
To https://github.com/svetlasyrimis/testing.git
 * [new branch]      dev -> dev
➜  testing git:(dev)
```
If you go to Github, you should see the following: 

![](screenshot-dev.png)

You can continue and merge `dev` branch into `master` or you can skip ahead next two bullet points.

 * Next, click on `Compare & pull request` on the `dev` branch you just pushed.

 * After creating your pull request, you should see:

![](screenshot-dev2.png)

Now that you have a remote `dev` branch let's go ahead and set it as the **default** branch of our repository.


**The default branch is considered the base branch in your repository, against which all pull requests and code commits are automatically made, unless you specify a different branch.**

[Setting the default branch](https://help.github.com/en/github/administering-a-repository/setting-the-default-branch)

Your default branch is named `master`. However, we suggest using a `dev` branch instead of `master`. If you have admin rights over a repository on GitHub, you can change the default branch on the repository.


6. In Settings, in the left menu, click Branches.

Upadte the `dev` to be the default branch.

![](dev-default.png)


### All members do:

1. **Clone** the repo to your local machine. **Do not fork.** `cd` into the `git-group-practice` directory.

1. Type `git branch -a` to see which branch you are on, as well as, your remotes.

1. Create a branch as yourname-master `git checkout -b yourname-branch`. 
    > (i.e., git checkout -b svetla-branch)

1. Open the `README` in the text editor.

1. Navigate to [Facts Site](https://www.thefactsite.com/) and select a fun and interesting fact of category of your choice. Copy and paste the text into the `README` file. 

1. Check to see that changes were made using `git status`. 

**It should look something like this:**

```
On branch svetla-branch
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
```

7. `git add README.md` for staging and then `git commit -m "add readme"`. **Do Not Push yet.**

8. `git status` at this point will say nothing to commit.


9. Now, let's push to the correct branch `git push origin yourname-branch`

### Git Czar does:
1. On Github, click on the branches button to see the branches from your team.

1. You should see all the branches from the other team members, make sure you have all the branches before moving on. 

### All members do:
- On Github, under the Your Branches section, make a pull request using the new pull request button, base should be set to head and compare will be the yourname branch. 

*OR*

- In the pull request tab, select New Pull Request, and then select base to be master and compare will be the yourname branch. Once confirmed click on Create Pull Request, add a message and click on Merge pull request. Confirm the merge.

### Git Czar does:
1. Go to the pull request tab, select the pull request to work on, confirm the PR. There should be a merge conflict. Click the resolve conflict button.

1. You will see the conflicts page.

1. There are command line instructions and an interface, *we will show you*, we don't recommend doing it this way and stick to using the github UI.

**You should see something like this:**

```
# git-group-morning
<<<<<<< david-branch
const name = 'David Whitlatch'
=======
const name = 'Maddy Rombes';
>>>>>>> master
```

>To see the beginning of the merge conflict in your file, search the file for the conflict marker <<<<<<<. When you open the file in your text editor, you'll see the changes from the HEAD or base branch after the line <<<<<<< HEAD. Next, you'll see =======, which divides your changes from the changes in the other branch, followed by >>>>>>> BRANCH-NAME. source

- At this point, you should see one team members name in the `README` file, the name remaining should be whose pull request was pushed up last.

4. Merge all your pull requests into master.

1. Make your changes, click mark as resolved, and commit the merge and confirm the merge.

### Everyone does:
1. `git checkout master` —— switch to the master branch
1. `git pull origin master` ——— get the changes from the master 
1. `git checkout yourname-branch` ———— to switch your branch
1. `git merge master` ———- to merge master changes into your branch

- Now everyone should see the updated file in their text editor. 

- Confirm your changes are the same as on github enterprise.

1. Switch to master branch, `git checkout master`
1. Delete your remaining branches `git branch -d yourname-branch` [-d or -D ?](https://koukia.ca/delete-a-local-and-a-remote-git-branch-61df0b10d323)

`git log --oneline --decorate --graph --all` to see the history of what we just did. 

