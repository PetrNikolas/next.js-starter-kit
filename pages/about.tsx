import * as React from 'react'
import {About} from '../src/components/about/About'
import {Page} from '../src/components/Page'

export default class AboutUs extends React.Component {
  render() {
    return (
      <Page>
        <About/>
      </Page>
    )
  }
}