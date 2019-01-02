import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'
import './../styles/timeline.css'
import LightboxImage from '../components/LightboxImage'
import journeyData from './../data/journey'

class Journey extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout style={{ maxWidth: rhythm(45) }}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`Journey | ${siteTitle}`}
        />

        <h2>Journey</h2>

        <div>
          <VerticalTimeline animate={false}>
            {journeyData.map(e => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={e.date}
                iconStyle={{ background: '#fff', color: '#34495e' }}
                icon={e.icon}
                key={e.headline}
              >
                <h3 className="vertical-timeline-element-title">
                  {e.headline}
                </h3>
                <br />
                {/* <a href={e.image}>
                  <img src={e.image} />
                </a> */}
                <LightboxImage
                  src={e.image}
                  title={e.headline}
                  caption={e.description}
                />
                {e.description}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </Layout>
    )
  }
}

export default Journey

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
