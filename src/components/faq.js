import { Link } from "gatsby"
import React, { useState } from "react"

const Accordion = ({ question, answer }) => {
  const [active, setActive] = useState(false)

  return (
    <div className={`accordion ${active ? "active" : ""}`}>
      <button
        type="button"
        className="accordion__toggler w-100 d-flex justify-content-between align-items-center"
        onClick={() => setActive(!active)}
      >
        <span className="question">{question}</span>
        <span className="sign" />
      </button>

      <div className="accordion__content">
        <div className="row">
          {answer.map((item, idx) => (
            <div className="col-4 my-1" key={idx}>
              <Link to={item.to}>{item.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Accordion
