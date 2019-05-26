import React, { Component } from 'react'
import AnimatedLogo from './AnimatedLogo'

export default class Home extends Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
              <AnimatedLogo/>
              <p>
                Work in Progress
              </p>
            </header>
          </div>
        )
    }
}
