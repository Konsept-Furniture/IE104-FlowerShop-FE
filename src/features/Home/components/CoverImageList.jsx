import React from 'react'
import PropTypes from 'prop-types'
import './CoverImageList.scss'
import GithubIcon from '@/assets/icons/GithubIcon'
CoverImageList.propTypes = {

}

function CoverImageList(props) {
   return (
      <div className="container-cover">
         <div className="cover-image-list">

            <div className="cover-image-list_item_1">
               <img className="cover-img" src="https://konsept.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/82176465_256624332109571_1159199082029158434_nlow.jpg" alt="1st"/>
            </div>

            <div className="cover-image-list_item_2">
               <img className="cover-img" src="https://konsept.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/101332623_1394947904026208_5844355112229304732_nlow.jpg" alt="2nd"/>
            </div>

            <div className="cover-image-list_item_3">
               <img className="cover-img" src="https://konsept.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/101118979_2927420374039488_3155069194091268435_nlow.jpg" alt="3rd"/>
            </div>

            <div className="cover-image-list_item_4">
               <img className="cover-img" src="https://konsept.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/101519408_245446196878121_8730808137382785977_nlow.jpg" alt="4th"/>
            </div>

            <div className="cover-image-list_item_5">
               <img className="cover-img" src="https://konsept.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/101430495_279912596726245_815325566694950172_nlow.jpg" alt="5th"/>
            </div>

            <div className="cover-image-list_item_6">
               <img className="cover-img" src="https://konsept.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/101645520_616307002570705_5986228114882814629_nlow.jpg" alt="6th"/>
            </div>

         </div>
      </div>
   )
}

export default CoverImageList
