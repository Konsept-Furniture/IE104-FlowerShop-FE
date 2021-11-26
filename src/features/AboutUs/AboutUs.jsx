import React from 'react'
import PropTypes from 'prop-types'
import AboutUsHeader from '../../components/AboutUs/AboutUsHeader'
import AboutUsLogo from '@/components/AboutUs/AboutUsLogo'
import AboutUsTeam from '@/components/AboutUs/AboutUsTeam'
import AboutUsComment from '@/components/AboutUs/AboutUsComment'
import ContactForm from '../ContactForm/ContactForm'

AboutUs.propTypes = {

}

function AboutUs(props) {
   return (
      <div>
         <AboutUsHeader/>
         <AboutUsComment/>
         <AboutUsTeam/>
         <AboutUsLogo/>
         <ContactForm/>
      </div>
   )
}

export default AboutUs
