/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import PageLink from "presentations/rows/nav/PageLink";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import { Italic } from "presentations/Label";
const styles = ({ typography }) => ({
  root: {},
})

class StylingApproaches extends React.Component {
  render() {
    const { classes, section } = this.props
    let inlineStyling = section.children[0]
    let vanillaCss = section.children[1]
    let cssPreProcessors = section.children[2]
    let cssInJs = section.children[3]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Divider />
        </Typography>
        <Typography variant='p'>
          There are numerous approaches to add style in React components, but we are going to mention the ones that are most popular, we are also going to compare each styling approach and mention pros and cones for each one.
          <ol>
            <li>Inline styling</li>
            <li>Vanilla CSS / CSS Stylesheet</li>
            <li>Using CSS preprocessors SASS/LESS / CSS Stylesheet</li>
            <li>CSS in JS</li>
          </ol>
        </Typography>

        <Typography variant='title' id={inlineStyling.id}>
          {inlineStyling.display}
        </Typography>
        <Typography variant='p'>
          The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string.
          </Typography>
        <Typography variant='p'>
          Pros.
          <ol>
            <li>The properties applied inline are stronger than the properties applied via classnames.</li>
            <li>Conditional styling for one property is easier </li>
          </ol>
        </Typography>
        <Typography variant='p'>
          Cons.
          <ol>
            <li>No CSS Pseudo Classes <Italic>:hover</Italic>, <Italic>:active</Italic>, <Italic>:checked</Italic>, <Italic>:focused</Italic> <Italic>:first</Italic>-child </li>
            <li>No CSS Pseudo Elements <Italic>::after</Italic>, <Italic>::before</Italic>, <Italic>::selection</Italic> etc </li>
            <li>Style is written in html, imagine a table with 1000 rows and all elements have inline styling applied it can grow to large and cause lag </li>
            <li>There are no css selectors, impossible to style children from parent</li>
            <li>You will need to handle responsiveness with javascript instead of css (Pain right)</li>
            <li>No key frames (no advance animation)</li>
          </ol>
        </Typography>


        {/* Vanilla CSS */}
        <Typography variant='title' id={vanillaCss.id}>
          {vanillaCss.display}
          <Typography variant='p'>
            Vanilla definition from google: "having no special or extra features; ordinary or standard".  It is used commonly as a term to describe the pure minimal baseline of something. Vanilla CSS, Vanilla JS (Javascript) etc.
          </Typography>
        </Typography>
        <Typography variant='p'>
          Pros.
          <ol>
            <li>Css is injected in head tag and it is loaded once.</li>
            <li>Use of Pseudo Elements and Pseudo Classes as well selectors</li>
            <li>You can use @media queries to handle responsiveness.</li>
            <li>You can use @key frames, to do super animations.</li>
          </ol>
          Cons.
          <ol>
            <li>
              No themeing, it means you cannot define variables and reuse those in other components,
              you will copy past colors every time from component to a component
            </li>
            <li>
              You need to use a styling convention like BEM in order to have unique classes and be sure that they don't overlap,
              but this becomes complicated quickly and won’t scale. </li>
            <li>Can't do autoprefixes, it should be done manually.</li>
          </ol>
        </Typography>

        {/* Using CSS preprocessors SASS/LESS*/}
        <Typography variant='title' id={cssPreProcessors.id}>{cssPreProcessors.display}</Typography>
        <Typography>
        A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax. 
        There are many CSS preprocessors to choose from, however most CSS preprocessors will add some features that don't exist in 
        pure CSS, such as mixin, nesting selector, inheritance selector, and so on. 
        These features make the CSS structure more readable and easier to maintain.
        </Typography>
        <Typography variant='p'>
        Pros.
          <ol>
            <li>You can do theming using sass/less variables</li>
            <li>The css is injected at the head tag. In terms of performance is way faster / same as vanilla css</li>
            <li>Most CSS preprocessors will add some features that don't exist in pure CSS, such as mixin, nesting selector </li>
            <li>Minifications</li>
            <li>Autoprefixes Enabled</li>
            <li>Nesting selector</li>
          </ol>
          Cons.
          <ol>
            <li>
              Same as Vanilla CSS you those need use a styling convention like BEM in order to have unique classes and be sure 
              that they don't overlap.
            </li>
            <li>Not the best way to handle theming with React Ecosystem</li>
          </ol>
        </Typography>

        {/* CSS in JS*/}
        <Typography variant='title' id={cssInJs.id}>{cssInJs.display}</Typography>
        <Typography>
          JSS is an authoring tool for CSS which allows you to use JavaScript to describe styles in a declarative, conflict-free and reusable way. It can compile in the browser, server-side or at build time in Node. JSS is framework agnostic. It consists of multiple packages: the core, plugins, framework integrations and others
        </Typography>
        <Typography variant='p'>
          Pros.
          <ol>
            <li>
              Real CSS. JSS generates actual CSS, not Inline Styles. It supports every existing CSS feature. CSS rules are created once and reused across the elements using its class name in contrary to Inline Styles. Also, when DOM elements get updated, previously created CSS rules are applied.
            </li>
            <li>
              Collision-free selectors. JSS generates unique class names by default. It allows avoiding the typical CSS problem, where everything is global by default. It completely removes the need for naming conventions.
            </li>
            <li>
              Code reuse. Using JavaScript as a host language gives us an opportunity to reuse CSS rules in a way that is not possible with regular CSS. You can leverage JavaScript modules, variables, functions, math operations and more. If done right, it can still be fully declarative.
            </li>
            <li>
              Ease of removal and modification. Explicit usage of CSS rules allows you to track them down to the consumer and decide if it can be safely removed or modified
            </li>
            <li>
              Dynamic styles. Using JavaScript functions and Observables makes it possible to dynamically generate styles in the browser, giving you an opportunity to access your application state, browser APIs or remote data for styling. You can not only define styles once but also update them at any point in time in an efficient way.
            </li>
            <li>
              User-controlled animations. JSS handles CSS updates so efficiently that you can create complex animations with it. Using function values, Observables and combining them with CSS transitions will give you maximum performance for user-controlled animations. For predefined animations, it is still better to use @keyframes and transitions, because they will unblock the JavaScript thread completely.
            </li>
            <li>
              Critical CSS. To optimize time to first paint, you can use server-side rendering and extract critical CSS. You can couple the rendering of CSS with the rendering of HTML so that no unused CSS gets generated. It will result in a minimal critical CSS extracted during server-side rendering and allow you to inline it.
            </li>
            <li>
              Plugins. JSS core implements a plugin-based architecture. It allows you to create custom plugins which can implement custom syntax or other powerful abilities. JSS has many official plugins, which can be installed individually or using a default preset. A good example of a community plugin is jss-rtl.
            </li>
            <li>
              Expressive syntax. Thanks to various plugins, JSS allows you to have nesting, global selectors, composition with existing global class names. E.g. jss-plugin-expand allows you to express properties like box-shadow even in a more readable way than it is possible with CSS. You can also use template strings if you want to copy-paste styles directly from the browser dev tools.
            </li>
            <li>
              Full isolation. Another useful plugin example is jss-plugin-isolate, which allows you to isolate your elements from global cascading rules fully and potentially overwriting unwanted properties. Especially useful when creating a widget that is supposed to render inside of a third-party document.
            </li>
            <li>React integration. The React-JSS package provides some additional features:
              <ul>
                <li>
                  Dynamic Theming - allows context based theme propagation and runtime updates.
                </li>
                <li>
                  Critical CSS extraction - only CSS from rendered components gets extracted.
                </li>
                <li>
                 Lazy evaluation - Style Sheets get created when a component gets mounted.
                </li>
                <li>
                  The static part of a Style Sheet gets shared between all elements.
                </li>
                <li>
                  Function values and rules are updated automatically with props as an argument.
                </li>
              </ul>
            </li>
            <li>
              JavaScript build pipeline. There is no need for additional build pipeline configuration for CSS. Whatever tool you choose to build your JavaScript, it will just work with JSS.
            </li>
          </ol>
          Cons.
          <ol>
            <li>The initial setup it requires more effort.</li>
          </ol>
        </Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(StylingApproaches)
