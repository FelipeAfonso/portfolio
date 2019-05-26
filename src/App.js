import React, { Component } from 'react'
import './App.css';
import AnimatedLogo from './components/AnimatedLogo';
import { HashRouter, Route, Switch } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout'


export default class App extends Component {
  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={(<AnimatedLogo/>)}>
            <Switch>
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    )
  }
}