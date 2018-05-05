import React from 'react'

import logo from '../assets/images/logo.png'

const Banner = (props) => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <img className="logo" src={logo} alt="" />
      </header>
    </div>
  </section>
)

export default Banner
