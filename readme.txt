Git is a version control system.
Git is free software.git is a vers
on control system
Last login: Mon Jul 16 15:03:14 on ttys001
repository field.
npm WARN june No README data
npm WARN june No license field.

+ git@0.1.5
added 2 packages in 3.528s
jingjing:~ june$ git help
usage: git [--version] [--help] [-C <path>] [-c name=value]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone      Clone a repository into a new directory
   init       Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add        Add file contents to the index
   mv         Move or rename a file, a directory, or a symlink
   reset      Reset current HEAD to the specified state
   rm         Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect     Use binary search to find the commit that introduced a bug
   grep       Print lines matching a pattern
   log        Show commit logs
   show       Show various types of objects
   status     Show the working tree status

grow, mark and tweak your common history
   branch     List, create, or delete branches
   checkout   Switch branches or restore working tree files
   commit     Record changes to the repository
   diff       Show changes between commits, commit and working tree, etc
   merge      Join two or more development histories together
   rebase     Reapply commits on top of another base tip
   tag        Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch      Download objects and refs from another repository
   pull       Fetch from and integrate with another repository or a local branch
   push       Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
jingjing:~ june$ git
usage: git [--version] [--help] [-C <path>] [-c name=value]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone      Clone a repository into a new directory
   init       Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add        Add file contents to the index
   mv         Move or rename a file, a directory, or a symlink
   reset      Reset current HEAD to the specified state
   rm         Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect     Use binary search to find the commit that introduced a bug
   grep       Print lines matching a pattern
   log        Show commit logs
   show       Show various types of objects
   status     Show the working tree status

grow, mark and tweak your common history
   branch     List, create, or delete branches
   checkout   Switch branches or restore working tree files
   commit     Record changes to the repository
   diff       Show changes between commits, commit and working tree, etc
   merge      Join two or more development histories together
   rebase     Reapply commits on top of another base tip
   tag        Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch      Download objects and refs from another repository
   pull       Fetch from and integrate with another repository or a local branch
   push       Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
jingjing:~ june$ git -v
Unknown option: -v
usage: git [--version] [--help] [-C <path>] [-c name=value]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | --no
-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]
jingjing:~ june$ git --v
Unknown option: --v
usage: git [--version] [--help] [-C <path>] [-c name=value]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]
jingjing:~ june$ git --version
git version 2.15.1 (Apple Git-101)
jingjing:~ june$ --help
-bash: --help: command not found
jingjing:~ june$ git --help
usage: git [--version] [--help] [-C <path>] [-c name=value]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone      Clone a repository into a new directory
   init       Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add        Add file contents to the index
   mv         Move or rename a file, a directory, or a symlink
   reset      Reset current HEAD to the specified state
   rm         Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect     Use binary search to find the commit that introduced a bug
   grep       Print lines matching a pattern
   log        Show commit logs
   show       Show various types of objects
   status     Show the working tree status

grow, mark and tweak your common history
   branch     List, create, or delete branches
   checkout   Switch branches or restore working tree files
   commit     Record changes to the repository
   diff       Show changes between commits, commit and working tree, etc
   merge      Join two or more development histories together
   rebase     Reapply commits on top of another base tip
   tag        Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch      Download objects and refs from another repository
   pull       Fetch from and integrate with another repository or a local branch
   push       Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
jingjing:~ june$ git --v
Unknown option: --v
usage: git [--version] [--help] [-C <path>] [-c name=value]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]
jingjing:~ june$ mkgit learnspace
-bash: mkgit: command not found
jingjing:~ june$ mkdir learnspace
jingjing:~ june$ cd learnspace/
jingjing:learnspace june$ git init
Initialized empty Git repository in /Users/june/learnspace/.git/
jingjing:learnspace june$ git init
Reinitialized existing Git repository in /Users/june/learnspace/.git/
jingjing:learnspace june$ ls -ah
.    ..   .git
jingjing:learnspace june$ mkdir readme.txt
jingjing:learnspace june$ git add readme.txt
jingjing:learnspace june$ git commit -m "一个空的文件 用作测试"
On branch master

Initial commit

Untracked files:
	.DS_Store

nothing added to commit but untracked files present
jingjing:learnspace june$ git commit -m 'zhuzhu'
On branch master

Initial commit

Untracked files:
	.DS_Store

nothing added to commit but untracked files present
jingjing:learnspace june$ touch readme.txt
jingjing:learnspace june$ git add readme.txt
jingjing:learnspace june$ git commit -m 'zhuzhu'
[master (root-commit) b8677e5] zhuzhu
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 readme.txt
jingjing:learnspace june$ git commit -m '提交说明'
On branch master
Untracked files:
	.DS_Store

nothing added to commit but untracked files present
jingjing:learnspace june$ git commit -m '提交说明'
On branch master
Untracked files:
	.DS_Store

nothing added to commit but untracked files present
jingjing:learnspace june$ git commit -m 'submit intro'
On branch master
Untracked files:
	.DS_Store

nothing added to commit but untracked files present
jingjing:learnspace june$ pwd
/Users/june/learnspace
jingjing:learnspace june$ vi readme.txt
jingjing:learnspace june$ vi readme.txt
jingjing:learnspace june$ vi readme.txt

Git is a version control system.
Git is free software.git is a vers
on control system
:wq
free software
:w
:x
:wq
:wq


