import React from 'react'
import PropTypes from 'prop-types'
import AboutUsHeader from '../../components/AboutUs/AboutUsHeader'
import AboutUsLogo from '@/components/AboutUs/AboutUsLogo'
import AboutUsTeam from '@/components/AboutUs/AboutUsTeam'

AboutUs.propTypes = {

}

function AboutUs (props) {
  return (
        <div>
            <AboutUsHeader/>
            <AboutUsTeam/>
            <AboutUsLogo/>
        </div>
  )
}

export default AboutUs
