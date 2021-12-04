import React from 'react'
import HeroSlider from '@/components/HeroSlider/HeroSlider'
import CoverImageList from './components/CoverImageList'
import AboutUsLogo from '@/components/AboutUs/AboutUsLogo'
import ContactForm from '../ContactForm/ContactForm'

Home.propTypes = {

}

function Home(props) {
   return (
      <div>
         <HeroSlider />
         <CoverImageList />
         <AboutUsLogo />
         <ContactForm />
      </div>
   )
}

export default Home
