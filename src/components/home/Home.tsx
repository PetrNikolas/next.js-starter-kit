import * as React from 'react'
import * as classnames from 'classnames'
import * as css from '../../stylesheets/Styles.css'

export class Home extends React.Component<{}, {}> {
  render() {
    return (
        <div className={classnames('test', css.home)}>
          <h1>Next.js Starter Kit</h1>
          <h2>Next.js starter kit for modern apps based on React.</h2>
        </div>
    )
  }
}