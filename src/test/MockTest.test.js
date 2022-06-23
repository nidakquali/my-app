import React, {Component} from 'react'
import {render, container} from '@testing-library/react'
import ComponentOne from '../components/ComponentOne'
  
// arrange - mock setup
jest.mock('../components/ComponentTwo', () => () => <div id="mockComponentTwo">Hello Mock ComponentTwo</div>)
jest.mock('../components/ComponentThree', () => () => <div id="mockComponentThree">Hello Mock ComponentThree</div>)
 
describe("mock component tests", () => {
   test("mocked components in react", () => {
       // act
       const {container} = render(<ComponentOne />)
  
       // assert
       console.log(container.outerHTML)
       const mockComponentTwo = container.querySelector('div#mockComponentTwo')
       const mockComponentThree = container.querySelector('div#mockComponentThree')
       expect(mockComponentTwo).toBeInTheDocument()
       expect(mockComponentThree).toBeInTheDocument()
   })
})