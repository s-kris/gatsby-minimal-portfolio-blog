import React, { Component } from 'react'
import { Link } from 'gatsby'

import { rhythm } from './../utils/typography'
import contactData from './../data/contact'

export class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: rhythm(24),
            maxWidth: 400,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Link to={'/'}>Home</Link>
          <Link to={'/portfolio'}>Portfolio</Link>
          <Link to={'/journey'}>Journey</Link>
          <a href={contactData.github} target="_new">
            Github
          </a>
          <Link to={'/contact'}>Contact</Link>
          <Link to={'/blog'}>Blog</Link>
        </div>
      </div>
    )
  }
}

export default Navbar
