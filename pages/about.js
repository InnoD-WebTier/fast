import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

export default class About extends React.Component {
  render () {
    return (
      <div className="about">
        <p>Fashion and Student Trends (FAST) is a student-initiated, student-run nonprofit organization designed to bring the world of fashion to the University of California, Berkeley. The first branch of FAST was originally established in 2001 on the University of California, Los Angeles campus. Through the collaboration of our founders, Berkeley launched its own FAST branch in 2005. Since then, the organization has grown tremendously and continues to serve the Berkeley fashion community in its 11th year of operation. <br /> <br />

        FAST is dedicated to developing the talents and enthusiasm in the fashion industry. Since 2005, FAST has expanded to include designers, models, graphic designers, photographers, makeup artists, and other students seeking corporate fashion experiences. Each semester, FAST members design, publicize, and host a fashion show featuring the original creations of our talented Berkeley student designers. Apart from being the only on-campus organization of its kind, FAST contributes to the greater community by collecting ticket fees and donating those proceeds to reputable charities. In addition, FAST is proud to be an organization that promotes equality, body positive, and is a space to express who you truly are. <br /> <br />
        Past recipients include the California Alliance for Arts Education, Visual Aid, and Designing a Difference. <br /> <br />

        FAST also offers several professional events throughout the year, including sketching and sewing workshops, makeup workshops, and career roundtables employers in the fashion industry. <br /> <br />

        If you are interested in joining FAST. please email calfastinternal@gmail.com with your resume! Join us as we continue to support our fashion-oriented Cal students and promote philanthropy in the community at large.</p>
      </div>
    )
  }
}
