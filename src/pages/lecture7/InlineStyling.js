/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import PageLink from "presentations/rows/nav/PageLink";
import Typography from "presentations/Typography";
import Code from 'presentations/Code';
import React, { Fragment } from "react";
const styles = ({ typography }) => ({
  root: {},
})

const divWithInlineStyle = `
<div style={{ backgroundColor: 'red' }}>
  Hello World!
</div>
`

const redBg = `
//main.css
.red-bg {
  background-color: red;
}
`

const divWithClassName = `
<div className='red-bg'>
  Hello World!
</div>
`

const errorBtn = `
const styles = {
  btn: {
    width: 100,
    height: 40,
    padding: 10
  }
}

const Button = props => {
  const {error} = props
  return(
      <button style={{
        ...styles.btn,
        backgroundColor: error ? 'red' : 'green'
      }}>
        Click me
      </button>
  )
}
`
const biList = `
<div style="background-color: tomato; border: 1px solid red; margin-top: 10px; margin-bottom: 10px; overflow: hidden; color: rgb(0, 0, 0); display: flex; flex-flow: row wrap; align-items: center;"><span>Clicked the loginBtn</span><span>lorem ipsum dolore sit amet</span><span>23</span></div>
<div style="background-color: tomato; border: 1px solid red; margin-top: 10px; margin-bottom: 10px; overflow: hidden; color: rgb(0, 0, 0); display: flex; flex-flow: row wrap; align-items: center;"><span> the loginBtn</span><span>lorem ipsum dolore sit aspan><span>23</span></div>
<div style="background-color: tomato; border: 1px solid red; margin-top: 10px; margin-bottom: 10px; overflow: hidden; color: rgb(0, 0, 0); display: flex; flex-flow: row wrap; align-items: center;"><span>Clicked the loginBtn</span><span>lorem ipsum dolore sit amet</span><span>23</span></div>
<div style="background-color: tomato; border: 1px solid red; margin-top: 10px; margin-bottom: 10px; overflow: hidden; color: rgb(0, 0, 0); display: flex; flex-flow: row wrap; align-items: center;"><span>Clicked the </span><span>lorem ipsum dolore sitet</span><span>23</span></div>
<div style="background-color: tomato; border: 1px solid red; margin-top: 10px; margin-bottom: 10px; overflow: hidden; color: rgb(0, 0, 0); display: flex; flex-flow: row wrap; align-items: center;"><span>Clicked the loginBtn</span><span>lorem ipsum dolore sit amet</span><span>23</span></div>
<div style="background-color: tomato; border: 1px solid red; margin-top: 10px; margin-bottom: 10px; overflow: hidden; color: rgb(0, 0, 0); display: flex; flex-flow: row wrap; align-items: center;"><span>Clicked the loginBtn</span><span>lorem ipsum t amet</span><span>23</span></div>
<div style="background-color: tomato; border: 1px solid red; margin-top: 10px; margin-bottom: 10px; overflow: hidden; color: rgb(0, 0, 0); display: flex; flex-flow: row wrap; align-items: center;"><span>Clicked the loginBtn</span><span>lorem ipsum dolore sit amet</span><span>23</span></div>
<div style="background-color: tomato; border: 1px solid red; margin-top: 10px; margin-bottom: 10px; overflow: hidden; color: rgb(0, 0, 0); display: flex; flex-flow: row wrap; align-items: center;"><span>Clicked the </span><span>lorem ipsum dolore sit amet</span><span>23</span></div>
<div style="background-color: tomato; border: 1px solid red; margin-top: 10px; margin-bottom: 10px; overflow: hidden; color: rgb(0, 0, 0); display: flex; flex-flow: row wrap; align-items: center;"><span>Clicked the loginBtn</span><span>lorem ipsum dolore amet</span><span>23</span></div>
<div style="background-color: tomato; border: 1px solid red; margin-top: 10px; margin-bottom: 10px; overflow: hidden; color: rgb(0, 0, 0); display: flex; flex-flow: row wrap; align-items: center;"><span>Clicked the loginBtn</span><span>lorem ipsum dolore sit amet</span><span>23</span></div>
`

const hoverStateInline = `
const linkStyle = {
  backgroundColor: '#fff',
  width: 400,
  color: '#999'
}
class Link extends React.Component{

  state = {
    hover: false
  }

  onMouseOver = event => {
    event.preventDefault()
    this.setState({hover:true})
  }

  
  onMouseOut = event => {
    event.preventDefault()
    this.setState({hover:false})
  }

  render(){
    const {to} = this.props
    const {hover} = this.state
    return(
      <a 
      style={{
        ...linkStyle,
        color: hover ? '#000' : linkStyle.color
      }} 
      onMouseOver={this.onMouseOver}
      onMouseOut={this.onMouseOut}
      href={to}
      >
        Go to google
      </a>
    )
  }
}
`
const noSelectors = `
import IconButton from '@material-ui/core/IconButton'

const styles = {
  link:{
    backgroundColor: '#fff',
    width: 400,
  },
  labelStyle: {
    color: '#999',
    oveflow: 'hidden',
    textOveflow: 'ellipsis',
    whiteSpace: 'no-wrap'
  }
  iconStyle:{
    marginLeft: 8
  }
}

class Link extends React.Component{

  render(){
    const {to} = this.props
    return(
      <a style={styles.link} href={to}>
        <label style={styles.label}>
          Go to google
        </label>
        <IconButton style={styles.icon}>
          <Add/>
        </IconButton>
      </a>
    )
  }
}
`

class InlineStyling extends React.Component {
  render() {
    const { classes, section } = this.props
    const conditionalRendering = section.children[0]
    const noPseudClasses = section.children[1]
    const noCSSSelectors = section.children[2]

    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Divider />
        </Typography>

        <Typography variant='p'>
          Until now in the training we were using inline-styling most of the time and we weren't able to compare those into details
          to see which is what and which one is more suitable for styling components.
          Let's go ahead and demonstrate some of cons and pros
        </Typography>

        <Typography variant='p'>
          One of the benefits when using inline styling approach is that the properties applied are stronger that the ones
          declared in a stylesheet (applied via className).
          Example:
        </Typography>

        <Typography variant='p'>
          The properties applied in this form always will be applied first because they are rendered in the HTML
          <Code>
            {divWithInlineStyle}
          </Code>
        </Typography>

        <Typography variant='p'>
          This property will be ignored and won't get applied because the properties applied with inline will get rendered after the head
          tag.
          <Code>
            {redBg}
          </Code>
          <Code>
            {divWithClassName}
          </Code>
        </Typography>
        <Typography variant='title' id={conditionalRendering.id}>{conditionalRendering.display}</Typography>
        <Typography variant='p'>
          In React we often find ourselves using conditional rendering because of react nature, so let's do a comparison when changing
          some properties depending on the given props.
          Example:
          <Typography variant='p'>
            Let's say that we want to have a button with red background when an error has occurred.
            <Code>
              {errorBtn}
            </Code>
            As you can see above, using inline styling when it comes to change one property is very easy.
          </Typography>
        </Typography>

        <Typography variant='title'>
          Is this approach the best for styling React Components ?
        </Typography>

        <Typography variant='p'>
          There are no specific approach to handle styling in React, this approach it can be handy when you are about
          to develop a small project, but considering this for scalable applications it would be good to consider Stylesheets or css in jss.
        </Typography>


        <Typography variant='p'>
          Let's say we are building an applications that shows logs and tracks user events,
          as we can imagine we would have a list that it can go to 1000 rows or more.
          Let's see how a list would look in real life app.
         <Typography variant='p'>This list is rendered in HTML
          <Code>
              {biList}
            </Code>
          </Typography>
          So As you can see every style property is written in html and duplicated for each row, so as you can guess when rendering a list as the ones above the
           HTML would grow larger and will cause lag or even worse not respond at all.
        </Typography>

        <Typography variant='title' id={noPseudClasses.id}>
          {noPseudClasses.display}
        </Typography>
        <Typography variant='p'>
          When using inline styling you cannot use the PseudoClasses like <code>:hover</code>, <code>:active</code>, <code>:checked</code>, <code>:focused</code>.
          <Typography variant='p'>
            We often want to indicate when a link is on hover let's se how that works when using this method of styling.
            <Code>
              {hoverStateInline}
            </Code>
            As you can see we should manually add a listeners to detect if we are over link if true we should change state to true, otherwise
            make it false.
          </Typography>
        </Typography>
        <Typography variant='title' id={noCSSSelectors.id}>
          {noCSSSelectors.display}
        </Typography>
        <Typography variant='p'>
          While using inline styling you cannot use the power of CSS Selectors because we write style for each element.
          <br />
          Let's say that we have a Link and it have two children a label and an icon.
          <Code>
            {noSelectors}
          </Code>
          Let's compare this in the next section were CSS Selectors are enabled.
        </Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(InlineStyling)
