import * as React from 'react'
import * as css from '../../stylesheets/Styles.css'

export class About extends React.Component<{}, {}> {
  render() {
    return (
        <div className={css.home}>
            <h1>About</h1>
            <h2>
            Next.js starter kit for modern apps based on React. NSK is built with React, Redux, TypeScript and more.
            </h2>
        </div>
    )
  }
}

