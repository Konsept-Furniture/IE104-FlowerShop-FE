import React from 'react'
import './style.scss'

function OurAdvantages() {
   return (
      <section id="our-advantages">
         <div className="konsept-container advantage__container">
            <div className="advantage__item">
               <div className=" advantage__item-icon">
                  <img
                     src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home2_icons-1.png"
                     alt=""
                     className="advantage__item-icon--image"
                  />
               </div>
               <div className="advantage__item-content">
                  <h4>24H SERVICE</h4>
                  <a className="konsept-link">More Info</a>
               </div>
            </div>
            <div className="advantage__item">
               <div className=" advantage__item-icon">
                  <img
                     src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home2_icons-2.png"
                     alt=""
                     className="advantage__item-icon--image"
                  />
               </div>
               <div className="advantage__item-content">
                  <h4>FREE RETURNS</h4>
                  <a className="konsept-link">More Info</a>
               </div>
            </div>
            <div className="advantage__item">
               <div className=" advantage__item-icon">
                  <img
                     src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home2_icons-3.png"
                     alt=""
                     className="advantage__item-icon--image"
                  />
               </div>
               <div className="advantage__item-content">
                  <h4>ORDER TRACKING</h4>
                  <a className="konsept-link">More Info</a>
               </div>
            </div>
            <div className="advantage__item">
               <div className=" advantage__item-icon">
                  <img
                     src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home2_icons-4.png"
                     alt=""
                     className="advantage__item-icon--image"
                  />
               </div>
               <div className="advantage__item-content">
                  <h4>FAST DELIVERY</h4>
                  <a className="konsept-link">More Info</a>
               </div>
            </div>
            {/* <div className="advantage__item"></div>
            <div className="advantage__item"></div>
            <div className="advantage__item"></div> */}
         </div>
      </section>
   )
}

export default OurAdvantages
