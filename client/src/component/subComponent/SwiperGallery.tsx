import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css'
import 'swiper/effect-utils'


import './swiper.css';

// import required modules
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';




const SwiperGallery: React.FC = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <React.Fragment>
      <Swiper
        loop={true}
        spaceBetween={10}
        pagination={{
            clickable: true,
          }}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className="mySwiper2"
      >
        <SwiperSlide className='swiper-slide'>
            
                <img src="/images/1.jpg" alt='' className='swipe-img' />
  
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src="/images/2.jpg" className='swipe-img' />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src="images/3.jpg" className='swipe-img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/3.jpeg" className='swipe-img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/4.jpeg" className='swipe-img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/4.jpg" className='swipe-img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/5.jpeg" className='swipe-img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/6.jpeg" className='swipe-img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/7.jpeg" className='swipe-img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/8.jpeg" className='swipe-img' />
        </SwiperSlide>
      </Swiper>
      {/* <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/1.jpg" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/2.jpg" /> 
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/3.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/4.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/5.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/6.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/7.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/8.jpeg" />
        </SwiperSlide>
      </Swiper> */}
    </React.Fragment>
  )
}

export default SwiperGallery