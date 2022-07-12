import React from "react"
import { BgShape, HomerHeroImg, MainLogo } from "../../utils/imgImport"
import Header from "../header"

const HomeHero = () => (
  <section className="home-hero">
    <img className="home-hero__img" src={HomerHeroImg} alt="home hero img" />
    <img className="bottom-shape" src={BgShape} alt="home hero img" />
    <Header />
    <div className="container position-relative">
      <div className="main-content">
        <img className="main-logo" src={MainLogo} alt="main logo" />
        <h1 className="hero-text">Service robots with AI</h1>
        <button className="btn learn-more">Learn More</button>
      </div>
    </div>
  </section>
)

export default HomeHero
