import React from 'react'
import LoginButton from './LoginButton'
import BASE_URL from '../adapters/baseUrl'

class Welcome extends React.Component {
  componentDidMount() {
    if (localStorage.getItem('token')) {
      window.location = `${BASE_URL}/login`
    }
  }

  render() {
    return (
      <div>
        <div className="main-header">tbd....</div>
        <LoginButton />
      </div>
    )
  }
}

export default Welcome
