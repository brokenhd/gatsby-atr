import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>This is the second page.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About" />

export default AboutPage
