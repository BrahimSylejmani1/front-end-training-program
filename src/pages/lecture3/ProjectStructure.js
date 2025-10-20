/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import StructureImage from "assets/images/lecture2/structure.png";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";

const styles = ({ typography, size }) => ({
  root: {}
})

class ProjectStructure extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Fragment>
        <Typography variant={'heading'}>
            Project Structure
            <Divider />
        </Typography>
        <Typography variant='p'>
          Now that we have the project all in our forked repositories, lets talk about the way its structured, For that let us start with the following image:
        </Typography>
        <img src={StructureImage} />

        <Typography variant='p'>
            The important things to understand what the folders represent, and how they are created. Lets start with the NPM package definition and other related files for organising code;
            <ol>
                <li>package.json</li>
                This is the the way how to represent and define a project such that npm recognises it and helps to structure and organise dependencies. NPM manages this pretty straight forward. The main definitions are
                <ul>
                    <li>name: The project name</li>
                    <li>version: The project version</li>
                    <li>dependencies: The project dependencies, those that are needed to run it</li>
                    <li>devDependencies: The project development dependencies, those that are needed if you are developing it</li>
                </ul>
                <li>package-lock.json</li>
                This is a dump of npm to represent the last state of installed dependencies. As soon as you modify one of the dependencies, this gets updated
                <li>node_modules</li>
                All the dependencies installed by NPM are dumped on this folder. This will contain all the other libraries and their respective dependencies that the project uses.
                <li>.gitignore</li>
                Its used by git to identify folders that shouldn't be pushed to Git. As an example you don't need the node_modules to be online, since you can always get it by doing 'npm install'
                <li>README.md</li>
                The file that explains or instructs, gives details about the repository you are looking at. It is important to put some information on how other developers can install and use your project, how they can run it etc.
                <li>webpack.config.js</li>
                We are using webpack to compile our javascript and to run our front-end code, without the need of a server. Webpack is a module bundler for JavaScript. Its sole purpose it to bundle all the code into 'bundle.js' bundles. That means that all of the code of the app can be compiled into these big fat bundles that are minified, organised (no unused imports in there) and the end result very small. Instead of moving hundreds of folders and hundreds of files as a deployable, you would use webpack to just bundle all of that and organise it nicely. Than the entire web application can be bundled into a few files, or on other cases 1 file. It depends if you want to bundle parts of the application separately (known as chunks) or all in one.
                <li>LICENSE</li>
                The Git License of the project, currently MIT (do as you please with it)
                <li>jsconfig.json</li>
                VS configuration of the project. Lets Visual Studio code on where to find imports, what kind of javascript we are using etc.
                <li>.babelrc</li>
                A way to configure Babel the JavaScript compiler. Babel will compile newest version of JavaScript code like ES2015+ in a backward compatible code for older browsers. JSX is also supported, we will get there soon
                <li>build</li>
                The build directory is configured as the output location of webpack
                <li>src</li>
                Contains the source of the project and all of our developed code
            </ol>
        </Typography>
        <Typography variant='p'>
            To organise a React project you would usually follow this structure
            <ol>
                <li>anatomy</li>
                The skeleton of the project. Elements placed here describe how a page is layed output
                <li>assets</li>
                All css, images, json or other assets are put here. Basically everything that is not code.
                <li>containers</li>
                React components that contain logic (you will learn this later on)
                <li>pages</li>
                Separated the pages for an easier lookup. Here we would place all the pages and their content of the Training. They mimic the Left Navigation currently
                <li>presentations</li>
                All the React components that are used to present content. No logic on them, re-usable.
                <li>utils</li>
                As the name suggest, utilities classes and functions
                <li>index.js</li>
                The starting point of the app. Uses the React API to mount the application to the document with id.
                <li>App.js</li>
                Our top level hierarchy of the React App. Contains routing and providers.
                <li>Constants.js</li>
                Holds Constants that are used through out the app. Usually you keep constants like hostname, batch sizes, page definitions etc
                <li>index.html</li>
                A template used by webpack to generate the root index.html file of the project (dumped at build directory). This html file will have the placeholder div for index.js to mount the React App.
            </ol>
        </Typography>
      </Fragment>

    )
  }
}

export default withStyles(styles)(ProjectStructure)
