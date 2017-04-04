import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import $ from 'jquery'

import data from './data/people';

class PositionCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const people = this.props.people.map((person, i) => (
      <span>{person}<br /></span>
    ));

    return (
      <div>
        <div>{this.props.position}</div>
        <div className="people-list">
          {people}
        </div>
      </div>
    );
  }
}

export default class People extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    const positions = Object.keys(data);
    const people = positions.map((position, i) => (
      <PositionCard
        key={i}
        position={position}
        people={data[position]}
      />
    ));

    return (
      <div className="blog">
        <Helmet
          title={config.siteTitle}
        />
        {people}
      </div>
    );
  }
}
