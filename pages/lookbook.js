import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import $ from 'jquery';

import data from './data/lookbook.js';

export default class Lookbook extends React.Component {
  render () {

    const lookbooks = data.map(lookbook => {
      const title = lookbook.title;
      const semester = lookbook.semester;
      const pdfLink = lookbook.pdf;
      let preview = lookbook.preview;
      const designer = preview.designer;
      let images = preview.images;
      // create the collection of images with the designer name
      images = images.map((image, i) => {
        const path = '/assets/' + title.toLowerCase() + '/';
        return (
          <img key={i} src={prefixLink(path + images[i])} className="cover block" />
        );
      });
      images.unshift(
        <div key={title + " " + designer.toString()} className="block nametag">
          <div className="name">
            <span className="author-prefix">designed by<br /></span>
            <span className="author">{designer}</span>
          </div>
        </div>
      );
      preview = (
        <div className="photoblock">
          {images}
        </div>
      );
      // create the header information
      const header = (
        <div className="desc">
          <div className="header">
            <span className="semester">{semester}</span>
            <span className="title"> / {title}</span><br/>
          </div>
          <div className="links">
            <a className="pdf" target="_blank" href={pdfLink}>pdf</a>
            <Link
              to={prefixLink('/issue/?filter=' + title + '/')}
              className='view-carousel'
            >
              view all
            </Link>
          </div>
        </div>
      );
      return (
        <div key={title} className="wrapper">
          {header}
          {preview}
        </div>
      );
    })

    return (
      <div className="lookbook">
        <Helmet
          title={config.siteTitle}
        />
        {lookbooks}
      </div>
    )
  }
}
