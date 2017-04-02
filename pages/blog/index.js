import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

class BlogEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="blog-entry">
        <div className="blog-photo">
        </div>
        <div className="blog-preview">
          <div className="title">
            Countdown to Event
          </div>
          <div className="date">
            March 24, 2017
          </div>
          <div className="preview-text">
            the preview text for the article wow
          </div>
          <div className="read-more">
            Read more
          </div>
        </div>
      </div>
    );
  }
}

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="blog">
        <Helmet
          title={config.siteTitle}
        />
        <BlogEntry />
        <BlogEntry />
      </div>
    );
  }
}
