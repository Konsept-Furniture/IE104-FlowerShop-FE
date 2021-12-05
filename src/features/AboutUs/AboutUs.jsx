import AboutUsComment from '@/components/AboutUs/AboutUsComment'
import AboutUsTeam from '@/components/AboutUs/AboutUsTeam'
import React from 'react'
import AboutUsHeader from '../../components/AboutUs/AboutUsHeader'
import ContactForm from '../ContactForm/ContactForm'

function AboutUs(props) {
   return (
      <div>
         <AboutUsHeader />
         <AboutUsComment />
         <AboutUsTeam />
         <ContactForm />
      </div>
   )
}

export default AboutUs
