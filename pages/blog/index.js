import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import access from 'safe-access'
import sortBy from 'lodash/sortBy'
import $ from 'jquery'

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
            {this.props.title}
          </div>
          <div className="date">
            {this.props.date}
          </div>
          <div className="preview-text">
            {this.props.post}
          </div>
          <Link className="read-more" to={prefixLink(this.props.path)}>
            Read more
          </Link>
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
    const pages = this.props.route.pages;

    const blog = pages.map((page, i) => {
      if (access(page, 'file.ext') === 'md' && !page.path.includes('/404')) {
        const title = access(page, 'data.title') || page.path;
        const author = access(page, 'data.author') || "Author Unknown";
        const path = page.path;
        const date = access(page, 'data.dateFormatted');
        let post = page.data.body;
        post = post.split('<span class="preview">')[1].split('</span>')[0];
        if (post[post.length - 1] === '.') {
          post = post.slice(0, post.length - 1);
        }
        post = post + " ...";

        return (
          <BlogEntry
            date={date}
            title={title}
            author={author}
            post={post}
            path={path}
          key={i} />
        );
      }
    });

    return (
      <div className="blog">
        <Helmet
          title={config.siteTitle}
        />
        {blog}
      </div>
    );
  }
}
