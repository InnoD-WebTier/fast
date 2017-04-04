import React from 'react'
import 'css/markdown-styles.css'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  render () {
    const post = this.props.route.page.data;
    if (post.body.includes('Sorry, this page does not exist.')) {
      return (
        <div className="no-page">
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      );
    }
    return (
      <div className="markdown">
        <Helmet
          title={`${config.siteTitle} | ${post.title}`}
        />
        <div className="blog-post">
          <Link className="back" to={prefixLink('/blog/')}>back</Link>
          <div className="title">Crash and Burn</div>
          <div className="date">March 2, 2015</div>
          <div className="post" dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </div>
    )
  },
})
