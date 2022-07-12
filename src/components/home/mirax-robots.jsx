import { Link } from "gatsby"
import React from "react"
import { main_robots, mirax_robots } from "../../utils/staticData"

const MiraxRobots = () => (
  <section className="mirax-robots">
    <div className="tile-section">
      {/* <h1 className="shadow-text text-start">Mirax Robots</h1> */}
      <h3 className="title">Mirax Robots</h3>
      {/* <h1 className="shadow-text text-end">Mirax Robots</h1> */}
    </div>
    <div className="container">
      {mirax_robots.map((item, idx) => (
        <div className="row" key={idx}>
          <div className="col-md-6">
            <h3 className="robot-category">{item.title}</h3>
            <p className="robot-desc">{item.content}</p>
            <Link to={item.to}>Learn more</Link>
          </div>
          <div className="col-md-6">
            <img src={item.img} alt={item.title} />
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default MiraxRobots
