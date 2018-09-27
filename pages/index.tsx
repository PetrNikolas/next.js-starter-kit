import * as React from 'react'
import {Home} from '../src/components/home/Home'
import {Page} from '../src/components/Page'

export default class Index extends React.Component {
  render() {
    return (
      <Page>
        <Home/>
      </Page>
    )
  }
}