/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import addMember from 'assets/images/lecture1/add_member.png';
import cloneInstruction from 'assets/images/lecture1/clone_instruction.png';
import cloneSourceTree from 'assets/images/lecture1/clone_new_source_tree.png';
import fork from 'assets/images/lecture1/fork_instruction.png';
import newRemote from 'assets/images/lecture1/new_remote.png';
import privateRepo from 'assets/images/lecture1/private_repo.png';
import remoteMaster from 'assets/images/lecture1/remote_master.png';
import visualCodeImport from 'assets/images/lecture1/vs_code_import.png';
import Code from "presentations/Code";
import Divider from "presentations/Divider";
import SimpleLink from "presentations/rows/SimpleLink";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
const styles = ({ typography }) => ({
  root: {},
})


class ProjectSetup extends React.Component {
  render() {
    const { classes, section } = this.props
    let setup = section.children[0]
    let running = section.children[1]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          Project Setup
          <Typography>Follow the steps to get access and create your fork of the main repository.</Typography>
          <Divider />
        </Typography>
        <Typography id={setup.id} variant={'title'}>
          {setup.display}
        </Typography>
        <Typography variant={'p'}>
          <ol>
            <li>Open your browser and go to this link: <SimpleLink href="https://gitlab.com">https://gitlab.com</SimpleLink></li>
            <li>Use your previously created account to login</li>
            <li><label>Follow this link to go to the main project in gitlab (maintained by Agon Lohaj): <SimpleLink href="https://gitlab.com/agon.lohaj/jcoders-front-end-training-program">https://gitlab.com/agon.lohaj/jcoders-front-end-training-program</SimpleLink></label></li>
            <li>Click the fork button</li>
            <Typography variant={'p'}>
              <img src={fork}></img>
            </Typography>
            <li>Select your account name as the namespace/group to fork the project</li>
            <li>Add Agon Lohaj as Maintainer</li>
            <Typography variant={'p'}>
              <img src={addMember}></img>
            </Typography>
            <li>Make the project private. Only Agon and you will be able to see it</li>
            <Typography variant={'p'}>
              <img src={privateRepo}></img>
            </Typography>
          </ol>
        </Typography>


        <Typography variant={'p'}>
          Now in order to have the project locally, we will have to clone it using Source Tree. Follow the instructions listed here:
          <ol>
            <li>Go to your forked project page</li>
            <li>Click the clone icon</li>
            <Typography variant={'p'}>
              <img src={cloneInstruction}></img>
            </Typography>
            <li>Use the clone with HTTPS, copy the url</li>
            <li>Open Source tree on your local machine</li>
            <li>Go ahead and choose the File -> Clone/New option. You can also find it using the add button and going at the Clone Tab</li>
            <Typography variant={'p'}>
              <img src={cloneSourceTree}></img>
            </Typography>
            <li>Paste the link at the source path, that you obtained from step 3</li>
            <li>Choose a folder at your Documents/Training Program/Repository</li>
            <li>Click Clone</li>
          </ol>
        </Typography>

        <Typography variant={'p'}>
          Now lets track the remote changes that we will publish. These are the new lectures that you will get at the next session
          <ol>
            <li>From the "Repository" menu click "Add Remote"</li>
            <li>Name the remote to "Training"</li>
            <li>The URL/path will be the URL of the training repository located here: <SimpleLink href="https://gitlab.com/agon.lohaj/jcoders-front-end-training-program">https://gitlab.com/agon.lohaj/jcoders-front-end-training-program</SimpleLink></li>
            <li>Name the remote to "Training"</li>
            <Typography variant={'p'}>
              <img src={newRemote}></img>
            </Typography>
            <li>When we do the next session, use the "Pull" functionality from Source Tree to get the next lecture into your "Forked" repository</li>
            <Typography variant={'p'}>
              <img src={remoteMaster}></img>
            </Typography>
          </ol>
        </Typography>

        <Typography variant={'p'}>
          Now that you have the code locally, go ahead and open VS Code and import the project. Follow this image to do that:
        </Typography>
        <Typography variant={'p'}>
          <img src={visualCodeImport}></img>
        </Typography>

        <Typography id={running.id} variant={'title'}>
          {running.display}
        </Typography>
        <Typography variant={'p'}>
          Open CommandPrompt or Terminal at the project root directory. Once your there run the following command to install all the project dependencies:
        </Typography>
        <Code>
          {`npm install`}
        </Code>
        <Typography variant={'p'}>
          After that is completed successfully, in order to run the project, simply type
        </Typography>
        <Code>
          {`npm start`}
        </Code>
        <Typography variant={'p'}>
          Open your browser at: <SimpleLink href="http://localhost:8080">http://localhost:8080</SimpleLink> and enjoy!
        </Typography>

        <Typography variant={'p'} fontStyle={'italic'}>
          <br/>
          In case you are experiencing difficulties starting the application, try the following:
          <ol>
            <li>
              Run the Command Prompt as an administrator
            </li>
            <li>
              Run:
              <Code>
                {`npm install -g webpack-dev-server`}
              </Code>
              <Code>
                {`npm install -g webpack`}
              </Code>
              <Code>
                {`npm install -g webpack-cli`}
              </Code>
            </li>
          </ol>
        </Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(ProjectSetup)
