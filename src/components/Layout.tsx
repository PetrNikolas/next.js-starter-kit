import * as React from 'react'
import {Header} from './shared/Header'
import {Footer} from './shared/Footer'

export class Layout extends React.Component<{}, {}> {
  render() {
    const {children} = this.props
    return (
      <div id="layout">
        {/*language=PostCSS*/}
        <style jsx global>{`//global stylesheet
          #layout {
            background-color: transparent;
          }
        `}
        </style>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </div>
    )
  }
}
