import * as React from 'react'
import {shallow} from 'enzyme'

import {Home} from './Home'

describe('Component', () => {
  describe('Home', () => {
    it('should render without throwing an error', function () {
      expect(shallow(<Home/>).contains(
        <h1>
          Next.js Starter Kit
        </h1>
      )).toEqual(true)
    })
  })
})
