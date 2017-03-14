import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Lookbook extends React.Component {
  render () {
    return (
      <div className="lookbook">
        <Helmet
          title={config.siteTitle}
        />
        <div className="desc">
  				<span className="date">March 2016</span><span className="words"> / InnoDxRetreat</span>
  			</div>
  			<div className="photoblock">
  				<img src={prefixLink("/assets/1.jpg")} className="cover block" />
  				<div className="block nametag">
  					<div className="namee">
  						<span className="wot">designed by<br /></span>
  						<span className="woo">somebody&#39;s name</span>
  					</div>
  				</div>
  				<img src={prefixLink("/assets/2.jpg")} className="cover block" />
  				<img src={prefixLink("/assets/3.jpg")} className="cover block" />
  				<img src={prefixLink("/assets/4.jpg")} className="cover block" />
  				<img src={prefixLink("/assets/3.jpg")} className="cover block" />
  			</div>

  			<div className="photoblock">
  				<img src={prefixLink("/assets/4.jpg")} className="cover block" />
  				<img src={prefixLink("/assets/1.jpg")} className="cover block" />
  				<img src={prefixLink("/assets/5.jpg")} className="cover block" />
  				<div className="block nametag">
  					<div className="namee">
  						<span className="wot">from<br /></span>
  						<span className="woo">somebody&#39;s name</span>
  					</div>
  				</div>
  			</div>

  			<div className="photoblock">
  				<div className="block nametag">
  					<div className="namee">
  						<span className="wot">by<br /></span>
  						<span className="woo">somebody&#39;s name</span>
  					</div>
  				</div>
  				<img src={prefixLink("/assets/4.jpg")} className="cover block" />
  				<img src={prefixLink("/assets/1.jpg")} className="cover block" />
  				<img src={prefixLink("/assets/5.jpg")} className="cover block" />
  			</div>

      </div>
    )
  }
}
