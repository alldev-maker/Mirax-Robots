import React, { useState } from "react"
import { Link } from "gatsby"
import { Logo, MenuClose, MenuDefault } from "../utils/imgImport"
import Accordion from "./faq"
import {
  disinfection_robots,
  menu_contacts,
  restaurant_robots,
  security_robots,
  service_robots,
} from "../utils/staticData"

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const [isHover, setHover] = useState(-1)

  return (
    <header className={`header ${isOpen ? "active" : ""}`}>
      <div className="menu-open">
        <div className="container d-flex align-items-center justify-content-end justify-content-md-between">
          <Link className="logo" to="/">
            <img src={Logo} alt="logo" />
          </Link>

          <button className="btn-menu" onClick={() => setOpen(!isOpen)}>
            {isOpen ? (
              <img src={MenuClose} alt="menu close" />
            ) : (
              <img src={MenuDefault} alt="menu default" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="navbar">
          <div className="container">
            <div className="row w-100">
              <div className="col-sm-6">
                <h2 className="menu-label">Our robots</h2>
                <Accordion question="Service robots" answer={service_robots} />
                <Accordion
                  question="Restaurant robots"
                  answer={restaurant_robots}
                />
                <Accordion
                  question="Disinfection robots"
                  answer={disinfection_robots}
                />
                <Accordion
                  question="Security robots"
                  answer={security_robots}
                />
              </div>
              <div className="col-sm-6">
                <h2 className="menu-label">Contacts</h2>
                <div className="contact-links">
                  {menu_contacts.map((item, idx) => (
                    <Link
                      to={item.to}
                      className="social-link"
                      onMouseEnter={() => setHover(idx)}
                      onMouseLeave={() => setHover(-1)}
                      key={idx}
                    >
                      {!item.name && (
                        <>
                          {isHover === idx ? (
                            <img src={item.active} alt="social icon" />
                          ) : (
                            <img src={item.default} alt="social icon" />
                          )}
                        </>
                      )}
                    </Link>
                  ))}
                  <Link className="write-us" to="/write-us">
                    Write to us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
