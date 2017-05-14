import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div className="landing">
        <Helmet
          title={config.siteTitle}
        />
        <video autoPlay loop id="bg-vid">
          <source src={prefixLink("assets/landingvideo.jpg")} type="video/mp4" />
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
