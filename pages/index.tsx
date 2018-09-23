import * as React from 'react'
import {Home} from '../src/components/home/Home'
import {Layout} from '../src/components/Layout'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Home/>
      </Layout>
    )
  }
}