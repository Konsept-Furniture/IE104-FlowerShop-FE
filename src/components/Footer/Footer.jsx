import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
Footer.propTypes = {

};

function Footer(props) {
   return (
      <footer>
         <Box className="px-10 py-10" bgcolor="#f4f2f2" color="#1d1d1d">
            <Container className="max-w-lg bg-gray-500" >
               <Grid container spacing={5}>
                  <Grid item xs={6} sm={4} py={3}>
                     <Box py={2}>HELP</Box>
                     <Box>
                        <Link href="#" className="pb-8 no-underline" color="#8b8b8b">FAQs</Link>
                     </Box>
                     <Box>
                        <Link className="m-5 no-underline" href="#" color="#8b8b8b">Pricing Plan</Link>
                     </Box>
                     <Box>
                        <Link href="#" color="#8b8b8b">Your Order</Link>
                     </Box>
                     <Box>
                        <Link href="#" color="#8b8b8b">My Account</Link>
                     </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                     <Box py={2}>ABOUT US</Box>
                     <Box>
                        <Link href="#" color="#8b8b8b">Our Story</Link>
                     </Box>
                     <Box>
                        <Link href="#" color="#8b8b8b">Job Opportunity</Link>
                     </Box>
                     <Box>
                        <Link href="#" color="#8b8b8b">Store Locator</Link>
                     </Box>
                     <Box>
                        <Link href="#" color="#8b8b8b">Contact Us</Link>
                     </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                     <Box py={2}>CUSTOMER SERVICE</Box>
                     <Box>
                        <Link href="#" color="#8b8b8b">My Account</Link>
                     </Box>
                     <Box>
                        <Link href="#" color="#8b8b8b">Term of Use</Link>
                     </Box>
                     <Box>
                        <Link href="#" color="#8b8b8b">Deliveries and Returns</Link>
                     </Box>
                     <Box>
                        <Link href="#" color="#8b8b8b">My Account</Link>
                     </Box>
                  </Grid>
               </Grid>

            </Container>
         </Box>
      </footer>
   );
}

export default Footer;