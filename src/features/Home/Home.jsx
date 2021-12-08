import HeroSlider from '@/components/HeroSlider/HeroSlider'
import OurAdvantages from '@/components/OurAdvantages'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'
import React from 'react'
import CoverImageList from './components/CoverImageList'
import LastestItems from './components/LastestItems'

Home.propTypes = {}

function Home() {
   return (
      <div>
         <ScrollToTop />

         <HeroSlider />
         <LastestItems />
         <OurAdvantages />
         <CoverImageList />
         {/* <AboutUsLogo /> */}
         {/* <ContactForm /> */}
      </div>
   )
}

export default Home
