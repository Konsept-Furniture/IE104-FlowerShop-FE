import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
// Swiper import
import SwiperCore, { Autoplay, EffectFade } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import './HeroSlider.scss'

HeroSlider.propTypes = {}

function HeroSlider() {
   SwiperCore.use([Autoplay, EffectFade])

   const items = [
      {
         type: 'Authentic',
         title: 'Made with love',
         description:
            'Imagine the feeling of a home designed to fit your lifestyle and reflect your personality. The benefits are clear. When you combine a pleasing colour scheme; free-flowing and functional space; perfect mood lighting and clever storage, you get pleasurable home-experiences and a happier life.',
         imageUrl: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home1_rev1.jpg',
         path: '/',
         backgroundColor: 'bg-slider_bg-orange'
      },
      {
         type: 'Timeless',
         title: 'Interior designs',
         description: 'Konsept was born in Vietnam in 2021, and is today a premium retail lifestyle brand. We design, produce and sell a range of contemporary Danish design furniture , accessories and lighting for the living room, dining room, bedroom, home-office and outdoor spaces.',
         imageUrl: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home1_rev1.jpg',
         path: '/',
         backgroundColor: 'bg-slider_bg-blue'
      },
      {
         type: 'Tailored',
         title: 'Classic interiors',
         description: 'Today, the company continues to address new lifestyles with the creation of complete, harmonious interior decor solutions that embody the best contemporary design for all areas of the home.',
         imageUrl: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home1_rev1.jpg',
         path: '/',
         backgroundColor: 'bg-slider_bg-yellow'
      },
      {
         type: 'Authentic',
         title: 'Made with love',
         description: 'Imagine the feeling of a home designed to fit your lifestyle and reflect your personality. The benefits are clear. When you combine a pleasing colour scheme; free-flowing and functional space; perfect mood lighting and clever storage, you get pleasurable home-experiences and a happier life.',
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
            autoplay={{ delay: 4000 }}
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
   // const history = useHistory()

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
                  <Button
                     sx={{
                        py: 1.3,
                        px: 6,
                        textTransform: 'none',
                        fontFamily: 'EB Garamond',
                        fontSize: '18px',
                        fontWeight: 400,
                        fontStyle: 'italic',

                        '&': {
                           backgroundColor: 'transparent'
                        }
                     }}
                     color="black"
                     variant="outlined"
                  >
                     Read more
                  </Button>
               </div>
            </div>
            <div className="hero-slider__item__content__image">
               <img src={data.imageUrl} alt="" />
            </div>
         </div>
      </div>
   )
}
HeroSliderItem.propTypes = {
   data: PropTypes.object.isRequired,
   isActive: PropTypes.bool.isRequired
}

export default HeroSlider
