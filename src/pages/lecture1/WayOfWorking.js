/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import boardInstructions from 'assets/images/lecture1/board_instruction.png';
import boardInstructions2 from 'assets/images/lecture1/board_instruction_part_2.png';
import createBranchGitLab from 'assets/images/lecture1/create_branch_gitlab.png';
import editTask from 'assets/images/lecture1/edit_task.png';
import fetchNewBranch from 'assets/images/lecture1/fetch_new_branch.png';
import firstPush from 'assets/images/lecture1/first_push.png';
import firstTask from 'assets/images/lecture1/first_task.png';
import mergeRequestScreen from 'assets/images/lecture1/merge_request.png';
import chooseBranch from 'assets/images/lecture1/merge_request_choose_branch.png';
import removeFork1 from 'assets/images/lecture1/remove_fork_relationship_1.png';
import removeFork2 from 'assets/images/lecture1/remove_fork_relationship_2.png';
import removeFork3 from 'assets/images/lecture1/remove_fork_relationship_3.png';
import Divider from "presentations/Divider";
import SimpleLink from "presentations/rows/SimpleLink";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";

const styles = ({ typography }) => ({
  root: {},
})

class WayOfWorking extends React.Component {
  render() {
    const { classes, section } = this.props
    const gitLabSetup = section.children[0]
    const rules = section.children[1]
    const exercise = section.children[2]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          Way of Working
          <Typography>During this training we are going to use the agile methodology and work as if we were following and doing an agile driven project. </Typography>
          <Divider />
        </Typography>
        <Typography id={gitLabSetup.id} variant={'title'}>
          {gitLabSetup.display}
        </Typography>
        <Typography>
          Before we explain the rules, make sure your GitLab Board (Under the Issues section) has the following Columns:
        </Typography>

        <Typography>
          <ul>
            <li>Open: We will consider this our backlog</li>
            <li>Doing: The assignments that are under progress</li>
            <li>Review: The assignments that are under review by your trainer or assistant</li>
            <li>Done: The assignments that are reviewed and merged</li>
          </ul>
        </Typography>
        <Typography variant={'p'}>
          <img src={boardInstructions}></img>
        </Typography>
        <Typography variant={'p'}>
          <img src={boardInstructions2}></img>
        </Typography>
        <Typography id={rules.id} variant={'title'}>
          {rules.display}
        </Typography>
        <Typography>
          These are the following rules of the game that we will follow throughout the training:
          <ol>
            <li>Each of the participants shall organise their own tasks at the GitLab board at the backlog section, as if he/she was working on a project.</li>
            <li>Each of the assignments will have to be written as a task in GitLab. Their acceptance criteria is the information of the assignment (it contains a description and a “Definition of Done”).  Add it initially at the open issues column.</li>
            <li>Every task will have its own feature branch that references the task.</li>
            <li>The participant will make all the necessary changes at the feature branch (multiple commits). In parallel, when this process starts, the participant will move the task to “doing”</li>
            <li>When the feature is ready to be merged back, the participant will perform a pull request. At this point, add the feature to “review” column.</li>
            <li>This pull request has to be then approved by the trainer/assistant in order for it to be merged and considered done. These are the steps on how this will proceed:
              <ol>
                <li>You will make the code changes that fulfill the definition of done for the respective task for which the branch is created</li>
                <li>You will do a pull request (See below for more information)</li>
                <li>If everything is ok, your trainer or assistant will approve and merge it, at this point you can consider it done, thus move it to done (at the GitLab board)</li>
                <li>Otherwise the trainer or assistant has disapproved your changes and provided feedback to the reason why. At this point, go back to step 1 and restart.</li>
              </ol>
            </li>
          </ol>
        </Typography>

        <Typography>
          Pull requests let you tell others about changes you've pushed to a GitHub repository. Once a pull request is sent, interested parties can review the set of changes, discuss potential modifications, and even push follow-up commits if necessary.
        </Typography>
        <Typography id={exercise.id} variant={'title'}>
          {exercise.display}
        </Typography>
        <Typography>
          Step 1: Create your first task with the title "Exercise 1" and add it at doing:
        </Typography>
        <Typography variant={'p'}>
          <img src={firstTask}></img>
        </Typography>
        <Typography variant={'p'}>
          Step 2: Click the title of the task to go to its details page
        </Typography>
        <Typography variant={'p'}>
          <img src={editTask}></img>
        </Typography>
        <Typography variant={'p'}>
          Step 3: Add the description: “In order to learn on how to exercise the way of working, I will change the “README.md” file to contain my name on it”
        </Typography>
        <Typography variant={'p'}>
          Step 4: Create a branch for the task at GitLab, fields are all automatic, just hit the "Create Branch" button
        </Typography>
        <Typography variant={'p'}>
          <img src={createBranchGitLab} />
        </Typography>
        <Typography variant={'p'}>
          Step 5: Go to Source Tree, and fetch all the remote branches
        </Typography>
        <Typography variant={'p'}>
          Step 6: Double-click to jump to the branch created at step 4
        </Typography>
        <Typography variant={'p'}>
          <img src={fetchNewBranch}></img>
        </Typography>
        <Typography>
          Step 7: Perform the task, using VS Code -> Add your name at the READE.md file
        </Typography>
        <Typography>
          Step 8: On Source Tree, commit and push the changes!
        </Typography>
        <Typography variant={'p'}>
          <img src={firstPush}></img>
        </Typography>
        <Typography>
          Step 9: Create the merge request, by:
          <ol>
            <li>Go at the merge request screen</li>
            <Typography variant={'p'}>
              <img src={mergeRequestScreen}></img>
            </Typography>
            <li>Choose the branch created at step 4</li>
            <Typography variant={'p'}>
              <img src={chooseBranch}></img>
            </Typography>
          </ol>
        </Typography>
        <Typography>
          Step 9: Move the task at the board to review!
        </Typography>
        <Typography>
          Step 9: Wait for us to approve your merge request. Don't close it yourself. You are Done!
        </Typography>
        <br/>
        <Typography fontStyle={'italic'}>
          If you are having permissions issues then follow this <SimpleLink href="https://awordfromnet.com/access-gitlab-via-sourcetree-updated/">link</SimpleLink> to connect your account.
        </Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(WayOfWorking)
