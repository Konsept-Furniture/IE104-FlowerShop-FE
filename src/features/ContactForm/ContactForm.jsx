import React from 'react'
import './ContactForm.scss'
import { OutlinedButton } from '@/components/button/Button'
ContactForm.propTypes = {}

function ContactForm(props) {
   return (
      <section id="contact-form" className="konsept-container">
         <form
            className="main-form"
            id="contact"
            name="contact"
            action="mailto:annhien.se@gmail.com"
            target="_top"
            encType="multipart/form-data"
            method="post"
            acceptCharset="utf-8"
         >
            <label className="label-name">
               <input name="name" type="text" placeholder="Name" autoComplete="new-password" />
            </label>
            <label className="label-email">
               <input name="email" type="email" placeholder="Email" />
            </label>
            <label className="label-message">
               <textarea name="message" placeholder="Message"></textarea>
            </label>
            <OutlinedButton
               className="submit-button"
               name="submit"
               type="submit"
               value="Send"
            >
               Send
            </OutlinedButton>
         </form>
         <aside className="aside-description">
            <span className="contact-us-title">Contact Us</span>
            <h2 className="contact-title">GOT ANY QUESTIONS?</h2>
            <p className="contact-description">
               Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
               mauris vitae erat consequat auctor eu in elit.
            </p>
            <div className="description-address">
               <div className="store-address-container">
                  <h4 className="title-store">STORE</h4>
                  <a
                     className="space-y-2 text-base text-konsept-gray"
                     href="tel:+1123456789"
                  >
                     +112 345 6789
                  </a>
                  <br />
                  <a
                     className="space-y-1 text-base text-konsept-gray"
                     href="https://www.google.com/maps/search/1316+Abbot+Kinney+Blvd.+Copenhagen+CA+90291/@34.9860999,-100.5448383,4z?hl"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     1316 Abbot Kinney Blvd.
                  </a>
                  <br />
                  <a
                     className="space-y-1 text-base text-konsept-gray"
                     href="https://www.google.com/maps/search/1316+Abbot+Kinney+Blvd.+Copenhagen+CA+90291/@34.9860999,-100.5448383,4z?hl"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     Copenhagen CA 90291
                  </a>
               </div>
               <div className="store-address-container">
                  <h4 className="title-store">OFFICE</h4>
                  <a
                     className="space-y-2 text-base text-konsept-gray"
                     href="tel:+1123456789"
                  >
                     +112 345 6789
                  </a>
                  <br />
                  <a
                     className="space-y-1 text-base text-konsept-gray"
                     href="https://www.google.com/maps/search/1316+Abbot+Kinney+Blvd.+Copenhagen+CA+90291/@34.9860999,-100.5448383,4z?hl"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     1316 Abbot Kinney Blvd.
                  </a>
                  <br />
                  <a
                     className="space-y-1 text-base text-konsept-gray"
                     href="https://www.google.com/maps/search/1316+Abbot+Kinney+Blvd.+Copenhagen+CA+90291/@34.9860999,-100.5448383,4z?hl"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     Copenhagen CA 90291
                  </a>
               </div>
            </div>
         </aside>
      </section>
   )
}

export default ContactForm
