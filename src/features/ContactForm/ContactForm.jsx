import React from 'react'
import './ContactForm.scss'
import { OutlinedButton } from '@/components/button/Button'
import { init, send } from 'emailjs-com'
import { useSnackbar } from 'notistack'
init('user_GSaAQ0hkkCZyFoJUI14Lv')
ContactForm.propTypes = {}

function ContactForm() {
   const { enqueueSnackbar } = useSnackbar()
   const [toSend, setToSend] = React.useState({
      from_name: '',
      reply_to: '',
      message: ''
   })

   const onSubmit = e => {
      e.preventDefault()
      send(
         'service_k9h9ksl',
         'template_pxu9i0e',
         toSend,
         'user_GSaAQ0hkkCZyFoJUI14Lv')
         .then((response) => {
            console.log('SUCCESS!', response.status, response.text)
            enqueueSnackbar('Send email successfully', {
               variant: 'success'
            })
         })
         .catch((err) => {
            console.log('FAILED...', err)
            enqueueSnackbar('Send email failed', {
               variant: 'error'
            })
         })
   }

   const handleChange = e => {
      setToSend({ ...toSend, [e.target.name]: e.target.value })
   }
   return (
      <section id="contact-form" className="konsept-container mb-8">
         <form
            className="main-form"
            onSubmit={onSubmit}
         >
            <label className="label-name">
               <input name="from_name" type="text" placeholder="Name" autoComplete="new-password" value={toSend.from_name} onChange={handleChange} />
            </label>
            <label className="label-email">
               <input name="reply_to" type="email" placeholder="Email" value={toSend.reply_to} onChange={handleChange} />
            </label>
            <label className="label-message">
               <textarea name="message" placeholder="Message" value={toSend.message} onChange={handleChange}></textarea>
            </label>
            <OutlinedButton className="submit-button" name="submit" type="submit" value="Send">
               Send
            </OutlinedButton>
         </form>
         <aside className="aside-description">
            <span className="contact-us-title">Contact Us</span>
            <h2 className="contact-title">GOT ANY QUESTIONS?</h2>
            <p className="contact-description">
               Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat
               consequat auctor eu in elit.
            </p>
            <div className="description-address">
               <div className="store-address-container">
                  <h4 className="title-store">STORE</h4>
                  <a className="space-y-2 text-base text-konsept-gray" href="tel:+1123456789">
                     +321 421 4331
                  </a>
                  <br />
                  <a
                     className="space-y-1 text-base text-konsept-gray"
                     href="https://www.google.com/maps/search/1316+Abbot+Kinney+Blvd.+Copenhagen+CA+90291/@34.9860999,-100.5448383,4z?hl"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     1316 Birmingham Avenue.
                  </a>
                  <br />
                  <a
                     className="space-y-1 text-base text-konsept-gray"
                     href="https://www.google.com/maps/search/1316+Abbot+Kinney+Blvd.+Copenhagen+CA+90291/@34.9860999,-100.5448383,4z?hl"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     Manchester City UK 38310
                  </a>
               </div>
               <div className="store-address-container">
                  <h4 className="title-store">OFFICE</h4>
                  <a className="space-y-2 text-base text-konsept-gray" href="tel:+1123456789">
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
