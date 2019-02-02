import React from 'react'
import Welcome from './components/Welcome'
import ErrorContainer from './components/ErrorContainer'
import Navbar from './components/Navbar'
import { Link, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" component={Navbar} />
        <Route exact path="/" component={Welcome} />
        <Route exact path="/error" component={ErrorContainer} />
      </div>
    )
  }
}

export default App
