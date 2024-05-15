import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SwiperGallery from './subComponent/SwiperGallery'


const Gallery: React.FC = () => {
    const [modal, setModal] = useState<Boolean>(false)
    const openGallery = () => {
        setModal(true)
        document.body.style.overflow = "hidden"; // Disable scrolling of the body
    }
    const closeGallery = () => {
        setModal(false)
        document.body.style.overflow = "scroll"; // enabling scrolling of the body
    }
  return (
    <section className="services-area" id="services">
        <h3 className="section-title">OUR <span>Gallery</span></h3>
        <div className="image" onClick={openGallery}>
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
        <div className="modal" style={!modal ? {display: 'none'} : {display: 'block'}}>
            <div className="icon" onClick={closeGallery}>
                <h2>X</h2>
            </div>
            <SwiperGallery />
        </div>
       

    </section>
  )
}

export default Gallery