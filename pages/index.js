import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div className="landing">
        <Helmet
          title={config.siteTitle}
        />
        <video autoPlay loop poster={prefixLink("/assets/lucy-3-1024x683.jpg")} id="bg-vid">
          <source src={prefixLink("/assets/landingvideo.mp4")} type="video/mp4" />
          <source src={prefixLink("/assets/landingvideo.webm")} type="video/webm" />
        </video>

        <div className="vid-overlay"></div>

        <div className="pure-g">
          <div className="pure-u-1">
            <img className="top-img" src={prefixLink("/assets/fastlogo.png") }/>
          </div>
        </div>
      </div>
    )
  }
}
