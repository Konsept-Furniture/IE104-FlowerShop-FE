import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, Link } from 'react-router-dom'
import IconHeart from '@/assets/icons/IconHeart'
import IconCart from '@/assets/icons/IconCart'
import IconUser from '@/assets/icons/IconUser'
import IconBurger from '@/assets/icons/IconBurger'
import './Header.scss'
import { path } from '@/constants/path'

Header.propTypes = {}

function Header (props) {
  const navItems = [
    {
      label: 'Home',
      route: path.home
    },
    {
      label: 'Shop',
      route: path.shop
    },
    {
      label: 'Store',
      route: path.shop
    },
    {
      label: 'About Us',
      route: path.about
    }
  ]
  return (
      <header className="header py-4 font-poppins">
         <div className="header--innner konsept-container flex justify-between items-center">
            <div className="mr-4 lg:mr-16 h-14">
               <Link to="/">
               <img
                  className="h-full"
                  src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng.png"
                  alt="logo"
                  srcSet="https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng.png 330w, https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng-300x105.png 300w"
                  sizes="(max-width: 330px) 100vw, 330px"
               />
               </Link>
            </div>

            <nav className="header__nav mr-auto hidden lg:block">
               <ul className="flex items-center">
                  {navItems.map(item => (
                     <li key={item.label}>
                        <NavLink to={item.route} className="konsept-link">
                           {item.label}
                        </NavLink>
                     </li>
                  ))}
               </ul>
            </nav>

            <div className="header__widgets-holder ml-3">
               <div className="header__widget h-full mr-2 lg:mr-6">
                  <div className="header__widget-content">
                     <span>
                        <IconUser />
                     </span>
                     <span className="ml-1 hidden">Login/Register</span>
                  </div>
               </div>
               <div className="header__widget h-full mr-2 lg:mr-4">
                  <div className="header__widget-content">
                     <span>
                        <IconHeart />
                     </span>
                     <span className="ml-1">0</span>
                  </div>
               </div>
               <div className="header__widget h-full mr-2 lg:mr-4">
                  <div className="header__widget-content">
                     <span>
                        <IconCart />
                     </span>
                     <span className="ml-1">0</span>
                  </div>
               </div>
               <div className="header__widget h-full mr-2 lg:mr-4">
                  <div className="header__widget-content">
                     <span className="header__burger">
                        <IconBurger />
                     </span>
                     <span className="ml-1 hidden"></span>
                  </div>
               </div>
            </div>
         </div>
      </header>
  )
}

export default Header
