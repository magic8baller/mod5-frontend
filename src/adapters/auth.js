import url from './url'

class Auth {
  static decipherCode(props) {
    return props.location.search.split('=')[1]
  }

  static login(userPayload) {
    return fetch(`${url}/users/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify(userPayload)
    }).then(res => res.json())
  }

  static permission(userPayload) {
    return fetch(`${url}/permission`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify(userPayload)
    }).then(res => res.json())
  }

  static verify() {
    const jwtToken = localStorage.getItem('token')
    return fetch(`${url}/verify`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        Accept: 'application/json'
      }
    }).then(res => res.json())
  }
}

export default Auth
