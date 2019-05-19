import React from 'react'
import './footer-play.scss'

const FooterPlay = () => (
  <footer className="footer-play">
    {/* <audio
      src="https://music.163.com/song/media/outer/url?id=524148143.mp3"
      type="audio/mpeg"
    ></audio> */}
    <audio
      controls={false}
      preload='auto'
    >
      <source
        src="https://music.163.com/song/media/outer/url?id=524148143.mp3"
        type="audio/mpeg"
      />
    </audio>
  </footer>
)

export default FooterPlay
