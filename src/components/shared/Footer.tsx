import * as React from 'react'

import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

export class AppFooter extends React.Component<{}, {}> {
  render() {
    return (
      <Footer style={{ textAlign: 'center' }}>
        Next.js starter kit ©2018 Created by <a href="https://www.petrnikolas.com/" target="_blank">Petr Nikolas</a>
      </Footer>
    )
  }
}
