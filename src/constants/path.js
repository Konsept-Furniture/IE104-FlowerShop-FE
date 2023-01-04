class Path {
   constructor() {
      this.home = '/'
      this.shop = '/shop'
      this.about = '/about'
      this.login = '/login'
      this.register = '/register'
      this.products = '/products'
      this.productDetail = '/products/:productId'
      this.cart = '/cart'
      this.wishlist = '/wishlist'
      this.order = '/order/:orderId'
      this.user = '/user'
      // this.profile = this.user + '/profile'
      // this.password = this.user + '/password'
      this.notFound = '*'
   }
}

export const path = new Path()
