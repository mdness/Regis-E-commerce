import React from 'react'
import clothesVdeo from '../media/clothes_video.mp4'

const Video = () => {
  return(
    <div>
        <section>
        <video autoPlay loop muted>
          <source src={clothesVdeo} type='video/mp4' />
        </video>
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h1 className="display-3">THE NEW SEASON NOW IN</h1>
              <a href="#">Shop now</a>
            </div>
          </div>
        </div>
      </section>
    </div>
)
}

export default Video
