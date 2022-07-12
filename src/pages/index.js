import * as React from "react"
import AboutMirax from "../components/home/about-mirax"
import HomeHero from "../components/home/home-hero"
import MiraxRobots from "../components/home/mirax-robots"
import WhyOurRobots from "../components/home/why-our-robots"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title="Home" />
      <HomeHero />
      <AboutMirax />
      <WhyOurRobots />
      <MiraxRobots />
    </Layout>
  )
}

export default IndexPage
