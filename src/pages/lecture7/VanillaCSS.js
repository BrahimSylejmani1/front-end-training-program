/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Code from "presentations/Code";
import PageLink from "presentations/rows/nav/PageLink";
import IconButton from '@material-ui/core/IconButton'
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import 'pages/lecture7/Link.css'
const styles = ({ typography }) => ({
  root: {},
})


const cssLink = `
  //link.css
  .link{
    background-color: '#fff';
    width: 400;
    color: #999;
  }
  .link:hover{
    color: #000
  }
`

const hoverState = `
import link.css
const Link props => {
    const {to,children} = props
    return(
      <a className='link'
      href={to}>
        {children}
      </a>
    )
}
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

const styles = {
  link:{
    backgroundColor: '#fff',
    width: 400,
    marginBottom: 20
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
    const {to, isLastOne} = this.props
    return(
      <a style={{
        ...styles.link,
        marginBottom:isLastOne ? 0 : styles.link.marginBottom}} href={to}>
        <label style={styles.label}>
          Go to google
        </label>
        <IconButton style={styles.icon}>
          <Add/>
        </IconButton>
      </a>
    )
  }
}`

const withSelectorsStyleSheed  = `
//link.css
  .link{
    backgroundColor: #fff;
    width: 400;
    margin-bottom: 20px;
  }
  .labelStyle {
    color: #999;
    oveflow: hidden;
    text-oveflow: ellipsis;
    white-space: no-wrap;
  }
  .link:first-child{
    margin-bottom: 0;
  }
  .iconStyle:{
    margin-left: 8px
  }
`

const withSelectors = `
import link.css
const LinkWithArrows = props =>{
  const {to,children} = props
  return(
    <a className='link' href={to}>
      <label className='label'>
        {children}
      </label>
      <IconButton className='iconStyle'>
        <Add/>
      </IconButton>
    </a>
  )
}`

const LinkWithArrows = props =>{
  const {to,children} = props
  return(
    <a className='link' href={to}>
      <label className='label'>
      {children}
      </label>
    </a>
  )
}
const beforeArrowCss  = `
//link.css
.link {
  background-color: #fff;
  width: 400;
}
.link::before {
  content: '>';
  font-size: 18px;
  color: red;
  margin: 0 10px;
}
.link::after {
  content: '<';
  font-size: 18px;
  color: red;
  margin: 0 10px;
}
.labelStyle {
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
`
const beforeArrow = `
import link.css
const LinkWithArrows = props =>{
  const {to,children} = props
  return(
    <a className='link' href={to}>
      <label className='label'>
        {children}
      </label>
    </a>
  )
}`

class VanillaCss extends React.Component {
  render() {
    const { classes, section } = this.props
    const useOfPseudoClasses = section.children[0]
    const useOfSelectors = section.children[1]
    const useOfPseudElements = section.children[2]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            Vanilla definition from google: "having no special or extra features; ordinary or standard".  It is used commonly as a term to describe the pure minimal baseline of something. Vanilla CSS, Vanilla JS (Javascript) etc.
          </Typography>
          <Divider />
        </Typography>
        <Typography variant='p'>
          Let's demo this and look at pros and cons on standard CSS
        </Typography>
        <Typography variant='title' id={useOfPseudoClasses.id}>
          {useOfPseudoClasses.display}
        </Typography>
        <Typography variant='p'>
          Some of the pros for this styling approach are that we can use the Pseudo Elements and Pseudo Classes. <br/>
          Let's take a look to the component that we did in the previous section and rewrite that using vanilla css.
        <Code>
          {cssLink}
        </Code>
        <Code>
          {hoverState}
        </Code>
        </Typography>
        <Typography>
          Look the component above how simple it becomes when using vanilla css, there is no need to add listeners to detect
          if it is on hover or not. <br/>
          
          When using the inline styling the component looked like this.
          <Code>{hoverStateInline}</Code>
        </Typography>
        <Typography variant="title" id={useOfSelectors.id}>{useOfSelectors.display}</Typography>
        <Typography variant='p'>
          When using vanilla css we can use CSS Selectors and we are able to give some styling properties to children, 
          siblings, also we can add some extra properties when the children is the last one eg.
          <code>.parent .child:last-child {`{...someStyle}`}</code>.
        </Typography>

        <Typography variant="p">Let's give a try and convert the compoent below using vanilla CSS</Typography>
        <Typography variant="title">Using inline styling</Typography>
        <Code>
          {noSelectors}
        </Code>
        <Typography variant="title" id={useOfPseudElements.id}>{useOfPseudElements.display}</Typography>
        <Code>
          {withSelectorsStyleSheed}
        </Code>
        <Code>
          {withSelectors}
        </Code>
        
        <Typography variant="p">
          So as you can see there is no need to specify a prop or to calculate the index and identify if it is the last one or not. but instead just use css selectors.
        </Typography>

        <Typography variant="title">Use of Pseud Elements</Typography>
        <Typography variant="p">
          A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s). For Example: <br/>
          Let's say that we have a link and we want to give an extra arrow before and after text of the link.
        <Code>
          {beforeArrowCss}
        </Code>
        <Code>
          {beforeArrow}
        </Code>
        <LinkWithArrows>I have arrows</LinkWithArrows>
        </Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(VanillaCss)
