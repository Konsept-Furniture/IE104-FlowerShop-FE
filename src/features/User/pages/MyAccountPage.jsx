import { path } from '@/constants/path'
import useQuery from '@/hooks/useQuery'
import { Box, Tab, Tabs } from '@mui/material'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import ChangePasswordForm from '../components/ChangePasswordForm'
import AccountDetailTab from '../components/tabs/AccountDetailTab'
import OrdersTrackingTab from '../components/tabs/OrdersTrackingTab'
import ShippingInfoTab from '../components/tabs/ShippingInfoTab'
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

   return (
      <div className="my-account konsept-container">
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
               <Tab label="Shipping Information" {...a11yProps(1)} />
               <Tab label="Orders" {...a11yProps(3)} />
               <Tab label="Change password" {...a11yProps(3)} />
               <Tab label="Logout" {...a11yProps(4)} />
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
               <ChangePasswordForm />
            </TabPanel>
            <TabPanel value={value} index={4}>
               Logout
            </TabPanel>
         </Box>
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
