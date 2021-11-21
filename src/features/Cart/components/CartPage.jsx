import React from 'react'
import './CartPage.scss'
CartPage.propTypes = {

}

function CartPage(props) {
   return (
      <div className="cart-container">
         <main className="main-space">
            <div className="basket">
               <div className="basket-product">
                  <div className="item">
                     <div className="product-image">
                        <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home5_6-1.jpg" alt="Placholder Image 2" className="product-frame"/>
                     </div>
                     <div className="product-details">
                        <h1><strong><span className="item-quantity">4</span> x Basket</strong> Product 1</h1>
                     </div>
                  </div>
                  <div className="price">26.00</div>
                  <div className="quantity">
                     <input type="tel" value="4" min="1" className="quantity-field"/>
                  </div>
                  <div className="subtotal">104.00</div>
                  <div className="remove">
                     <button>Remove</button>
                  </div>
               </div>
               <div className="basket-product">
                  <div className="item">
                     <div className="product-image">
                        <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home5_6-1.jpg" alt="Placholder Image 2" className="product-frame"/>
                     </div>
                     <div className="product-details">
                        <h1><strong><span className="item-quantity">1</span> x Basket</strong> Product 1</h1>
                     </div>
                  </div>
                  <div className="price">26.00</div>
                  <div className="quantity">
                     <input type="number" value="1" min="1" className="quantity-field"/>
                  </div>
                  <div className="subtotal">26.00</div>
                  <div className="remove">
                     <button>Remove</button>
                  </div>
               </div>
               <div className="basket-product">
                  <div className="item">
                     <div className="product-image">
                        <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home5_6-1.jpg" alt="Placholder Image 2" className="product-frame"/>
                     </div>
                     <div className="product-details">
                        <h1><strong><span className="item-quantity">1</span> x Basket</strong> Product 1</h1>
                     </div>
                  </div>
                  <div className="price">26.00</div>
                  <div className="quantity">
                     <input type="number" value="1" min="1" className="quantity-field"/>
                  </div>
                  <div className="subtotal">26.00</div>
                  <div className="remove">
                     <button>Remove</button>
                  </div>
               </div>
            </div>
            <aside>
               <div className="summary">
                  <div className="summary-total-items"><span className="total-items"></span>Cart Items</div>
                  <div className="summary-subtotal">
                     <div className="subtotal-title">Subtotal</div>
                     <div className="subtotal-value final-value" id="basket-subtotal">130.00</div>
                  </div>
                  <div className="summary-delivery">
                     <select name="delivery-collection" className="summary-delivery-selection">
                        <option value="0" selected="selected">Cash on Delivery</option>
                        <option value="zalopay">ZaloPay</option>
                        <option value="master-card">MasterCard</option>
                        <option value="visa-card">Visa</option>
                     </select>
                  </div>
                  <div className="payment-method">
                     <img className="visa" src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" />
                     <img className="mastercard" src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" />
                     <img className="momo" src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png" />
                     <img className="zalopay" src="https://thuthuatmaytinh.vn/wp-content/uploads/2019/02/ZaloPay-logo.png" />
                     <img className="paypal" src="https://www.pngitem.com/pimgs/m/518-5185068_paypal-logo-hd-png-download.png" />
                     <img className="cod" src="https://icon-library.com/images/shipping-icon/shipping-icon-21.jpg" />
                  </div>
                  <div className="summary-total">
                     <div className="total-title">Total</div>
                     <div className="total-value final-value" id="basket-total">130.00</div>
                  </div>
                  <div className="summary-checkout">
                     <button className="checkout-button">Check Out</button>
                  </div>
               </div>
            </aside>
         </main>
      </div>
   )
}

export default CartPage
