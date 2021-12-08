import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import PropTypes from 'prop-types'
import React from 'react'
import './MainLayout.scss'
MainLayout.propTypes = {
   children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
}

function MainLayout({ children }) {
   return (
      <div className="main-layout">
         <Header />
         <div className="main-content">{children}</div>
         <Footer />
      </div>
   )
}

export default MainLayout
