import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Hemlet from 'react-helmet'

import Layout from '../components/Layout'
import DisplayImage from './../assets/images/main_image.jpg'

class SiteIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout>
        <Hemlet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Hemlet>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue
          eget arcu dictum varius duis. Vestibulum lectus mauris ultrices eros
          in cursus turpis. Blandit volutpat maecenas volutpat blandit aliquam
          etiam. Sagittis purus sit amet volutpat. Nullam ac tortor vitae purus
          faucibus ornare suspendisse. Vulputate sapien nec sagittis aliquam
          malesuada. Quis imperdiet massa tincidunt nunc pulvinar sapien et
          ligula ullamcorper. Sit amet cursus sit amet dictum sit amet.
          Malesuada proin libero nunc consequat interdum varius sit amet. Sed
          egestas egestas fringilla phasellus faucibus scelerisque eleifend.
          Habitasse platea dictumst quisque sagittis. Sem viverra aliquet eget
          sit amet tellus cras adipiscing enim. Amet massa vitae tortor
          condimentum lacinia quis vel eros donec.
        </p>
        <img src={DisplayImage} alt={siteTitle} />
      </Layout>
    )
  }
}

export default SiteIndex

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
