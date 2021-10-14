import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import IconHeart from '@/assets/icons/IconHeart';
import IconCart from '@/assets/icons/IconCart';
import IconUser from '@/assets/icons/IconUser';
import IconBurger from '@/assets/icons/IconBurger';
import './Header.scss';

Header.propTypes = {};

function Header(props) {
   return (
      <header className="header py-4">
         <div class="header--innner konsept-container flex justify-between items-center">
            <div className="mr-16 h-14">
               <img
                  className="h-full"
                  src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng.png"
                  alt="logo"
                  srcSet="https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng.png 330w, https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng-300x105.png 300w"
                  sizes="(max-width: 330px) 100vw, 330px"
               />
            </div>

            <nav className="header__nav mr-auto hidden md:block">
               <ul className="flex items-center">
                  <li>
                     <NavLink to="/" className="konsept-link">
                        Home
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/pages" className="konsept-link">
                        Pages
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/shop" className="konsept-link">
                        Shop
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/store" className="konsept-link">
                        Store
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/portfolio" className="konsept-link">
                        Portfolio
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/blog" className="konsept-link">
                        Blog
                     </NavLink>
                  </li>
               </ul>
            </nav>

            <div className="header__widgets-holder ml-3">
               <div className="header__widget h-full mr-6">
                  <div className="header__widget-content">
                     <span>
                        <IconUser />
                     </span>
                     <span className="ml-1 hidden">Login/Register</span>
                  </div>
               </div>
               <div className="header__widget h-full mr-4">
                  <div className="header__widget-content">
                     <span>
                        <IconHeart />
                     </span>
                     <span className="ml-1">0</span>
                  </div>
               </div>
               <div className="header__widget h-full mr-4">
                  <div className="header__widget-content">
                     <span>
                        <IconCart />
                     </span>
                     <span className="ml-1">0</span>
                  </div>
               </div>
               <div className="header__widget h-full mr-4">
                  <div className="header__widget-content">
                     <span className="header__burger">
                        <IconBurger />
                     </span>
                     <span className="ml-1 hiddent"></span>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
}

export default Header;
