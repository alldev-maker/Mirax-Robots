import React from "react"
import { advantages } from "../../utils/staticData"

const WhyOurRobots = () => (
  <section className="why-our-robots">
    <div className="container">
      <h2 className="title">Why our robots?</h2>
      <p className="subtitle">
        In the process of creating robots, we pursued the main goal — to create
        robots that will perform human functions, while making their management
        as simple and clear as possible.
        <br />
        <br />
        All our robots not only obtain modern features such as self-navigation,
        voice recognition & dialogue but they are also as simple as your mobile
        phone. We are proud to say that we succeed and here is why businesses
        chose our robots:
      </p>
      <div className="row mt-5 pt-2">
        {advantages.map((item, idx) => (
          <div
            className="col-sm-6 col-md-4 d-flex justify-content-center"
            key={idx}
          >
            <div className="advantage-item">
              <img
                className="advantage-item__icon"
                src={item.icon}
                alt={item.title}
              />
              <div>
                <h3 className="advantage-item__title">{item.title}</h3>
                <p className="advantage-item__content">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default WhyOurRobots
