import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>National Intranet Planner</title>
        <meta property="og:title" content="National Intranet Planner" />
      </Helmet>
    </div>
  )
}

export default Home
