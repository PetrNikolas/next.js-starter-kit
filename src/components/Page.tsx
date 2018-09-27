import * as React from 'react'
import {Nav} from './shared/Nav'
import {AppFooter} from './shared/Footer'

import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

export class Page extends React.Component<{}, {}> {
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

        <Layout className="layout">
          <Nav/>
  
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Index</Breadcrumb.Item>
            </Breadcrumb>
  
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <main>
                {children}
              </main>
            </div>
          </Content>
  
          <AppFooter/>
        </Layout>
      </div>
    )
  }
}
