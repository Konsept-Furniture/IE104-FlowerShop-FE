import IconBurger from '@/assets/icons/IconBurger'
import IconCart from '@/assets/icons/IconCart'
import IconUser from '@/assets/icons/IconUser'
import { path } from '@/constants/path'
import { IconButton } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink, useHistory } from 'react-router-dom'
import './Header.scss'
import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'

const StyledBadge = styled(Badge)(({ theme }) => ({
   '& .MuiBadge-badge': {
      right: -3,
      // top: 13,
      border: `1px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      color: '#fff'
   }
}))

function Header() {
   const history = useHistory()
   const currentUser = useSelector(state => state.auth.profile)
   const cart = useSelector(state => state.cart)
   const navItems = [
      {
         label: 'Home',
         route: path.home
      },
      {
         label: 'Products',
         route: path.products
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
               <Link to={path.home}>
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
                        <NavLink to={item.route} className="konsept-link" exact>
                           {item.label}
                        </NavLink>
                     </li>
                  ))}
               </ul>
            </nav>

            <div className="header__widgets-holder ml-3">
               <div
                  className="header__widget h-full"
                  onClick={() => {
                     if (!currentUser) {
                        history.push(path.login)
                     } else {
                        history.push(path.user)
                     }
                  }}
               >
                  <p className="cursor-pointer mr-1">{currentUser ? currentUser.username : ''}</p>
                  <div className="header__widget-content">
                     <span></span>
                     <IconButton aria-label="cart">
                        <IconUser />
                        <span className="ml-1 hidden">Login/Register</span>
                     </IconButton>
                  </div>
               </div>
               <div
                  className="header__widget h-full mr-2"
                  onClick={() => {
                     history.push(path.cart)
                  }}
               >
                  <div className="header__widget-content">
                     <IconButton aria-label="cart">
                        <StyledBadge badgeContent={cart.current.length} color="black">
                           <IconCart />
                        </StyledBadge>
                     </IconButton>
                  </div>
               </div>
               <div className="header__widget h-full">
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
