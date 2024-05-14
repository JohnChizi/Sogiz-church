import React from 'react'


const Gallery: React.FC = () => {
  return (
    <section className="services-area" id="services">
        <h3 className="section-title">OUR <span>Gallery</span></h3>
        <div className="image">
            <div className="gallery">
                <img src="/images/1.jpg" alt="" />
            </div>
            <div className="gallery">
                <img src="/images/2.jpg" alt="" />
            </div>
            <div className="gallery">
                <img src="/images/3.jpg" alt="" />
            </div>
            <div className="gallery">
                <img src="/images/4.jpg" alt="" />
            </div>
        </div>
       

    </section>
  )
}

export default Gallery