import React from 'react'

// one option is iframe ?

const SpotifyPlayer = props => {
  const srcCode = `https://open.spotify.com/embed/user/${
    props.ownerUsername
  }/playlist/${props.spotifyPlaylistId}`

  return (
    <div>
      <iframe
        id="spotify-player"
        src={srcCode}
        width="40%"
        height="500px"
        frameborder="0"
        allowtransparency="true"
      />
    </div>
  )
}

export default SpotifyPlayer
