/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import PageLink from "presentations/rows/nav/PageLink";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import Label, { Italic, Bold, Highlighted } from "presentations/Label";
import Code from "presentations/Code";
import SimpleLink from "presentations/rows/SimpleLink";
import SyntaxGif from 'assets/images/lecture7/syntax.gif'
import { Table, TableHead, TableCell, TableBody, TableRow } from "@material-ui/core";
const styles = ({ typography }) => ({
  root: {},
})

const cssExample = `
body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}
`
const syntaxExample = `
p {
  color: red;
  text-align: center;
}
`

const idExample = `
#para1 {
  text-align: center;
  color: red;
}
`
const classExample = `
.center {
  text-align: center;
  color: red;
}
`

const classSpecificExample = `
p.center {
  text-align: center;
  color: red;
}
`

const multipleClassExample = `
<p class="center large">This paragraph refers to two classes.</p>
`

const universalSelector = `
* {
  text-align: center;
  color: blue;
}
`

const noneGroupedExample = `
h1 {
  text-align: center;
  color: red;
}

h2 {
  text-align: center;
  color: red;
}

p {
  text-align: center;
  color: red;
}
`

const groupedExample = `
h1, h2, p {
  text-align: center;
  color: red;
}
`

class Intro extends React.Component {
  render() {
    const { classes, section } = this.props
    let whatIsCss = section.children[0]
    let syntax = section.children[1]
    let selectors = section.children[2]
    let examples = section.children[3]

    const percentageExample = { width: '25%', padding: 16}
    const cardExample = { 
      width: 320,
      height: 320,
      borderRadius: 16,
      background: 'white',
      margin: 16,
      padding: 16,
      border: 3,
      borderColor: 'grey',
      wordWrap: 'break-word',
      borderStyle: 'solid'
    }
    const anotherCardExample = { 
      width: 320,
      height: 320,
      borderRadius: 16,
      background: 'white',
      margin: 16,
      padding: 16,
      border: '3px solid grey',
      wordWrap: 'break-word'
    }
    const calculatedWidthExample = { 
      width: `calc(100% - ${anotherCardExample.width + cardExample.width + 16 * 6}px)`,
      height: 320,
      borderRadius: 16,
      background: 'white',
      margin: 16,
      padding: 16,
      border: '3px solid grey',
      wordWrap: 'break-word'
    }

    const row = {
      height: 16 * 2 + 8
    }
    const cell = {
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 8,
      paddingBottom: 8,
      fontSize: 12,
      borderBottom: '1px solid green',
      display: 'table-cell'
    }
    const head = {
      fontWeight: 'bold',
      height: 16 * 2 + 32
    }
    
    const card = { background: 'white', padding: 8, margin: 8 } 
    
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            The content of this section is inspired and referenced from <SimpleLink href="https://www.w3schools.com/css">W3 Schools</SimpleLink>
          </Typography>
          <Divider />
        </Typography>
        <Typography id={whatIsCss.id} variant='title'>
          {whatIsCss.display}
        </Typography>
        <Typography variant='p'>
          <ol>
            <li>
              <Bold>CSS</Bold> stands for <Bold>C</Bold>ascading <Bold>S</Bold>tyle <Bold>S</Bold>heets
            </li>
            <li>
              CSS describes how HTML elements are to be displayed on screen, paper, or in other media
            </li>
            <li>
              CSS saves a lot of work. It can control the layout of multiple web pages all at once
            </li>
            <li>
              External stylesheets are stored in <Bold>CSS files</Bold>
            </li>
          </ol>
        </Typography>
        <Typography variant='p'>
          CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.
          <Code>
            {cssExample}
          </Code>
        </Typography>
        <Typography id={syntax.id}  variant='title'>
          {syntax.display}
        </Typography>
        <Typography variant='p'>
          A CSS rule-set consists of a selector and a declaration block:
        </Typography>
        <img src={SyntaxGif} />
        <Typography variant='p'>
          <ol>
            <li>The selector points to the HTML element you want to style.</li>
            <li>The declaration block contains one or more declarations separated by semicolons.</li>
            <li>Each declaration includes a CSS property name and a value, separated by a colon.</li>
            <li>Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.</li>
          </ol>
          Example:
          <Code>{syntaxExample}</Code>
          <ol>
            <li><Highlighted>p</Highlighted> is a <Bold>selector</Bold> in CSS (it points to the HTML element you want to style: {"<p>"}).</li>
            <li><Highlighted>color</Highlighted> is a property, and <Highlighted>red</Highlighted> is the property value</li>
            <li><Highlighted>text-align</Highlighted> is a property, and <Highlighted>center</Highlighted> is the property value</li>
          </ol>
        </Typography>
        <Typography id={selectors.id} variant='title'>
          {selectors.display}
        </Typography>
        <Typography variant='p'>
          CSS selectors are used to "find" (or select) the HTML elements you want to style.
        </Typography>
        <Typography variant='p'>
          We can divide CSS selectors into five categories:
          <ol>
            <li>Simple selectors (select elements based on name, id, class)</li>
            <li>Combinator selectors (select elements based on a specific relationship between them)</li>
            <li>Pseudo-class selectors (select elements based on a certain state)</li>
            <li>Pseudo-elements selectors (select and style a part of an element)</li>
            <li>Attribute selectors (select elements based on an attribute or attribute value)</li>
          </ol>
          Lets explain them quickly!
        </Typography>
        <Typography variant='title'>
          The CSS element Selector
        </Typography>
        <Typography variant='p'>
          The element selector selects HTML elements based on the element name. Syntax Example:
          <Code>
            {syntaxExample}
          </Code>
          Above, all {"<p>"} elements on the page will be center-aligned, with a red text color: 
        </Typography>
        <Typography variant='title'>
          The CSS id Selector
        </Typography>
        <Typography variant='p'>
          The id selector uses the id attribute of an HTML element to select a specific element.<br/>
          The id of an element is unique within a page, so the id selector is used to select one unique element!<br/>
          To select an element with a specific id, write a hash (#) character, followed by the id of the element.<br/>
          Example:
          <Code>{idExample}</Code>
        </Typography>
        <Typography variant='title'>
          The CSS class Selector
        </Typography>
        <Typography variant='p'>
          The class selector selects HTML elements with a specific class attribute.<br/>
          To select elements with a specific class, write a period (.) character, followed by the class name.<br/>
          Example:
          <Code>{classExample}</Code>
        </Typography>
        <Typography variant='p'>
          You can also specify that only specific HTML elements should be affected by a class.<br/>
          Example:
          <Code>{classSpecificExample}</Code>
        </Typography>
        <Typography variant='p'>
          HTML elements can also refer to more than one class.<br/>
          In this example the {"<p>"} element will be styled according to class="center" and to class="large":
          <Code>{multipleClassExample}</Code>
        </Typography>
        <Typography variant='title'>
          The CSS Universal Selector
        </Typography>
        <Typography variant='p'>
          The universal selector (*) selects all HTML elements on the page.<br/>
          Example:
          <Code>{universalSelector}</Code>
        </Typography>
        <Typography variant='title'>
          The CSS Grouping Selector
        </Typography>
        <Typography variant='p'>
          The grouping selector selects all the HTML elements with the same style definitions.<br/>
          Look at the following CSS code (the h1, h2, and p elements have the same style definitions):
          <Code>
            {noneGroupedExample}
          </Code>
          It will be better to group the selectors, to minimize the code. To group selectors, separate each selector with a comma.
          <Code>
            {groupedExample}
          </Code>
        </Typography>
        <Typography variant='title'>
          All CSS Simple Selectors
        </Typography>
        <Table>
          <TableHead>
            <TableRow><TableCell>Selector</TableCell><TableCell>Example</TableCell><TableCell>Description</TableCell></TableRow>
          </TableHead>
          <TableBody>
            <TableRow><TableCell>.class</TableCell><TableCell>.intro</TableCell><TableCell>Selects all elements with class="intro"</TableCell></TableRow>
            <TableRow><TableCell>#id</TableCell><TableCell>#firstname</TableCell><TableCell>Selects the element with id="firstname"</TableCell></TableRow>
            <TableRow><TableCell>*</TableCell><TableCell>*</TableCell><TableCell>Selects all elements</TableCell></TableRow>
            <TableRow><TableCell>element</TableCell><TableCell>p</TableCell><TableCell>	Selects all {"<p>"} elements</TableCell></TableRow>
            <TableRow><TableCell>element,element,..</TableCell><TableCell>div, p</TableCell><TableCell>Selects all {"<div>"} elements and all {"<p>"} elements</TableCell></TableRow>
          </TableBody>
        </Table>
        <Typography id={examples.id} variant='title'>
          {examples.display}
        </Typography>
        <Typography variant='p'>
          Think of <Bold>div</Bold>'s as boxes that you can use to display content. They are used to structure and layout anything really, from a whole page, to a small section.
          Lets look at some of the most used CSS properties and how they behave:
        </Typography>
        <div style={percentageExample}>I'm a 25% width div, with padding</div>
        <div style={percentageExample}>I'm a 25% width div, with padding</div>
        <div style={percentageExample}>I'm a 25% width div, with padding</div>
        <div style={percentageExample}>I'm a 25% width div, with padding</div>
        
        <Typography variant='p'>
          Margins and paddings can be used to describe how far the content is moved away externally/internally on a box
        </Typography>
        <div style={cardExample}>
          <Code>
            {JSON.stringify(cardExample, null, " ")}
          </Code>
        </div>
        <div style={anotherCardExample}>
          <Code>
            {JSON.stringify(anotherCardExample, null, " ")}
          </Code>
        </div>
        <div style={calculatedWidthExample}>
          <Code>
            {JSON.stringify(calculatedWidthExample, null, " ")}
          </Code>
        </div>
        <div style={{ fontSize: 26, fontWeight: 'bold', width: '100%', color: '#3cb9e2'}}>
          I'm a bold font with size 26 and a hexadecimal color of: #3cb9e2
        </div>
        <div style={{ fontSize: 18, fontWeight: 'bold', width: '100%', color: 'rgb(45,59,74)'}}>
          I'm a bold font with size 26 and a rgb color of: rgb(45,59,74)
        </div>
        <Typography variant='p'>
          The display property on CSS defines how the content will be, as the word suggests, displayed. See for yourself what type of display's are there. In this training program we are going to focus on Flex Layouts.
        </Typography>
        <div style={{width: '100%'}}>
          <div style={{display: 'inline-block', width: 320, ...card}}>320 px div with inline-block display</div>
          <div style={{display: 'inline-block', width: 320, ...card}}>320 px div with inline-block display</div>
          <div style={{display: 'inline-block', width: 320, ...card}}>320 px div with inline-block display</div>
          <div style={{display: 'inline-block', width: 320, ...card}}>320 px div with inline-block display</div>
          <div style={{display: 'inline-block', width: 320, ...card}}>320 px div with inline-block display</div>
        </div>
        <Typography variant='p'>
          Below lets look at a table tag and its styles
        </Typography>
        <table style={{width: '100%', borderCollapse: 'collapse'}}>
          <thead>
            <tr style={{...row, ...head}}>
              <td style={cell}>Cell 1</td>
              <td style={cell}>Cell 2</td>
              <td style={cell}>Cell 3</td>
            </tr>
          </thead>
          <tbody>
            {Array(15).fill(null).map((next, index) => {
              return (
                <tr key={index} style={row}>
                  <td style={cell}>A cell at index {index + 1}</td>
                  <td style={cell}>Second cell at index {index + 1}</td>
                  <td style={cell}>Third cell at index {index + 1}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <Typography variant='p'>
          For getting started with structuring content, flex layouts are very straightforward and quite flexible
        </Typography>
        <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
          <div style={{width: 320, height: 80, ...card}}>I'm within a flex layout on space between. I'm the left side</div>
          <div style={{width: 320, height: 80, ...card}}>I'm within a flex layout on space between. I'm the right side</div>
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-start', width: '100%'}}>
          <div style={{width: 320, height: 80, ...card}}>I'm within a flex layout on flex-start. I'm the first element</div>
          <div style={{flex: 1, width: 320, height: 80, ...card}}>I'm within a flex layout on flex-start. I do have flex: 1 assigned, which means I will fill the space in between</div>
          <div style={{width: 320, height: 80, ...card}}>I'm within a flex layout on flex-start. I'm the third element</div>
        </div>

        <Typography variant='p'>
          Divs with different can be nested to change content flow and direction
        </Typography>
        
        <div style={{display: 'flex', justifyContent: 'flex-start', width: '100%'}}>
          <div style={{display: 'flex', justifyContent: 'flex-start', flexFlow: 'column wrap', width: 320, ...card}}>
            <div style={{ width: '100%'}}>I'm simulating a left navigation</div>
            <div style={{ width: '100%'}}>Nav 1</div>
            <div style={{ width: '100%'}}>Nav 2</div>
            <div style={{ width: '100%'}}>Nav 3</div>
          </div>
          <div style={{display: 'flex', height: 720, justifyContent: 'flex-start', flexFlow: 'column wrap', flex: 1, ...card}}>
            <div style={{ width: '100%', height: 80, ...card, margin: 0}}>I have a fixed height</div>
            <div style={{ width: '100%', display: 'flex', flex: 1, alignItems: 'center', color: 'white', ...card, background: 'grey', margin: 0}}>
              <div style={{ display: 'flex', alignItems: 'center', flexFlow: 'column', width: '100%'}}>
                 <div>My first parent is aligning me to the center horizontally, while the second parent vertically, filling the background with grey, and occupying the vertical space left</div>
              </div>
            </div>
            <div style={{ width: '100%', height: 80, ...card, margin: 0}}>I have a fixed height</div>
          </div>
        </div>

        <Typography variant='p'>
          For more information on how to use flex layout follow this <SimpleLink href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">link</SimpleLink>
        </Typography>
        
      </Fragment>
    )
  }
}

export default withStyles(styles)(Intro)
