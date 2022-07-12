import { Link } from "gatsby"
import React from "react"
import { FooterLogo } from "../utils/imgImport"
import {
  bottom_menu,
  contacts,
  disinfection_robots,
  nav_menus,
  restaurant_robots,
  security_robots,
  service_robots,
} from "../utils/staticData"

function isPath(pathname) {
  switch (pathname) {
    case "/":
      return "/"
    case "/robots":
      return "/robots"
    case "/contacts":
      return "/contacts"
    default:
      return "/"
  }
}

const Navigation = ({ navigations }) => (
  <ul>
    {navigations.map((item, idx) => (
      <li className="d-flex align-items-center" key={idx}>
        <Link to={item.to} className="nav-link">
          {item?.icon}
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
)

const Footer = ({ location = "" }) => {
  return (
    <footer>
      <div className="container d-none d-sm-block">
        <div className="d-flex align-items-baseline">
          <img className="footer-logo" src={FooterLogo} alt="footer logo" />
          <p className="copy-right">
            © 2019—{new Date().getFullYear()} All Rights Reserved. Mirax Robots
            Co.™
          </p>
        </div>
        <div className="row mt-5 pt-2">
          <div className="col-sm-6 col-md-4 col-lg-2">
            <div className="footer-menu">
              <p
                className={`footer-menu__label ${
                  isPath(location.pathname) === "/" ? "active" : ""
                }`}
              >
                Main Page
              </p>
              <Navigation navigations={nav_menus} />
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2">
            <div className="footer-menu">
              <p
                className={`footer-menu__label ${
                  isPath(location.pathname) === "/robots" ? "active" : ""
                }`}
              >
                Service
                <br />
                Robots
              </p>
              <Navigation navigations={service_robots} />
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2">
            <div className="footer-menu">
              <p
                className={`footer-menu__label ${
                  isPath(location.pathname) === "/robots" ? "active" : ""
                }`}
              >
                Restaurant
                <br />
                Robots
              </p>
              <Navigation navigations={restaurant_robots} />
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2">
            <div className="footer-menu">
              <p
                className={`footer-menu__label ${
                  isPath(location.pathname) === "/robots" ? "active" : ""
                }`}
              >
                Disinfection
                <br />
                robots
              </p>
              <Navigation navigations={disinfection_robots} />
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2">
            <div className="footer-menu">
              <p
                className={`footer-menu__label ${
                  isPath(location.pathname) === "/robots" ? "active" : ""
                }`}
              >
                Security
                <br />
                robots
              </p>
              <Navigation navigations={security_robots} />
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2">
            <div className="footer-menu">
              <p
                className={`footer-menu__label ${
                  isPath(location.pathname) === "/contacts" ? "active" : ""
                }`}
              >
                Contacts
              </p>
              <Navigation navigations={contacts} />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-menu d-sm-none">
        {bottom_menu.map((item, idx) => (
          <div
            className={`bottom-menu__item ${
              isPath(location.pathname) === item.path ? "active" : ""
            }`}
            key={idx}
          >
            {item.icon}
            <Link to={item.path}>{item.name}</Link>
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer
