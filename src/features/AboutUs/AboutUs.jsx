import AboutUsComment from '@/components/AboutUs/AboutUsComment'
import AboutUsTeam from '@/components/AboutUs/AboutUsTeam'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'
import React from 'react'
import AboutUsHeader from '../../components/AboutUs/AboutUsHeader'
import ContactForm from '../ContactForm/ContactForm'

function AboutUs() {
   return (
      <div>
         <ScrollToTop />

         <AboutUsHeader />
         <AboutUsComment />
         {/* <AboutUsTeam /> */}
         <ContactForm />
      </div>
   )
}

export default AboutUs
