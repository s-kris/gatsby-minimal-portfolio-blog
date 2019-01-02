import React, { Component } from 'react'

const styles = {
  rootContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: 'gray',
    paddingTop: 15,
  },
}

export class Footer extends Component {
  render() {
    return (
      <div style={styles.rootContainer}>
        Built with&nbsp;
        <a href="https://gatsbyjs.org" target="_blank">
          GatsbyJS
        </a>
      </div>
    )
  }
}

export default Footer
