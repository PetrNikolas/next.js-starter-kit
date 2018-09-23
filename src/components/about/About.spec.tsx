import * as React from 'react'
import {shallow} from 'enzyme'

import {About} from './About'

describe('Component', () => {
  describe('About', () => {
    it('should render without throwing an error', function () {
      expect(shallow(<About/>).contains(
        <h1>
          About
        </h1>
      )).toEqual(true)
    })
  })
})
