import React from 'react'
import PropTypes from 'prop-types'
import FacebookLogo from '@/assets/icons/FacebookLogo'
import './AboutUsLogo.scss'
import DigitalOceanLogo from '@/assets/icons/DigitalOceanLogo'
import AmazonLogo from '@/assets/icons/AmazonLogo'
import TeslaLogo from '@/assets/icons/TeslaLogo'
import AdobeLogo from '@/assets/icons/AdobeLogo'
AboutUsLogo.propTypes = {

}

function AboutUsLogo(props) {
   return (
      <div>
         <section className="bg-gray-100">
            <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8 logo">
               <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                  <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                     <FacebookLogo
                        className="h-12 text-gray-500 fill-current " />
                  </div>
                  <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                     <DigitalOceanLogo
                        className="h-10 text-gray-500 fill-current"/>
                  </div>
                  <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                     <AmazonLogo
                        className="h-8 mt-2 text-gray-500 fill-current"/>
                  </div>
                  <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
                     <TeslaLogo
                        className="h-5 mt-1 text-gray-500 fill-current"/>
                  </div>
                  <div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
                     <AdobeLogo
                        className="h-8 text-gray-500 fill-current"/>
                  </div>
               </div>
            </div>
         </section>

      </div>
   )
}

export default AboutUsLogo
