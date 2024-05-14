import React from 'react'

// type Props = {}

const Banner:React.FC = () => {
  return (
    <section className="banner-area">
        <div className="banner-img"></div>
        <h3>Welcome to Sons of God in Zion Ministry </h3>
        <h1>God is <span>Almigthy</span></h1><a className="banner-btn" href="#">More Info</a>
    </section>
  )
}

export default Banner