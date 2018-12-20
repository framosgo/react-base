import React, { Component } from 'react'
import PropTypes from 'prop-types'

class App extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  }

  render () {
    const children = this.props.children
    return (
      <div>
        <main>
          { children }
        </main>
      </div>
    )
  }
}

export default App
