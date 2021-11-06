import React from 'react'
import PropTypes from 'prop-types'
import './HeroSlider.scss'
import Button, { OutlinedButton } from '../button/Button'

// Swiper import
import SwiperCore, { Autoplay, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

import { useHistory } from 'react-router'

HeroSlider.propTypes = {}

function HeroSlider (props) {
  SwiperCore.use([Autoplay, EffectFade])

  const items = [
    {
      type: 'Authentic',
      title: 'Made with love',
      description:
            'Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
      imageUrl: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home1_rev1.jpg',
      path: '/',
      backgroundColor: 'bg-slider_bg-orange'
    },
    {
      type: 'Timeless',
      title: 'Interior designs',
      description: 'Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
      imageUrl: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home1_rev1.jpg',
      path: '/',
      backgroundColor: 'bg-slider_bg-blue'
    },
    {
      type: 'Tailored',
      title: 'Classic interiors',
      description: 'Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
      imageUrl: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home1_rev1.jpg',
      path: '/',
      backgroundColor: 'bg-slider_bg-yellow'
    },
    {
      type: 'Authentic',
      title: 'Made with love',
      description: 'Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
      imageUrl: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home1_rev1.jpg',
      path: '/',
      backgroundColor: 'bg-slider_bg-blue'
    }
  ]

  return (
      <section className="hero-slider font-poppins">
         <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            // navigation
            loop
            effect={'fade'}
         >
            {items.map((item, index) => (
               <SwiperSlide key={index}>
                  {({ isActive }) => (
                     <HeroSliderItem data={item} isActive={isActive} />
                  )}
               </SwiperSlide>
            ))}
         </Swiper>
      </section>
  )
}

const HeroSliderItem = ({ data, isActive }) => {
  const history = useHistory()

  return (
      <div
         className={`hero-slider__item ${data.backgroundColor} ${isActive ? 'active' : ''}`}
      >
         <div className="hero-slider__item__content konsept-container">
            <div className="hero-slider__item__content__info">
               <h2 className="type font-handwriter">{data.type}</h2>
               <h2 className="title">{data.title}</h2>
               <div className="description">{data.description}</div>
               <div className="read-more">
                  <OutlinedButton onClick={() => { }}>Read more</OutlinedButton>
               </div>
            </div>
            <div className="hero-slider__item__content__image">
               <img src={data.imageUrl} alt="" />
            </div>
         </div>
      </div>
  )
}

export default HeroSlider
