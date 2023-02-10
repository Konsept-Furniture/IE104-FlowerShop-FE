import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import SwiperCore, { Autoplay, EffectFade, Navigation } from 'swiper'

export default function HeroSlider2() {
   SwiperCore.use([Autoplay, EffectFade])
   const imgLinks = [
      require('./imgs/h1.jpeg').default,
      require('./imgs/h2.jpeg').default,
      require('./imgs/h3.jpeg').default,
      require('./imgs/h4.jpeg').default,
      require('./imgs/h5.jpeg').default,
      require('./imgs/h6.jpeg').default,
      require('./imgs/h7.jpeg').default,
      require('./imgs/h9.jpg').default,
      require('./imgs/h10.jpg').default,
      require('./imgs/h11.jpg').default
   ]
   return (
      <>
         <Swiper navigation={true} modules={[Navigation, Autoplay]} className="swiper">
            {imgLinks.map(link => (
               <SwiperSlide key={link}>
                  <img src={link} />
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   )
}
