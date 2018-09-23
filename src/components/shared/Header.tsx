import * as React from 'react'
import {Nav} from './Nav'

export class Header extends React.Component<{}, {}> {
  render() {
    return (
      <header>
        <h1>
          NSK
        </h1>
        <Nav/>
      </header>
    )
  }
}
