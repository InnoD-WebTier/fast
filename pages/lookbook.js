import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import $ from 'jquery';

class LookbookItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const images = this.props.images;
    const author = this.props.author;
    const authorIndex = this.props.authorIndex;

    const lookbook = [];
    for (let i=0; i < images.length; i++) {
      if (i === authorIndex) {
        lookbook.push(
          <div key={"author " + i.toString()} className="block nametag">
            <div className="name">
              <span className="author-prefix">designed by<br /></span>
              <span className="author">{author}</span>
            </div>
          </div>
        );
      }
      lookbook.push(
        <img key={i} src={prefixLink(images[i])} className="cover block" />
      );
    }


    return (
      <div className="photoblock">
        {lookbook}
      </div>
    );
  }
}

export default class Lookbook extends React.Component {
  render () {

    const lookbooks = []
    for (let i=0; i < 9; i+=3) {
      const authorIndex = i % 4;
      lookbooks.push(
        <LookbookItem
          key={i}
          author="Tina Xu"
          images={
            [
              "/assets/1.jpg",
              "/assets/2.jpg",
              "/assets/3.jpg",
              "/assets/4.jpg",
              "/assets/5.jpg",
            ]
          }
          authorIndex={authorIndex}
        />
      )
    }

    return (
      <div className="lookbook">
        <Helmet
          title={config.siteTitle}
        />
        <div className="desc">
  				<span className="date">Spring 2016</span><span className="words"> / Suprasensory</span><a className="pdf" target="_blank" href="https://www.ocf.berkeley.edu/~fast/wp-content/uploads/2016/10/FFP.pdf">  (pdf)</a>
  			</div>

        {lookbooks}

      </div>
    )
  }
}
