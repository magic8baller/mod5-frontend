import React from 'react'
import Auth from '../adapters/auth'
import { connect } from 'react-redux'
import * as AuthActions from '../actions/auth'
import BASE_URL from '../adapters/baseUrl'

class MainContainer extends React.Component {
  gotIn = () => {
    localStorage.setItem('loading', false)
    this.props.isLoading(false)
  }

  componentDidMount() {
    if (this.props.location.search == '?error=access_denied') {
      window.location = `${baseUrl}/login`
    } else if (this.props.location.search && !localStorage.getItem('token')) {
      const code = Auth.decipherCode(this.props)
      const payload = { code: code }

      Auth.login(payload).then(res => {
        this.props.login(res.user)
        localStorage.setItem('token', res.jwt)
        this.gotIn()
      })
      console.log('login with auth.login')
    } else if (localStorage.getItem('token')) {
      Auth.verify()
        .then(res => this.props.login(res))
        .then(res => this.gotIn())
    } else {
      this.props.history.push('/')
      console.log('rejected')
    }
  }

  render() {
    return <div>playlists?</div>
  }
}

function mapStateToProps(state) {
  console.log('this is state in mapsStateToProps', state)
  return {
    currentUserId: state.auth.currentUserId,
    currentUsername: state.auth.currentUsername,
    loggedIn: state.auth.loggedIn,
    loading: state.auth.isLoading
  }
}

export default connect(
  mapStateToProps,
  null
)(MainContainer)
