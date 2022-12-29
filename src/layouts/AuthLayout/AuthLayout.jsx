import IconHeartFull from '@/assets/icons/IconHeartFull'
import { IMAGES } from '@/assets/images'
import { path } from '@/constants/path'
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import './AuthLayout.scss'

AuthLayout.propTypes = {
   children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
}

function AuthLayout(props) {
   const { children } = props
   return (
      <div className="auth">
         <div className="auth__content">
            <div className="auth__content-header">
               <Link to={path.home} className="header__logo">
                  <img
                     src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng.png"
                     alt="konsept logo"
                     srcSet="https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng.png 330w, https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng-300x105.png 300w"
                     sizes="(max-width: 330px) 100vw, 330px"
                  />
               </Link>
            </div>
            <div className="auth__content-form">
               <div className="form-container">{children}</div>
            </div>
            <div className="auth__content-footer">
               <div className="footer__contact">
                  <p>Please do not hesitate to contact us</p>
                  <a>contact@konsept.com</a>
               </div>
               {/* <p className="footer__copyright">
                  Developed by NhienBinhKhoa with
                  <IconHeartFull
                     className="color--danger"
                     width={18}
                     height={18}
                  />{' '}
                  <br/> © 2021
               </p> */}
            </div>
         </div>

         <div className="auth__image">
            <img
               alt="Photo by KonseptTheme on June 01, 2020."
               crossOrigin="anonymous"
               decoding="auto"
               sizes="598px"
               src={IMAGES.AuthCover}
            />
         </div>
      </div>
   )
}

export default AuthLayout
