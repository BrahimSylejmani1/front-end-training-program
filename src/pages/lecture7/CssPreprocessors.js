/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Code from "presentations/Code";
import PageLink from "presentations/rows/nav/PageLink";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
const styles = ({ typography }) => ({
  root: {},
})

const variables = `
//app.scss
$lead-color: #a2138c;
$base-color: #c6538c;
$error-color: red;
$border-dark: rgba($base-color, 0.88);
$spacing: 8px;


.alert {
  border: 1px solid $border-dark;
  padding: $spacing;
  /*nesting selector*/
  &.alert-error{
      border-color: $error-color
  }
}`

const sassNesting = `
nav {
    display: flex;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  
    li { display: inline-block; }

    
    a {
      display: block;
      padding: 6px 12px;
      text-decoration: none;
    }
  }`

const cssNesting = `
nav{
    display: flex;
}
nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  nav li {
    display: inline-block;
  }
  nav a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
`
const mixins = `
@mixin transform($property) {
    -webkit-transform: $property;
    -ms-transform: $property;
    transform: $property;
  }
.box { @include transform(rotate(30deg)); }
`
const noMixins = `
.box {
    -webkit-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    transform: rotate(30deg);
}
`

const operators = `
.container {
    width: 100%;
}
  
article[role="main"] {
    float: left;
    width: 600px / 960px * 100%;
}
  
aside[role="complementary"] {
    float: right;
    width: 300px / 960px * 100%;
}
`
const operatorsManually = `
.container {
    width: 100%;
}
  
article[role="main"] {
    float: left;
    width: 62.5%;
}
  
aside[role="complementary"] {
    float: right;
    width: 31.25%;
}
`
class CssPreprocessors extends React.Component {
  render() {
    const { classes, section } = this.props
    const themeing = section.children[0]
    const nestingTitle = section.children[1]
    const mixinsTitle = section.children[2]
    const operatorsTitle = section.children[3]

    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Divider />
        </Typography>
        <Typography variant='p'>
            A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax. There are many CSS preprocessors to choose from, however most CSS preprocessors will add some features that don't exist in pure CSS, such as mixin, nesting selector,
            inheritance selector, and so on. These features make the CSS structure more readable and easier to maintain.
            To use a CSS preprocessor, you must install a CSS compiler on your web server.
        </Typography>
        <Typography>
            Here are a few of the most popular CSS preprocessors:
            <ol>
                <li>Sass</li>
                <li>LESS</li>
                <li>Stylus</li>
                <li>PostCSS</li>
            </ol>
        </Typography>
        <Typography>
            So as stated above using CSS preprocessors we enable some extra features (CSS with superpowers).<br/>
            let's mention a few of them and do some comparisons.<br/>
            NOTE: While demoing we are going to use SASS because it is most popular one.
        </Typography>

        <Typography variant='title' id={themeing.id}>{themeing.display}</Typography>
        <Typography>
            Themeing using CSS preprocessors is quite easy because it compiles and it means that we can use variables and store some values and reuse them :)<br/>
            Let's say that we are going to build a simple landing page and the designer gave us all the colors used on his/her designs.
        </Typography>
        <Code>
            {variables}
        </Code>
        <Typography>
            So you can create a file called variable.scss store all your generic colors and spacing variables and reuse them
            in other components 
        </Typography>
        
        <Typography variant='title' id={nestingTitle.id}>{nestingTitle.display}</Typography>

        <Typography>
            When writing HTML you've probably noticed that it has a clear nested and visual hierarchy. CSS, on the other hand, doesn't.
            Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. Be aware that overly nested rules will result in over-qualified CSS that could prove hard to maintain and is generally considered bad practice.
            With that in mind, here's an example of some typical styles for a site's navigation:
        </Typography>
        <div style={{width: '50%'}}>
            <Code>{sassNesting}</Code>
        </div>
        <div style={{width: '50%'}}>
            <Code>{cssNesting}</Code>
        </div>
    
        <Typography variant='title' id={mixinsTitle.id}>{mixinsTitle.id}</Typography>

        <Typography>
            Some things in CSS are a bit tedious to write, especially with CSS3 and the many vendor prefixes that exist.
            A mixin lets you make groups of CSS declarations that you want to reuse throughout your site.
            You can even pass in values to make your mixin more flexible. 
            A good use of a mixin is for vendor prefixes. Here's an example for transform.
        </Typography>
        <div style={{width: '50%'}}>
            <Code>{mixins}</Code>
        </div>
        <div style={{width: '50%'}}>
            <Code>{noMixins}</Code>
        </div>
        <Typography>
            To create a mixin you use the @mixin directive and give it a name. We've named our mixin transform. 
            We're also using the variable $property inside the parentheses so we can pass in a transform of whatever we want.
            After you create your mixin, you can then use it as a CSS declaration starting with @include followed by the name of the mixin.
        </Typography>
        <Typography variant='title' id={operatorsTitle.id}>{operatorsTitle.display}</Typography>
        <Typography variant='p'>
            Doing math in your CSS is very helpful. Sass has a handful of standard math operators like +, -, *, /, and %. 
            In our example we're going to do some simple math to calculate widths for an aside & article.
        </Typography>
        <div style={{width: '50%'}}>
            <Code>{operators}</Code>
        </div>
        <div style={{width: '50%'}}>
            <Code>{operatorsManually}</Code>
        </div>
      </Fragment>
    )
  }
}

export default withStyles(styles)(CssPreprocessors)
