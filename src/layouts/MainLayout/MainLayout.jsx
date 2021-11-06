import React from 'react'
import PropTypes from 'prop-types'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import NotFound from '@/features/NotFound/NotFound'

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

function MainLayout ({ children }) {
  return (
      <div>
         <Header />
         {children}
         <Footer />
      </div>
  )
}

export default MainLayout
