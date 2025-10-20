/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Code from "presentations/Code";
import PageLink from "presentations/rows/nav/PageLink";
import withStylesReactJS, { createTheming } from 'react-jss'
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import Exercise from 'pages/lecture7/Exercise'
import SimpleLink from "presentations/rows/SimpleLink";
import { Italic } from "presentations/Label";

const styles = ({ typography }) => ({
  root: {
    backgroundColor: props => props.color
  },
  cardHeaderFromPageParent: {
    '& svg': {
      color: 'red'
    }
  }
})

const btnStyle = (theme) => {
  return {
    myButton: {
      padding: props => props.spacing
    },
    myLabel: props => ({
      display: 'block',
      color: theme.colorPrimary,
      fontWeight: props.fontWeight,
      fontStyle: props.fontStyle
    })
  }
}

const theme = {
  colorPrimary: 'green'
}
const Button = (props) => {

  return (
    <button className={props.classes.myButton}>
      <span className={props.classes.myLabel}>{props.children}</span>
    </button>
  )
}

Button.defaultProps = {
  spacing: 10,
  fontWeight: 'bold'
}
const StyledButton = withStylesReactJS(btnStyle)(Button)

const themeConfig = `
let theme = {
  palette: {
    leadColor: '#3cb9e2',
    leadAccent1: '#1b9ad1',
    leadAccent2: '#086c9e',
    leadDarkAccent1: '#34576a',
    leadDarkAccent2: '#334353',
    bgColor: '#ecf0f1',
    textColor: '#293642',
    textColorInverse: '#fff',
    disabledColor: '#8ca0b3',
    error: {
      main: '#e93d3d'
    },
    success: '#2ac866',
    warning: '#f5a623',
    navBgColor: '#334353',
    borderColor: '#d4d9de',
    common: {
      black: '#000',
      white: '#fff'
    }
  },
  size: {
    displayFontSize: 48,
    avatarSize: 48,
    headingFontSize: 28,
    iconSize: 24,
    headerFontSize: 18,
    titleFontSize: 16,
    defaultFontSize: 14,
    captionFontSize: 12,
    smallFontSize: 10,
    spacing: 8,
    baseRadius: 4,
    //if we want to scale or return every pixel to rem, em, ww ,vh or anything else we will use this function
    px: (num) => num
  }
}`

const themeProviderComp = `
import React from "react"
import {MuiThemeProvider as ThemeProviderMaterialUI, createMuiTheme} from "@material-ui/core/styles"
import Theme from 'utils/Theme'
import "normalize.css"
class ThemeProvider extends React.Component {
  render() {
    const {children, theme: themeProp} = this.props
    let theme = createMuiTheme(Theme.getTheme())
    console.log('theme', theme)
    return (
      <ThemeProviderMaterialUI theme={themeProp || theme}>
        {children}
      </ThemeProviderMaterialUI>
    )
  }
}

export default ThemeProvider`
const themeProvider = `
import React, { Suspense } from 'react'
import 'assets/app.css'
import ThemeProvider from 'utils/ThemeProvider'
import {Route, Router, Switch} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()
import Factory from 'pages/Factory'

const App = ({children}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router history={history}>
        <ThemeProvider>
          <Switch>
              <Route path="/lecture/:id/" component={Factory}/>
              <Route path="/" component={Factory}/>
          </Switch>
        </ThemeProvider>
      </Router>
    </Suspense>
  )
}

export default App
`
const useHoc = `
import withStyles from "@material-ui/core/styles/withStyles"

const styles = theme => ({
  root: {
    color: theme.type === 'dark' ? theme.palette.leadDarkAccent1 : theme.palette.leadColor
  }
})
const ThemedButton = props => {
  const {children} = props

  return (
    <Button className={classes.root}>
      {children}
    </Button>
  )
}

export default withStyles(styles)(ThemedButton)
`
const themedButtonResult = `
<StyledButton fontStyle='italic'>I'm Button</StyledButton>
`
const cssExtraction = `
import withStyles from "@material-ui/core/styles/withStyles"

const styles = theme => ({
  root: {
    color: theme.type === 'dark' ? theme.palette.leadDarkAccent1 : theme.palette.leadColor
  },
  // this rule is not used in render and it means does not get exctracted(not injectead in head tag as style of this component).
  deadCode:{
    color: 'red',
    backgroundColor: '#fff',
  }
})
const ThemedButton = props => {
  const {children} = props

  return (
    <Button className={classes.root}>
      {children}
    </Button>
  )
}

export default withStyles(styles)(ThemedButton)
`

const lazyEvaluation = `
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import withStyles from "@material-ui/core/styles/withStyles"

const styles = theme => ({
  //this css rule will render only if the withIcon prop is enabled otherwis it doesn't get injected in head tag.
  iconButton:{
    color: theme.palette.leadColor,
    padding: theme.spacing * 2
  }
})

const ExtendedButton = props => {
  const {children, withIcon, icon} = props

  return (
    <Button className={classes.root}>
      {children}
      {withIcon && 
        <IconButton className={classes.iconButton}>
          {icon}
        </IconButton>
      }
    </Button>
  )
}

export default withStyles(styles)(ExtendedButton)
`
const BEM = `
//button.css
.button {
  display: inline-block;
  border-radius: 3px;
  padding: 7px 12px;
  border: 1px solid #D5D5D5;
  background-image: linear-gradient(#EEE, #DDD);
  font: 700 13px/18px Helvetica, arial;
}
.button--state-success {
  color: #FFF;
  background: #569E3D linear-gradient(#79D858, #569E3D) repeat-x;
  border-color: #4A993E;
}
.button--state-danger {
  color: #900;
}

//button in button.html
<button class="button">
	Normal button
</button>
<button class="button button--state-success">
	Success button
</button>
<button class="button button--state-danger">
	Danger button
</button>
`
const withoutBEM = `
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = ({palette, size, transitions}) => ({
  root: {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    flexFlow: 'column nowrap',
    height: 'auto'
  }
})

const NavRowWrapper = props => {
  const {classes, children} = props
  return(
      <div className={classes.root}>
        {children}
      </div>    
  )
}

export default withStyles(styles)(NavRowWrapper)

// when it gets rendered in HTML
<div class="NavRowWrapper-root-34">...</div>
<div class="NavRowWrapper-root-34">...</div>
<div class="NavRowWrapper-root-34">...</div>
<div class="NavRowWrapper-root-34">...</div>
`

const withoutBEMProduction = `
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = ({palette, size, transitions}) => ({
  root: {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    flexFlow: 'column nowrap',
    height: 'auto'
  }
})

const NavRowWrapper = props => {
  const {classes, children} = props
  return(
      <div className={classes.root}>
        {children}
      </div>    
  )
}

export default withStyles(styles)(NavRowWrapper)


// when it gets rendered in HTML and enviroment is set to production
<div class="jpvift">...</div>
<div class="jpvift">...</div>
<div class="jpvift">...</div>
<div class="jpvift">...</div>
`
const themedButton = `

const btnStyle {
  return{
    myButton: {
      padding: props => props.spacing
    },
    myLabel: props => ({
      display: 'block',
      fontWeight: props.fontWeight,
      fontStyle: props.fontStyle
    })
  }
}

const Button = (props) => {
  
  return(
      <button className={props.classes.myButton}>
        <span className={props.classes.myLabel}>{props.children}</span>
      </button>
  )
}

Button.defaultProps = {
  spacing: 10,
  fontWeight: 'bold'
}
const StyledButton = withStylesReactJS(btnStyle)(Button)

`


class CssInJs extends React.Component {
  render() {
    const { classes, section } = this.props
    const themeing = section.children[0]
    const criticalCssExtraction = section.children[1]
    const lazyEvaluationTitle = section.children[2]
    const noNamingConventions = section.children[3]
    const styleOnGivenProp = section.children[4]
    const exercise = section.children[5]

    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            In this section we are going to focus on how CSS in JS approach looks like and give examples on implementation. Here is a <SimpleLink href="https://cssinjs.org">link</SimpleLink> to learn more about CSS in JS
          </Typography>
          <Divider />
        </Typography>
        <Typography variant='p'>
          JSS is an authoring tool for CSS which allows you to use JavaScript to describe styles in a declarative, conflict-free and reusable way. It can compile in the browser, server-side or at build time in Node.
        </Typography>
        <Typography variant='p'>
          In this training program we were using two ways to style React Components:
          <ol>
            <li>Inline-styling</li>
            <li>Material UI <Italic>withStyles</Italic> HOC</li>
          </ol>
          Let's go ahead and mention a few benefits when using this approach.
          <Italic>Note:  Material UI internally uses JSS (CSS in JS) to handle styling</Italic>
        </Typography>
        <Typography variant='title' id={themeing.id}>
          Themes
        </Typography>
        <Typography variant='p'>
          The idea is that you define a theme, wrap your application with ThemeProvider and pass the theme to ThemeProvider. ThemeProvider will pass it over context to your styles creator function and your props. After that, you may change your theme, and all your components will get the new theme automatically.
        </Typography>
        <Typography>
          <Italic>
            NOTE: ThemeProvider can render only a single child because it uses React.Children.only in its render method and throws exception otherwise.
          </Italic>
          <Typography variant='p'>
            Let's see how we have used ThemeProvider in this interactive web app
          </Typography>
        </Typography>

        <Typography variant='p'>This is the object that contains all the config variables to enable theming.</Typography>
        <Code>
          {themeConfig}
        </Code>
        <Typography variant='p'>
          The code below demostrates how we construced our ThemeProvider component.
          <br />
          Note: ThemeProvider in this tutorial is used from material-ui rather than using that from React-jss(this library enables
          css in jss in react), so if we want to get rid from material Ui we just import ThemeProvider from react-jss instead of material-ui and like this
          we enable theming in React
        </Typography>
        <Code>
          {themeProviderComp}
        </Code>
        <Typography variant='p'>
          As you can see everything that is rendered inside ThemeProvider(Wrapped with ThemeProvider) it will have access to
          theme object.
        </Typography>
        <Code>
          {themeProvider}
        </Code>
        <Typography variant='p'>
          Note: if we want to benefit from ThemeProvider we should always use the HOC in order to have theme object available. <br />
          To do that consider the code below:
          <Code>
            {useHoc}
          </Code>
        </Typography>
        <Typography variant='title' id={criticalCssExtraction.id}>Critical CSS extraction</Typography>
        <Typography variant='p'>
          No dead code: <br />
          only CSS from rendered components gets extracted and gets injected in head
          <Code>
            {cssExtraction}
          </Code>
        </Typography>

        <Typography variant='title' id={lazyEvaluationTitle.id}>
          Lazy evaluation
        </Typography>
        <Typography varaint='p'>
          Style Sheets get created when a component gets mounted. <br />
            we Gain a lot with this approach because it adds the style only when components exists in DOM(is mountend),
            and it removes the styles when it unmounts.
          <Code>
            {lazyEvaluation}
          </Code>
        </Typography>
        <Typography variant='title' id={noNamingConventions.id}>Removes the need for naming conventions.</Typography>
        <Typography variant='p'>If you remember when styling components with Vanilla Css or using Css PreProcessors we should follow some standards in order to have unique class names and to be sure that they never overlap (hard to think of that especially when developing large scale apps).
        </Typography>
        <Typography variant='p'>
          Let's see how BEM patterns looks like.
          <Code>
            {BEM}
          </Code>
        </Typography>
        <Typography variant='title'>Without BEM</Typography>
        <Typography variant='p'>
          If we take a closer look in the code below we can notice that when the component got rendered it added the name of the component before the actual classname (<code>root</code> in this case) as well before the className <br />You see JSS handles naming convention for us, we don't need to bother about it at all, btw if we still don't trust in that we can go even further by adding some prefixes in JSSProvide config.
          <Code>
            {withoutBEM}
          </Code>
        </Typography>
        <Typography variant='p'>
          Let's just demo how the component would look if we compile code using a production environment
          <Code>
            {withoutBEMProduction}
          </Code>
        </Typography>
        <Typography variant='title' id={styleOnGivenProp.id}>Adding style depending on the given property</Typography>
        <Typography variant='p'>
          Css in Jss it has another good feature, you can add some styling property from a given prop.<br />Let's say that we want to have a Button that when we add a prop fontStyle='italic' it would add that property to the component style sheet.
          <Code>
            {themedButton}
          </Code>
        </Typography>
        <Typography variant='p'>
          StyledButton when it got rendered.
          <Code>
            {themedButtonResult}
          </Code>
          Result:
          <br />
        </Typography>
        <StyledButton fontStyle='italic'>I'm Button</StyledButton>

        <Typography variant='title' id={exercise.id}>{exercise.display}</Typography>
        <Exercise classes={{ cardHeader: classes.cardHeaderFromPageParent }} />
      </Fragment>
    )
  }
}

export default withStyles(styles)(CssInJs)
