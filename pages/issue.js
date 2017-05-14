import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import data from './data/lookbook.js';

export default class Issue extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: "None",
    }
  }

  componentDidMount() {
    const pathname = decodeURIComponent(window.location.href);
    const filter = pathname.split("?filter=")[1].split('/')[0];
    this.setState({
      filter,
    });
  }

  render() {

    const filter = this.state.filter;
    if (filter === "None") {
      return ( <div /> );
    }
    const issues = data.filter((item) => item.title === filter);
    let images = issues[0].collection;
    console.log(images);
    const path = '/assets/' + filter + '/';
    images = images.map((image, i) => (
      <div className="img-container">
        <img key={i} src={prefixLink(path + image)} />
      </div>
    ));

    return (
      <div className="issue">
        <div className="back-container">
          <img src={prefixLink('/assets/icons/black-arrow.png')} />
          <Link className="button" to={prefixLink('/lookbook/')}>back</Link>
        </div>
        <div className="photos">
          {images}
        </div>
      </div>
    );
  }

}
