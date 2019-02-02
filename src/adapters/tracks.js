import url from './url'

class Tracks {
  static getTracks(playlistId, token) {
    return fetch(`${url}/playlists/${playlistId}/tracks`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      }
    }).then(res => res.json())
  }

  static addTracks(playlistId, token, body) {
    return fetch(`${url}/playlists/${mixtapeId}/tracks`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(body)
    }).then(res => res.json())
  }

  static searchTracks(searchQuery, token) {
    return fetch(`${url}/tracks/${searchQuery}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      }
    }).then(res => res.json())
  }

  static recommendTracks(seedTracks, token) {
    return fetch(`${url}/tracks/recommend/${seedTracks}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      }
    }).then(res => res.json())
  }
}

export default Tracks
