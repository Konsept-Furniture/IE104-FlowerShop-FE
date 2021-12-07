import React from 'react'
import HeroSlider from '@/components/HeroSlider/HeroSlider'
import CoverImageList from './components/CoverImageList'
import AboutUsLogo from '@/components/AboutUs/AboutUsLogo'
import OurAdvantages from '@/components/OurAdvantages'
import ContactForm from '../ContactForm/ContactForm'

Home.propTypes = {}

function Home() {
   return (
      <div>
         <HeroSlider />
         <OurAdvantages />
         <CoverImageList />
         {/* <AboutUsLogo /> */}
         {/* <ContactForm /> */}
      </div>
   )
}

export default Home
