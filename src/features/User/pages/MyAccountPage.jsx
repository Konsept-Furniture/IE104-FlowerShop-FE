import { path } from '@/constants/path'
import useQuery from '@/hooks/useQuery'
import { Backdrop, Box, CircularProgress, Tab, Tabs } from '@mui/material'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import AccountDetailTab from '../components/tabs/AccountDetailTab'
import OrdersTrackingTab from '../components/tabs/OrdersTrackingTab'
import ShippingInfoTab from '../components/tabs/ShippingInfoTab'
import { IMAGES } from '@/assets/images'
import './MyAccountPage.scss'
import ChangePasswordTab from '../components/tabs/ChangePasswordTab'
import { useDispatch } from 'react-redux'
import { logout } from '@/features/Auth/authSlice'
import { unwrapResult } from '@reduxjs/toolkit'

TabPanel.propTypes = {
   children: PropTypes.node,
   index: PropTypes.number.isRequired,
   value: PropTypes.number.isRequired
}
function TabPanel(props) {
   const { children, value, index, ...other } = props

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`vertical-tabpanel-${index}`}
         aria-labelledby={`vertical-tab-${index}`}
         style={{ flex: 1 }}
         {...other}
      >
         {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
   )
}

MyAccount.propTypes = {}

function MyAccount(props) {
   const dispatch = useDispatch()
   const history = useHistory()
   const { tab } = useQuery()
   const [value, setValue] = useState(tab ? Number.parseInt(tab) : 0)
   const [loading, setLoading] = useState(false)

   const handleChange = (event, newValue) => {
      setValue(newValue)
      history.push(`${path.user}?tab=${newValue}`)
   }
   const handleLogout = async e => {
      setLoading(true)
      // e.preventDefault()
      await dispatch(logout()).then(unwrapResult)
      history.push(path.home)
      setLoading(false)
   }
   const background = IMAGES.MyAccount
   return (
      <div className="my-account">
         <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={loading}>
            <CircularProgress color="inherit" />
         </Backdrop>

         <div
            className="w-full bg-cover bg-center h-96 mb-12"
            style={{ backgroundImage: 'url(' + background + ')' }}
         >
            <div className="flex items-center justify-center h-full w-full bg-opacity-50">
               <div className="text-center">
                  <h1 className="text-white text-3xl font-josefins tracking-widest font-bold uppercase md:text-4xl">
                     MY ACCOUNT
                  </h1>
               </div>
            </div>
         </div>

         <div className="konsept-container">
            <Box
               sx={{
                  flexGrow: 1,
                  bgcolor: 'background.paper',
                  display: 'flex'
               }}
            >
               <Tabs
                  textColor="inherit"
                  indicatorColor="primary"
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  sx={{ borderRight: 1, borderColor: 'divider' }}
               >
                  <Tab label="Account Detail" {...a11yProps(0)} />
                  <Tab label="Shipping Information" {...a11yProps(1)} />
                  <Tab label="Orders" {...a11yProps(2)} />
                  <Tab label="Change password" {...a11yProps(3)} />
                  <Tab
                     // component="a"
                     onClick={handleLogout}
                     label="Logout"
                     {...a11yProps(4)}
                  />
               </Tabs>
               <TabPanel value={value} index={0}>
                  <AccountDetailTab />
               </TabPanel>
               <TabPanel value={value} index={1}>
                  <ShippingInfoTab />
               </TabPanel>
               <TabPanel value={value} index={2}>
                  <OrdersTrackingTab />
               </TabPanel>
               <TabPanel value={value} index={3}>
                  <ChangePasswordTab />
               </TabPanel>

               {/* <TabPanel value={value} index={4} onClick={handleLogout}>
                  Logou
               </TabPanel> */}
            </Box>
         </div>
      </div>
   )
}

function a11yProps(index) {
   return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`
   }
}

export default MyAccount
