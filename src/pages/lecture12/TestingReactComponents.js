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
import ReactRedux from 'assets/images/lecture8/react_redux.png';
import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { Button } from "@material-ui/core";
const styles = ({ typography }) => ({
  root: {},
})

const baseComponent = `
class TestingReactComponents extends React.Component {

  render() {
    const { classes, section } = this.props
    ...
    return (
      <Fragment>
      ...
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TestingReactComponents))`

const baseComponentShallow = `
import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import routes from 'utils/Routes'
import { PAGES } from 'Constants'
import Divider from 'presentations/Divider';
import TestingReactComponents from "pages/lecture12/TestingReactComponents";
import ThemeProvider from 'utils/ThemeProvider';

test('Should be able to at least render first tree!', () => {
  const section = routes.find(next => next.id === PAGES.LECTURE_12.ID)
  // Render the testing react components page, store is mocked to be only {}
  const wrapper = shallow(<TestingReactComponents store={mockStore({})} section={section} />)

  // Here is how you can dive into the sub tree of this component, connected component, with styles, with context of our base component
  // basically dive 3 times, to find the Divier then, which is rendered somewhere within our class TestingReactComponents extends React.Component
  expect(wrapper.dive().dive().dive().find(Divider)).to.have.lengthOf(1)
})`
const baseComponentMount = `
import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import routes from 'utils/Routes'
import { PAGES } from 'Constants'
import Divider from 'presentations/Divider';
import TestingReactComponents from "pages/lecture12/TestingReactComponents";
import ThemeProvider from 'utils/ThemeProvider';

test('Should be able to mount itself and the entire tree of components', () => {
  const section = routes.find(next => next.id === PAGES.LECTURE_12.ID)
  // Render the testing react components page
  const wrapper = mount(<ThemeProvider><TestingReactComponents store={mockStore({})} section={section} /></ThemeProvider>)

  expect(wrapper.find(Divider)).to.have.lengthOf(1)
})`

const baseComponentStatic = `
import React from 'react'
import { render } from 'enzyme'
import { expect } from 'chai'
import routes from 'utils/Routes'
import { PAGES } from 'Constants'
import Divider from 'presentations/Divider';
import TestingReactComponents from "pages/lecture12/TestingReactComponents";
import ThemeProvider from 'utils/ThemeProvider';

test('Should be able statically render itself, here we are only interested in rendered HTML', () => {
  const section = routes.find(next => next.id === PAGES.LECTURE_12.ID)
  // Render the testing react components page
  const wrapper = render(<ThemeProvider><TestingReactComponents store={mockStore({})} section={section} /></ThemeProvider>)
  expect(wrapper.find(\`#divider\`)).to.have.lengthOf(1)
})`

const shallowRenderingExample = `
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Foo from 'presentations/Foo'

describe('<MyComponent />', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<MyComponent />)
    expect(wrapper.find(Foo)).to.have.lengthOf(3)
  })

  it('renders an \`.icon-star\`', () => {
    const wrapper = shallow(<MyComponent />)
    expect(wrapper.find('.icon-star')).to.have.lengthOf(1)
  })

  it('renders children when passed in', () => {
    const wrapper = shallow((
      <MyComponent>
        <div className="unique" />
      </MyComponent>
    ))
    expect(wrapper.contains(<div className="unique" />)).to.equal(true)
  })

  it('simulates click events', () => {
    const onButtonClick = sinon.spy()
    const wrapper = shallow(<Foo onButtonClick={onButtonClick} />)
    wrapper.find('button').simulate('click')
    expect(onButtonClick).to.have.property('callCount', 1)
  })
})`

const mountingExample = `
import { mount } from 'enzyme';
import sinon from 'sinon';
import Foo from './Foo';

describe('<Foo />', () => {
  it('calls componentDidMount', () => {
    sinon.spy(Foo.prototype, 'componentDidMount');
    const wrapper = mount(<Foo />);
    expect(Foo.prototype.componentDidMount).to.have.property('callCount', 1);
  });

  it('allows us to set props', () => {
    const wrapper = mount(<Foo bar="baz" />);
    expect(wrapper.props().bar).to.equal('baz');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount((
      <Foo onButtonClick={onButtonClick} />
    ));
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
});`

const staticRenderExample = `
import React from 'react';
import { render } from 'enzyme';
import PropTypes from 'prop-types';

describe('<Foo />', () => {
  it('renders three \`.foo-bar\`s', () => {
    const wrapper = render(<Foo />);
    expect(wrapper.find('.foo-bar')).to.have.lengthOf(3);
  });

  it('rendered the title', () => {
    const wrapper = render(<Foo title="unique" />);
    expect(wrapper.text()).to.contain('unique');
  });

  it('can pass in context', () => {
    function SimpleComponent(props, context) {
      const { name } = context;
      return <div>{name}</div>;
    }
    SimpleComponent.contextTypes = {
      name: PropTypes.string,
    };

    const context = { name: 'foo' };
    const wrapper = render(<SimpleComponent />, { context });
    expect(wrapper.text()).to.equal('foo');
  });
});`

class TestingReactComponents extends React.Component {

  render() {
    const { classes, section } = this.props
    const gettingStarted = section.children[0]
    const shallowRendering = section.children[1]
    const fullDomRendering = section.children[2]
    const staticRendering = section.children[3]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            In this section we are going to introduce the concept of Testing our Components and Code!
          </Typography>
          <Divider id="divider"/>
        </Typography>
        <Typography variant='title' id={gettingStarted.id}>
          {gettingStarted.display}
        </Typography>
        <Typography variant='p'>
          The libraries used to test React Components in conjuction with Jest are:
          <ol>
            <li><SimpleLink href="https://airbnb.io/enzyme/">Enzyme</SimpleLink> and</li>
            <li><SimpleLink href="https://www.chaijs.com/">Chai</SimpleLink></li>
          </ol>
        </Typography>
        <Typography variant='title' id={shallowRendering.id}>
          {shallowRendering.display} <SimpleLink href="https://airbnb.io/enzyme/docs/api/shallow.html">API</SimpleLink>
        </Typography>
        <Typography variant='p'>
          Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components. It basically renders this component but doesn't continue to render any of the further children! It is only the first level render, that tests out only the current component! With version 3 of Enzyme, which is what we are using the <Italic>shallow</Italic> API does call React lifecycle methods such as <Italic>componentDidMount</Italic> and <Italic>componentDidUpdate</Italic>
        </Typography>
        <Typography variant='p'>
          <Code>
            {shallowRenderingExample}
          </Code>
        </Typography>
        <Typography variant='p'>
          Let us also use the Component that renders the page that we are at:
          <Code>
            {baseComponent}
          </Code>
          In order to test it out here it is how it looks like:
          <Code>
            {baseComponentShallow}
          </Code>
          If this component renders another component as a child, that component won't be actually mounted, but its props and creation will be initiated!
        </Typography>
        <Typography variant='title' id={fullDomRendering.id}>
          {fullDomRendering.display} <SimpleLink href="https://airbnb.io/enzyme/docs/api/mount.html">API</SimpleLink>
        </Typography>
        <Typography variant='p'>
          Full DOM rendering is ideal for use cases where you have components that may interact with DOM APIs or need to test components that are wrapped in higher order components. Full DOM rendering requires that a full DOM API be available at the global scope. This means that it must be run in an environment that at least “looks like” a browser environment. <Italic>Note: unlike shallow or static rendering, full rendering actually mounts the component in the DOM, which means that tests can affect each other if they are all using the same DOM. Keep that in mind while writing your tests and, if necessary, use .unmount() or something similar as cleanup.</Italic>
          <Code>
            {mountingExample}
          </Code>
          At our base component this would look like:
          <Code>
            {baseComponentMount}
          </Code>
        </Typography>
        <Typography variant='p'>
          The full guide is located here: 
        </Typography>

        <Typography variant='title' id={staticRendering.id}>
          {staticRendering.display} <SimpleLink href="https://airbnb.io/enzyme/docs/api/render.html">API</SimpleLink>
        </Typography>
        <Typography variant='p'>
          Use enzyme's render function to generate HTML from your React tree, and analyze the resulting HTML structure. 
        </Typography>
        <Typography variant='p'>
          <Italic>render</Italic> returns a wrapper very similar to the other renders in enzyme, mount and shallow; however, render uses a third party HTML parsing and traversal library Cheerio. Example:
          <Code>
            {staticRenderExample}
          </Code>
          At our base component this would look like:
          <Code>
            {baseComponentStatic}
          </Code>
        </Typography>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TestingReactComponents))
