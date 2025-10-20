/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import CommitedChanges from 'assets/images/lecture1/commited_changes.png';
import GitBranches from 'assets/images/lecture1/git_branches.png';
import GitCommitImage from 'assets/images/lecture1/git_commit.png';
import GitWorkflowImage from 'assets/images/lecture1/git_workflow.png';
import StagedFilesImage from 'assets/images/lecture1/un_or_staged_files.png';
import WorkflowTreeImage from 'assets/images/lecture1/workflow_tree.png';
import Code from "presentations/Code";
import Divider from "presentations/Divider";
import { Bold, Italic } from 'presentations/Label';
import SimpleLink from "presentations/rows/SimpleLink";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";

const styles = ({ typography }) => ({
  root: {},
})


class WorkingWithGit extends React.Component {
  render() {
    const { classes, section } = this.props
    let workflow = section.children[0]
    let addAndCommit = section.children[1]
    let pushingChanges = section.children[2]
    let branching = section.children[3]
    let updateAndMerge = section.children[4]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography>Here we show an introduction about basic GIT concepts and how to work with it. At this point we are ignoring GitLab! This assumes that you have cloned your repo already and you are at the master branch! Inspired by <SimpleLink href="http://rogerdudler.github.io/git-guide/">http://rogerdudler.github.io/git-guide/</SimpleLink></Typography>
          <Divider />
        </Typography>
        <Typography id={workflow.id} variant={'title'}>
          {workflow.display}
        </Typography>
        <Typography variant='p'>
          In order to understand how to work with GIT we are going to start off by explaining how a git worflow looks like. We are going to first talk about our local repository, that is the code base that is only availably localy at your computer and not in the remote repository (Git Lab repo). The workflow looks like this: 
        </Typography>
        <Typography variant={'p'}>
          <img src={WorkflowTreeImage}></img>
          <Typography variant={'p'}>
            Figure 1. Git Workflow Tree
          </Typography>
        </Typography>
        <Typography variant='p'>
          Here are the explanations:
          <ol>
            <li>Working Dir: The local changes that you are making into the repository (Source tree will visualise them as <Bold>unstaged files</Bold>. These changes only exists at your local computer</li>
            <li>Index (Stage): This is the tree which contains all staged files. You can add files to the Index (Stage) tree by using the <Bold>add</Bold> command of git. In Source Tree these are your <Bold>Staged</Bold> files.</li>
            <li>Head (local branch): This represents the latest state of your commits on the local branch. You can use the <Bold>commit</Bold> command to propose changes to the local branch (still we are doing local changes)</li>
          </ol>
        </Typography>
        <Typography variant={'p'}>
          <img src={StagedFilesImage}></img>
          <Typography variant={'p'}>
            Figure 2. Source Tree Staged and Unstaged files view! (By going at the Commit view):
          </Typography>
        </Typography>
        <Typography variant='p'>
          The following image is another detailed representation of the GIT workflow, together with all the commands that perform changes on different trees:
        </Typography>
        <Typography variant={'p'}>
          <img src={GitWorkflowImage}></img>
        </Typography>
        <Typography id={addAndCommit.id} variant={'title'}>
          {addAndCommit.display}
        </Typography>
        <Typography variant='p'>
          You can propose changes (Add it to the Index/Staging tree) by running the following command:
        </Typography>
        <Code>
          {`git add <filename>`}
        </Code>
        <Typography variant='p'>
          Where the {`<filename>`} is the actual file name that you want to add to index. For example, you did changes at your "page.html" file, you can stage those changes by doing: 
        </Typography>
        <Code>
          {`git add page.html`}
        </Code>
        <Typography variant='p'>
          At Source Tree these are basically your staged files, stage selected file would be the same as running the command above (See Figure 2). 
        </Typography>
        <Typography variant='p'>
          Git shows the same status overview by using the <Bold>status</Bold> command. 
        </Typography>
        <Code>
          {`git status`}
        </Code>
        <Typography variant='p'>
          If you want to Stage All files, or add every file that changed into your Index (Stage tree) you can use the following command (* stands for all):
        </Typography>
        <Code>
          {`git add *`}
        </Code>
        <Typography variant='p'>
          To actually commit these files that you have <Bold>staged</Bold>, use the following command:
        </Typography>
        <Code>
          {`git commit -m "Write your message here, like I've completed task this and that, or changed the name at file etc"`}
        </Code>
        <Typography variant='p'>
          In Source tree you can use the commit button at the commit view, after you have staged your files:
        </Typography>
        <Typography variant={'p'}>
          <img src={GitCommitImage}></img>
        </Typography>
        <Typography variant='p'>
          Now that you have done this, your changes are at the Head of your branch. The Head can either be the same as the remote latest commit, or the latest commits together with the new one you just did. Still these changes are only present at your local computer (not on remote yet). Source Tree will propmt a new Push is available, and the committed changes will be visualised as shown in the following image:
        </Typography>
        <Typography variant={'p'}>
          <img src={CommitedChanges}></img>
        </Typography>
        <Typography id={pushingChanges.id} variant={'title'}>
          {pushingChanges.display}
        </Typography>
        <Typography variant='p'>
          In order to update the state of the branch at the remote repository (your Gitlab repo) and make the changes available online, you have to <Bold>push</Bold> the changes that you have made! That is done using:
        </Typography>
        <Code>
          {`git push origin <branchname>`}
        </Code>
        <Typography variant='p'>
          Where branch name is the name of the branch that you want to push to, like the one that you are currently working at (i.e. "Exercise 1") or lets say master branch.
        </Typography>

        <Typography id={branching.id} variant={'title'}>
          {branching.display}
        </Typography>
        <Typography variant='p'>
          Branches are used to develop features isolated from each other (i.e. exercises and assignments). The master branch is the "default" branch when you create a repository. Use other branches for development and merge them back to the master branch upon completion. In a work environment branches would look like this:
        </Typography>
        <Typography variant={'p'}>
          <img src={GitBranches}></img>
        </Typography>
        <Typography variant='p'>
          For this training program we won't have development, release and hotfixes, but instead we will use only the so called <Bold>feature</Bold> branches where a feature can be an assignment or exercise. Example for an exercise the name of the feature branch would be something like this: <Italic>1-ExerciseName</Italic>, where 1 in this case is the number of the task at the GitLab board followed by the name of the exercise, so that we identify that branch easier!
        </Typography>

        <Typography variant='p'>
          In order to create a new branch we can nammed: "git_branch_demo" and switch to it we can use the following command:
        </Typography>
        <Code>
          {`git checkout -b git_branch_demo`}
        </Code>
        <Typography variant='p'>
          At Source Tree use the branch button to do the same!
        </Typography>
        <Typography variant='p'>
          <Italic>This creates a new branch which is based on your current branch! If you ran this command and you were at the master branch, this will branch off of master!</Italic>
        </Typography>
        <Typography variant='p'>
          The branch that was created is not yet available at the remote repository unless you push it to the remote repository. You can do that by using:
        </Typography>
        <Code>
          {`git push origin git_branch_demo`}
        </Code>
        <Typography variant='p'>
          Now the remote repository has the new branch that you have created without any changes yet. This is the command from the <Bold>{pushingChanges.display}</Bold> section.
        </Typography>
        <Typography variant='p'>
          In order to only switch to another branch you can use the git checkout command without the -b:
        </Typography>
        <Code>
          {`git checkout git_branch_demo`}
        </Code>
        <Typography variant='p'>
          At Source Tree you can just double click a branch to jump to.
        </Typography>
        <Typography variant='p'>
          <Italic>Note: You cannot switch branches if you have unstaged and or staged files that would be overwritten if you switch branch. That is the branch you are trying to get to, has already updates on the files that you have updated at your current branch! First commit the changes or discard them and then proceed!</Italic>
        </Typography>

        <Typography id={updateAndMerge.id} variant={'title'}>
          {updateAndMerge.display}
        </Typography>
        <Typography variant='p'>
          After we have done changes to a branch it is time to merge those changes back to master or if you need to get the changes that someone else did on the same branch we use the <Bold>pull</Bold> command! This updates your local repository to the newest commit available at the remote repository! This does a <Italic>fetch</Italic> and <Italic>merge</Italic> remote changes of the branch that you are at!
        </Typography>
        <Typography variant='p'>
          To merge another branch into your current branch use the following command:
        </Typography>
        <Code>
          {`git pull origin <source_branch>`}
        </Code>
        <Typography variant='p'>
          or:
        </Typography>
        <Code>
          {`git merge <source_branch>`}
        </Code>
        <Typography variant='p'>
          Both will try to auto merge the changes, but sometimes this can lead to <Italic>Conflicts</Italic>. You are responsible to merge those conflicts manually by editing the files shown by git. After changing, you need to mark them as merged with the:
        </Typography>
        <Code>
          {`git add <file_name>`}
        </Code>
        <Typography variant='p'>
          At Source Tree you can use the "Pull" button to do the same, it will default to the branch that you are located in.
        </Typography>
        <Typography variant='p'>
          <Italic>Note: Same as with checking out branches you cannot pull branches if you have unstaged and or staged files that would be overwritten if you switch branch. That is the branch you are trying to get to, has already updates on the files that you have updated at your current branch! First commit the changes or discard them and then proceed!</Italic>
        </Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(WorkingWithGit)
