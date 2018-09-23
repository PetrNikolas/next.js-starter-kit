import * as React from 'react'
import Link from 'next/link'

export class Nav extends React.Component<{}, {}> {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

