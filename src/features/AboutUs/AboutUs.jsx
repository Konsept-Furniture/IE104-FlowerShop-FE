import React from 'react'
import AboutUsHeader from '../../components/AboutUs/AboutUsHeader'
import AboutUsLogo from '@/components/AboutUs/AboutUsLogo'
import AboutUsTeam from '@/components/AboutUs/AboutUsTeam'
import AboutUsComment from '@/components/AboutUs/AboutUsComment'
import ContactForm from '../ContactForm/ContactForm'
import CoverImageList from '../Home/components/CoverImageList'

function AboutUs(props) {
   return (
      <div>
         <AboutUsHeader />
         <AboutUsComment />
         <AboutUsTeam />
         <AboutUsLogo />
         <ContactForm />
         <CoverImageList />
      </div>
   )
}

export default AboutUs
