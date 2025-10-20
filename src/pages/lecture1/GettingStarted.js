/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import Code from "presentations/Code";
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import SimpleLink from "presentations/rows/SimpleLink";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
const styles = ({ typography }) => ({
  root: {},
})

const code = `
[ // start of an array
  { // start of a document/row
    "foo": "fighter", // a string
    "bar": [1, 2, 3], // a variable which contains an array of numbers
  },
  {
    "boolean": true,
    "Number with comma": 3.54,
    "bar": [ // an array with more documents... what?!
      {
        "foo": "fighter",
        "bar": [
          1,
          2,
          3
        ]
      }
    ]
  },
]
`

class GettingStarted extends React.Component {
  render() {
    const { classes, section } = this.props
    let gitlab = section.children[0]
    let sourceTree = section.children[1]
    let vsCode = section.children[2]
    let slack = section.children[3]
    let mongoDB = section.children[4]
    let npm = section.children[5]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          Getting Started
          <Divider />
        </Typography>
        <Typography variant={'p'}>Let’s get straight to the point, shall we? The following are all the tools you will require in order to follow the lectures:
        <ol>
            <li>GitLab account</li>
            <li>Source Tree</li>
            <li>VS Code</li>
            <li>Slack</li>
            <li>MongoDB Community Server</li>
            <li>Node Package Manager (NPM), part of the Node JS framework</li>
            <li>Mac or Windows OS</li>
          </ol>
        </Typography>
        <Typography variant={'p'}>
          These are all free to use tools, that’s why we choose those.
          Here is a quick intro to all of them
        </Typography>
        <Typography id={gitlab.id} variant={'title'}>
          {gitlab.display}
        </Typography>

        <Typography variant={'p'}>
          GitLab is a single application for the entire software development lifecycle. From project planning and source code management to CI/CD, monitoring, and security. Using it we will publish the training source code at the repository, organise the Continuous Integration and Continuous Delivery (you will learn this later). We will provide the master repository, and you will fork it (you will learn this later) and work on your version of the web app (fill in the assignments). The code review (assignments review), progress tracking, changes and training timeline in the perspective of a single applicant will be all managed using GitLab.
        </Typography>
        <Typography variant={'p'}>
          Go ahead, follow this link: <SimpleLink href="https://gitlab.com">https://gitlab.com</SimpleLink> and sign up to create your first account! You are going to be using this A lot!
        </Typography>
        <Typography id={sourceTree.id} variant={'title'}>
          {sourceTree.display}
        </Typography>
        <Typography variant={'p'}>
          Before you understand Source Tree, you need to first understand what GIT is. GIT is a free open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. Using GIT we will setup working branches and maintain the code changes and pushes to your working repository which contains the interactive web app with your assignments.
        </Typography>

        <Typography variant={'p'}>
          SourceTree on the other hand is a software that has a GIT Graphical User Interface (GUI) of your repositories. It basically is a visual representation of what is going on with your code, what changes you did, and show the history of the versions of the code changes you made throughout your training. In other words, it will visually show your codding footprint! It makes doing git commands (you’ll learn them quickly) very easy, so that you can keep your focus on what's important, getting stuff done!
        </Typography>

        <Typography id={vsCode.id} variant={'title'}>
          {vsCode.display}
        </Typography>

        <Typography variant={'p'}>
          <label>An IDE which servers as you’re code editor. Your very own personal codding buddy. It helps you out track your files, project structure and has a ton of other nice and neat features like IntelliSense. That is basically the autocompletion, syntax highlighting on code related concepts like functions, module imports, references, <label style={{ color: 'grey' }}>you name it...</label> (see, it even suggested the last words of this sentence, awesome).</label>
        </Typography>

        <Typography variant={'p'}>
          Go ahead and install it from right here: <SimpleLink href="https://code.visualstudio.com/">https://code.visualstudio.com/</SimpleLink> and get started with it :D.
        </Typography>

        <Typography id={slack.id} variant={'title'}>
          {slack.display}
        </Typography>

        <Typography variant={'p'}>
          We are going to use Slack as our communication tool.
          <ol>
            <li>Use the following link to get into our workspace: <SimpleLink href="https://join.slack.com/t/jcoders-workspace/shared_invite/zt-drmedvmt-LkYSwgyO6oWRzEIwEmTk_g">Accept Invite</SimpleLink></li>
            <li>The workspace directory is located at <SimpleLink href="https://jcoders-workspace.slack.com/">https://jcoders-workspace.slack.com/</SimpleLink></li>
            <li>If you want to download it for your local machine use this link: <SimpleLink href="https://slack.com/download">https://slack.com/download</SimpleLink>. Its also available on Mobile (iOS and Android), look them up at the app store</li>
          </ol>
        </Typography>
        <Typography id={mongoDB.id} variant={'title'}>
          {mongoDB.display}
        </Typography>

        <Typography variant={'p'}>
          MongoDB is an open source Document Database. It’s so flexible and doesn’t complain a lot but gets things done anyway (good guy Mongo). By flexible I mean, that it can handle nested data structures, like arrays within a row of data, a document within a document and many other cool stuff. Also the rows doesn’t necessarily have to have the same fields (highly discouraged, why am I giving you bad ideas!).
        </Typography>
        <Typography variant={'p'}>
          It is very easy to work with, integrate and distribute. Read more about how awesome it is over here:<SimpleLink href="https://www.mongodb.com/">https://www.mongodb.com/.</SimpleLink>Go ahead and download it while your at it! For this training, we are going to store data in there, leverage the mongo querying and aggregation functions to yield cool results, but most importantly have fun with it while doing it!
        </Typography>

        <Typography variant={'p'}>
          It stores data in a BSON format, that is a binary encoding of JSON-like document. And JSON stands for JavaScript Object Notation. Just have a look at how nice of a data representation a JSON has:
        </Typography>

        <Code>
          {code}
        </Code>

        <Typography variant={'p'}>
          However don’t worry, you are going to be using a lot of JSON when programming with JavaScript, get really familiar with it, and then moving on to Mongo will be easy peasy! For more information, visit: <SimpleLink href="https://www.json.org/">https://www.json.org/.</SimpleLink>
        </Typography>

        <Typography id={npm.id} variant={'title'}>
          {npm.display}
        </Typography>
        <Typography variant={'p'}>
          The Node Package Manager, helps you manage your references to other libraries. It makes it easy to include, upgrade and remove external references from your project. Go ahead and download it from here: <SimpleLink href="https://nodejs.org/en/download/">https://nodejs.org/en/download/</SimpleLink>
        </Typography>

      </Fragment>
    )
  }
}

export default withStyles(styles)(GettingStarted)
