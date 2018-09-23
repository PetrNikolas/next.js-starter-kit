import * as React from 'react'
import {About} from '../src/components/about/About'
import {Layout} from '../src/components/Layout'

export default class AboutUs extends React.Component {
  render() {
    return (
      <Layout>
        <About/>
      </Layout>
    )
  }
}