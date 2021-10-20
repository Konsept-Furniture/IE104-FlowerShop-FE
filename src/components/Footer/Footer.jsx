import FacebookIcon from '@/assets/icons/FacebookIcon';
import GithubIcon from '@/assets/icons/GithubIcon';
import React from 'react';
Footer.propTypes = {

};

function Footer(props) {
   return (
      <footer className="text-gray-800 pb-8 pt-4">
         <div className="konsept-container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
            <div className="lg:w-1/3">
               <div className="mr-4 lg:mr-8 h-14">
                  <img
                     className="h-full"
                     src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng.png"
                     alt="logo"
                     srcSet="https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng.png 330w, https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng-300x105.png 300w"
                     sizes="(max-width: 330px) 100vw, 330px"
                  />
               </div>
               <a className="sm:flex-col sm:text-center sm:items-center" href="https://hackertyper.com/" >Description here</a><br />
            </div>
            <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
               <div className="space-y-3">
                  <h3 className="-ml-2 font-josefins font-bold tracking-wide uppercase text-lg text-konsept">Product</h3>
                  <ul className="space-y-1">
                     <li>
                        <a className="font-josefins text-base text-konsept-gray" href="https://hackertyper.com/">Flowers</a>
                     </li>
                     <li>
                        <a className="font-josefins text-base text-konsept-gray" href="https://hackertyper.com/">Furniture</a>
                     </li>
                     <li>
                        <a className="font-josefins text-base text-konsept-gray" href="https://hackertyper.com/">Flower pot</a>
                     </li>
                     <li>
                        <a className="font-josefins  text-base text-konsept-gray" href="https://hackertyper.com/">Decorations</a>
                     </li>
                  </ul>
               </div>
               <div className="space-y-3">
                  <h3 className="font-bold font-josefins  tracking-wide uppercase text-lg text-konsept">Services</h3>
                  <ul className="space-y-1">
                     <li>
                        <a className="font-josefins text-base text-konsept-gray" href="https://hackertyper.com/">My Account</a>
                     </li>
                     <li>
                        <a className="font-josefins text-base text-konsept-gray" href="https://hackertyper.com/">Gift card</a>
                     </li>
                  </ul>
               </div>
               <div className="space-y-3">
                  <h3 className="font-bold font-josefins uppercase text-lg text-konsept">Contact</h3>
                  <ul className="space-y-1">
                     <li>
                        <a className="font-josefins text-base text-konsept-gray" href="https://hackertyper.com/">Store Locator</a>
                     </li>
                     <li>
                        <a className="font-josefins text-base text-konsept-gray" href="https://hackertyper.com/">Phone</a>
                     </li>
                     <li>
                        <a className="font-josefins text-base text-konsept-gray" href="https://hackertyper.com/">Email</a>
                     </li>
                  </ul>
               </div>
               <div className="space-y-3">
                  <div className="font-bold uppercase text-lg text-konsept">Social media</div>
                  <div className="flex ml-1 justify-start space-x-3">
                     <a href="https://hackertyper.com/" title="Github" className="flex items-center p-1">
                        <div>
                           <GithubIcon />
                        </div>
                     </a>
                     <a href="https://hackertyper.com/" title="Facebook" className="flex items-center p-1">
                        <div>
                           <FacebookIcon />
                        </div>
                     </a>
                  </div>
                  <div className="space-y-3">
                     <a className="space-y-2 text-base font-josefins text-konsept-gray" href="tel:+1123456789">+112 345 6789</a><br />
                     <a className="space-y-1 text-base font-josefins text-konsept-gray" href="https://www.google.com/maps/search/1316+Abbot+Kinney+Blvd.+Copenhagen+CA+90291/@34.9860999,-100.5448383,4z?hl" target="_blank" rel="noopener noreferrer">1316 Abbot Kinney Blvd.</a><br />
                     <a className="space-y-1 text-base font-josefins text-konsept-gray" href="https://www.google.com/maps/search/1316+Abbot+Kinney+Blvd.+Copenhagen+CA+90291/@34.9860999,-100.5448383,4z?hl" target="_blank" rel="noopener noreferrer">Copenhagen CA 90291</a>
                  </div>
               </div>
            </div>
         </div>
         {/* <div className="px-0 font-josefins  text-lg bg-white text-left text-konsept-gray italic">© 2020 Qode Interactive, All Rights Reserved</div> */}
      </footer>
   );
}

export default Footer;