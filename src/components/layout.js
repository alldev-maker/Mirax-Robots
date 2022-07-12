import * as React from "react"
import Footer from "./footer"

const Layout = ({ children, location }) => {
  return (
    <>
      <main>{children}</main>
      <Footer location={location} />
    </>
  )
}

export default Layout
