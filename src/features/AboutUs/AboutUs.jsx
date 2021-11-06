import React from 'react'
import PropTypes from 'prop-types'
import AboutUsHeader from '../../components/AboutUs/AboutUsHeader'
import AboutUsLogo from '@/components/AboutUs/AboutUsLogo'

AboutUs.propTypes = {

}

function AboutUs (props) {
  return (
        <div>
            <AboutUsHeader/>
            <AboutUsLogo/>
        </div>
  )
}

export default AboutUs
