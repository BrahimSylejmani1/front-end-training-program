/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import React from 'react'
import { shallow, mount, render } from 'enzyme'
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

  console.log(wrapper);
  // console.log('wrapper', wrapper)
  // Here is how you can dive into the sub tree of this component, connected component, with styles, with context of our base component
  // basically dive 3 times, to find the Divier then, which is rendered somewhere within our class TestingReactComponents extends React.Component
  // expect(wrapper.dive().dive().dive().find(Divider)).to.have.lengthOf(1)
})


test('Should be able to mount itself and the entire tree of components', () => {
  const section = routes.find(next => next.id === PAGES.LECTURE_12.ID)
  // Render the testing react components page
  const wrapper = mount(<ThemeProvider><TestingReactComponents store={mockStore({})} section={section} /></ThemeProvider>)

  expect(wrapper.find(Divider)).to.have.lengthOf(1)
})

const Simple = (props) => {
  return (
    <div>
      Simple component
      <ol>
        <li className="first">First</li>
        <li id="next">Second</li>
      </ol>
    </div>
  )
}


test('Should be able statically render itself, here we are only interested in rendered HTML', () => {
  const section = routes.find(next => next.id === PAGES.LECTURE_12.ID)
  const testingReactComponents = section.children.find(which => which.id === PAGES.LECTURE_12.TESTING_REACT_COMPONENTS)
  const gettingStarted = testingReactComponents.children[0]

  // Render the testing react components page
  const wrapper = render(<Simple/>)

  console.log('wrapper', wrapper)
  expect(wrapper.find(`.first`)).to.have.lengthOf(1)
  expect(wrapper.find(`#next`)).to.have.lengthOf(1)
})

test('Should be able statically render itself, here we are only interested in rendered HTML', () => {
  const section = routes.find(next => next.id === PAGES.LECTURE_12.ID)
  // Render the testing react components page
  const wrapper = render(<ThemeProvider><TestingReactComponents store={mockStore({})} section={section} /></ThemeProvider>)
  expect(wrapper.find(`#divider`)).to.have.lengthOf(1)
})