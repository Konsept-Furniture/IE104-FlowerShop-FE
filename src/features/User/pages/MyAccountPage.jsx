import { path } from '@/constants/path'
import useQuery from '@/hooks/useQuery'
import { Box, Tab, Tabs } from '@mui/material'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import ChangePasswordForm from '../components/ChangePasswordForm'
import AccountDetailTab from '../components/tabs/AccountDetailTab'
import OrdersTrackingTab from '../components/tabs/OrdersTrackingTab'
import './MyAccountPage.scss'

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
   const history = useHistory()
   const { tab } = useQuery()
   const [value, setValue] = useState(tab ? Number.parseInt(tab) : 0)

   const handleChange = (event, newValue) => {
      setValue(newValue)
      history.push(`${path.user}?tab=${newValue}`)
   }
   const background = 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/account_.jpg'
   return (
      <div className="my-account">
         <div className="w-full bg-cover bg-center h-96 mb-12" style ={{ backgroundImage: 'url(' + background + ')' } }>
            <div className="flex items-center justify-center h-full w-full bg-opacity-50">
               <div className="text-center">
                  <h1 className="text-white text-3xl font-josefins tracking-widest font-bold uppercase md:text-4xl">MY ACCOUNT</h1>
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
                  aria-label="Vertical tabs example"
                  sx={{ borderRight: 1, borderColor: 'divider' }}
               >
                  <Tab label="Account Detail" {...a11yProps(0)} />
                  <Tab label="Orders" {...a11yProps(1)} />
                  <Tab label="Change password" {...a11yProps(2)} />
                  <Tab label="Logout" {...a11yProps(3)} />
               </Tabs>
               <TabPanel value={value} index={0}>
                  <AccountDetailTab />
               </TabPanel>
               <TabPanel value={value} index={1}>
                  <OrdersTrackingTab />
               </TabPanel>
               <TabPanel value={value} index={2}>
                  <ChangePasswordForm />
               </TabPanel>
               <TabPanel value={value} index={3}>
                  Logout
               </TabPanel>
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
