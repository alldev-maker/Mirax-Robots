import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import { main_robots } from "../../utils/staticData"

const AboutMirax = () => (
  <section className="about-mirax">
    <div className="container">
      <h2 className="title">ABOUT MIRAX ROBOTS</h2>
      <p className="subtitle">
        Mirax Robots manufactures AI-Driven Robots with application in any
        business area. For more than 5 years we are creating the world’s leading
        robots for businesses of all shapes and sizes, helping them boost their
        sales, brand awareness, and much more.
        <br />
        <br />
        With the HQ in Prague, Czech Republic, Mirax Robots offers robots all
        over the world and helps to choose the best solution in the robotics
        industry that will perfectly fit your business or non-profit
        organization. <br /> <br />A unique design from human alike to
        futuristic robots that seem to have come from the future, extremely high
        quality with a wide range of modern features — all this you can find in
        a wide range of our outstanding robots.
      </p>
    </div>
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      grabCursor={true}
      modules={[Pagination]}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 3,
        },
        1220: {
          slidesPerView: 5,
        },
      }}
      className="my-5"
    >
      {main_robots.map((item, idx) => (
        <SwiperSlide key={idx} className="robot-item">
          <img src={item} alt="robot" />
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
)

export default AboutMirax
