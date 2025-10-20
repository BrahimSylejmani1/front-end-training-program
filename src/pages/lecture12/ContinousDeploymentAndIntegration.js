/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import LoggingImage from 'assets/images/lecture10/logging.png';
import Code from "presentations/Code";
import Divider from "presentations/Divider";
import { Bold, Italic } from "presentations/Label";
import SimpleLink from "presentations/rows/SimpleLink";
import Typography from "presentations/Typography";
import WorkflowExample from 'assets/images/lecture12/gitlab_workflow_example.png'
import WorkflowExtendedExample from 'assets/images/lecture12/gitlab_workflow_example_extended.png'
import DeployPipelineImage from 'assets/images/lecture12/pipeline.png'
import NPMRunBuildImage from 'assets/images/lecture12/npm_run_build.png'
import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { Button } from "@material-ui/core";
const styles = ({ typography }) => ({
  root: {},
})

const script = `# Using Node as our preset environment (includes npm as well)
image: node:10.15.3

# Cache node_modules in between jobs
cache:
  paths:
  - node_modules/
# All stages of our pipeline! Ordered!
stages:
- build
- test
- deploy

# in between stages, a global npm install is executed
before_script:
 - npm install

# compile for gitlab
compile:
  stage: build
  script:
   - npm run build:pages
  artifacts:
    paths:
    - public

# Our test stage, install dev dependencies as extra script then run the test cases!
test:
  before_script:
   - npm install --only-dev
  stage: test
  script:
   - npm test

# Git Lab Pages Deploy
pages:
  stage: deploy
  script:
    - echo 'Gitlab Pages Deployment'
  artifacts:
    paths:
    - public
  only: ['master']
`

const pagesDeploy = `
# compile for gitlab
compile:
  stage: build
  script:
   - npm run build:pages
  artifacts:
    paths:
    - public

# Git Lab Pages Deploy
pages:
  stage: deploy
  script:
    - echo 'Gitlab Pages Deployment'
  artifacts:
    paths:
    - public
  only: ['master']`

class ContinousDeploymentAndIntegration extends React.Component {

  render() {
    const { classes, section } = this.props
    const introducing = section.children[0]
    const continuousIntegration = section.children[1]
    const continuousDelivery = section.children[2]
    const continuousDeployment = section.children[3]
    const workflow = section.children[4]
    const setup = section.children[5]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            In this section we are going to talk about the last task that we have when we develop and application! That is to bundle it and deploy it! Inspired by <SimpleLink href="https://docs.gitlab.com/ee/ci/introduction/">Git Lab CD/CI</SimpleLink>
          </Typography>
          <Divider id="divider"/>
        </Typography>
        <Typography variant='title' id={introducing.id}>
          {introducing.display}
        </Typography>
        <Typography variant='p'>
          For this section we are going to focus on how we can use GitLab CD/CI to run scripts that automate code testing, building, integration and deployment!
        </Typography>
        <Typography variant='p'>
          The continuous methodologies of software development are based on automating the execution of scripts to minimize the chance of introducing errors while developing applications. They require less human intervention or even no intervention at all, from the development of new code until its deployment.
        </Typography>
        <Typography variant='p'>
          It involves continuously building, testing, and deploying code changes at every small iteration, reducing the chance of developing new code based on bugged or failed previous versions. 
        </Typography>
        <Typography variant='p'>
          There are three main approaches to this methodology, each of them to be applied according to what best suits your strategy
        </Typography>
        <Typography variant='title' id={continuousIntegration.id}>
          {continuousIntegration.display}
        </Typography>
        <Typography variant='p'>
          Consider an application which has its code stored in a Git repository in GitLab. Developers push code changes every day, multiple times a day. For every push to the repository, you can create a set of scripts to build and test your application automatically, decreasing the chance of introducing errors to your app. 
        </Typography>
        <Typography variant='p'>
          This practice is known as <SimpleLink href="https://en.wikipedia.org/wiki/Continuous_integration">Continuous Integration</SimpleLink>; for every change submitted to an application - even to development branches - it’s built and tested automatically and continuously, ensuring the introduced changes pass all tests, guidelines, and code compliance standards you established for your app.
        </Typography>
        <Typography variant='p'>
          GitLab itself is an example of using Continuous Integration as a software development method. For every push to the project, there’s a set of scripts the code is checked against.
        </Typography>

        <Typography variant='title' id={continuousDelivery.id}>
          {continuousDelivery.display}
        </Typography>

        <Typography variant='p'>
          <SimpleLink href="https://continuousdelivery.com/">Continuous Delivery</SimpleLink> is a step beyond Continuous Integration. Your application is not only built and tested at every code change pushed to the codebase, but, as an additional step, it’s also deployed continuously, though the deployments are triggered manually.
        </Typography>
        <Typography variant='p'>
          This method ensures the code is checked automatically but requires human intervention to manually and strategically trigger the deployment of the changes
        </Typography>

        <Typography variant='title' id={continuousDeployment.id}>
          {continuousDeployment.display}
        </Typography>
        <Typography variant='p'>
          <SimpleLink href="https://www.airpair.com/continuous-deployment/posts/continuous-deployment-for-practical-people">Continuous Deployment</SimpleLink> is also a further step beyond Continuous Integration, similar to Continuous Delivery. The difference is that instead of deploying your application manually, you set it to be deployed automatically. It does not require human intervention at all to have your application deployed
        </Typography>

        <Typography variant='title' id={workflow.id}>
          {workflow.display}
        </Typography>
        <Typography variant='p'>
          Consider the following example for how GitLab CI/CD fits in a common development workflow.
        </Typography>
        <Typography variant='p'>
          Assume that you have discussed a code implementation in an issue and worked locally on your proposed changes. Once you push your commits to a feature branch in a remote repository in GitLab, the CI/CD pipeline set for your project is triggered. By doing so, GitLab CI/CD:
        </Typography>
        <Typography variant='p'>
          <ul>
            <li>
              Runs automated scripts (sequential or parallel) to:
              <ul>
                <li>Build and test your app.</li>
                <li>Preview the changes per merge request with Review Apps</li>
              </ul>
            </li>
          </ul>
          Once you’re happy with your implementation:
          <ul>
            <li>Get your code reviewed and approved.</li>
            <li>Merge the feature branch into the default branch.
              <ul>
                <li>GitLab CI/CD deploys your changes automatically to a production environment.</li>
              </ul>
            </li>
            <li>And finally, you and your team can easily roll it back if something goes wrong.</li>
          </ul>
        </Typography>
        <img src={WorkflowExample} style={{ width: '100%' }} />
        <Typography variant='p'>
          If we take a deeper look into the basic workflow, we can see the features available in GitLab at each stage of the DevOps lifecycle, as shown on the illustration below.
        </Typography>
        <img src={WorkflowExtendedExample} style={{ width: '100%' }} />
        <Typography variant='p'>
          If you look at the image from the left to the right, you’ll see some of the features available in GitLab according to each stage (Verify, Package, Release).
        </Typography>
        <Typography variant='p'>
          <ol>
            <li>
              Verify:
              <ul>
                <li>Automatically build and test your application with Continuous Integration.</li>
                <li>Analyze your source code quality with GitLab Code Quality. </li>
                <li>Determine the performance impact of code changes with Browser Performance Testing. </li>
                <li>Perform a series of tests, such as Container Scanning , Dependency Scanning , and JUnit tests.</li>
                <li>Deploy your changes with Review Apps to preview the app changes on every branch.</li>
              </ul>
            </li>
            <li>
              Package:
              <ul>
                <li>Store Docker images with Container Registry.</li>
                <li>Store NPM packages with NPM Registry. </li>
                <li>Store Maven artifacts with Maven Repository. </li>
              </ul>
            </li>
            <li>
              Release:
              <ul>
                <li>Continuous Deployment, automatically deploying your app to production.</li>
                <li>Continuous Delivery, manually click to deploy your app to production.</li>
                <li>Deploy static websites with GitLab Pages.</li>
                <li>Ship features to only a portion of your pods and let a percentage of your user base to visit the temporarily deployed feature with Canary Deployments. </li>
                <li>Deploy your features behind Feature Flags. </li>
                <li>Add release notes to any Git tag with GitLab Releases.</li>
                <li>View of the current health and status of each CI environment running on Kubernetes with Deploy Boards. </li>
                <li>Deploy your application to a production environment in a Kubernetes cluster with Auto Deploy.</li>
              </ul>
            </li>
          </ol>
        </Typography>

        <Typography variant='p'>
          With GitLab CI/CD you can also:
          <ul>
            <li>Easily set up your app’s entire lifecycle with Auto DevOps.</li>
            <li>Deploy your app to different environments.</li>
            <li>Install your own GitLab Runner.</li>
            <li>Schedule pipelines.</li>
            <li>Check for app vulnerabilities with Security Test reports. </li>
          </ul>
          To find out more about the features visit <SimpleLink href="https://docs.gitlab.com/ee/ci/README.html">CD/CI Index</SimpleLink>
        </Typography>
        <Typography variant='title' id={setup.id}>
          {setup.display}
        </Typography>
        <Typography variant='p'>
          Our automation rules for testing, building and deploying are all organised into a script file called <Bold>.gitlab-ci.yml</Bold> file! Our current setup looks like this:
          <Code>
            {script}
          </Code>
          By navigating at: <SimpleLink href="https://gitlab.com/agonlohaj/prime-front-end-training/pipelines">Gitlab Pipelines</SimpleLink> you will see all the pipelines that ran so far, based on that script! 
        </Typography>
        <Typography variant='p'>
          The important things to know are:
          <ul>
            <li>
              The pipeline runs into 3 stages:
              <ol>
                <li>build</li>
                <li>test</li>
                <li>deploy</li>
              </ol>
            </li>
            <li>
              At the build stage, we run the following job:
              <ol>
                <li>compile - the compile job runs which bundles our code and puts the results at the /public directory!</li>
              </ol>
            </li>
            <li>
              At the test stage, we run our test cases using Jest!
            </li>
            <li>
              The last stage which is deployment, contains the following job:
              <ol>
                <li>pages -> The special Gitlab pages job</li>
              </ol>
            </li>
          </ul>
          Here is also an example pipeline executed for a specific commit:
        </Typography>
        <img src={DeployPipelineImage} />

        <Typography variant='p'>
          Due to the special job named <Bold>pages</Bold> this repository also got uploaded to Gitlab Pages located at <SimpleLink href="https://agonlohaj.gitlab.io/prime-front-end-training">https://agonlohaj.gitlab.io/prime-front-end-training</SimpleLink>
        </Typography>
        <Typography variant='p'>
          In order to deploy to GitLab pages all we needed is:
          <ol>
            <li>A project</li>
            <li>A configuration file (<Bold>.gitlab-ci.yml</Bold>) to deploy your site</li>
            <li>A specific job called <Bold>pages</Bold> in the configuration file that will make GitLab aware that you are deploying a GitLab Pages website</li>
            <li>A public directory with the content of the website</li>
          </ol>
          Looking at the code again:
          <Code>
            {pagesDeploy}
          </Code>
          We can see we made the special compile to put the content of:
          <Code>
            {`npm run build:pages`}
          </Code>
          Into the /public directory. That in turn told that this job artifact is exactly that directory that we want to publish!
        </Typography>

        <Typography variant='p'>
          The content of all of our work is constructed like this (by running npm run build):
        </Typography>
        <img src={NPMRunBuildImage} />
        <Typography variant='p'>
          The important things are:
          <ol>
            <li>
              bundle.js
              <ul>
                <li>
                  Main repository Bundle file. All of our javascript code compiled into one big fat file!
                </li>
              </ul>
            </li>
            <li>
              Index.html
              <ul>
                <li>
                  The entry point of out app
                </li>
              </ul>
            </li>
            <li>
              Image files, ending with .png or .jpg
            </li>
          </ol>
          All of this omitted at the build directory, the directory that keeps our compiled code.
        </Typography>

        <Typography variant='p'>
          With that, now we have closet the eternal loop of a software development lifecycle, from coding, to testing, to integration and deployment! Every time a feature is finished like this, we take on the next challenge using the exact same approach!
        </Typography>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ContinousDeploymentAndIntegration))
