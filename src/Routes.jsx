import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Fallback from './components/Fallback/Fallback'
import { path } from './constants/path'
import WishlistPage from './features/Wishlist/pages/WishlistPage'
import AuthenticatedGuard from './guards/AuthenticatedGuard'
import UnauthenticatedGuard from './guards/UnauthenticatedGuard'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import MainLayout from './layouts/MainLayout/MainLayout'

const Home = lazy(() => import('./features/Home/Home'))
const Login = lazy(() => import('./features/Auth/Login/Login'))
const Register = lazy(() => import('./features/Auth/Register/Register'))
const ProductList = lazy(() => import('./features/Product/pages/ProductListPage'))
const ProductDetail = lazy(() => import('./features/Product/pages/ProductDetailPage'))
const AboutUs = lazy(() => import('./features/AboutUs/AboutUs'))
const NotFound = lazy(() => import('./features/NotFound/NotFound'))
const Cart = lazy(() => import('./features/Cart/pages/CartPage'))
const Order = lazy(() => import('./features/Order/pages/OrderPage'))
const MyAccount = lazy(() => import('./features/User/pages/MyAccountPage'))

Routes.propTypes = {}

function Routes() {
   return (
      <Switch>
         <Route path={path.home} exact>
            <MainLayout>
               <Suspense fallback={<Fallback />}>
                  <ErrorBoundary>
                     <Home />
                  </ErrorBoundary>
               </Suspense>
            </MainLayout>
         </Route>

         {/* NEW ROUTE HERE */}

         <Route path={path.login} exact>
            <UnauthenticatedGuard>
               <AuthLayout>
                  <Suspense fallback={<Fallback />}>
                     <ErrorBoundary>
                        <Login />
                     </ErrorBoundary>
                  </Suspense>
               </AuthLayout>
            </UnauthenticatedGuard>
         </Route>
         <Route path={path.register} exact>
            <AuthLayout>
               <Suspense fallback={<Fallback />}>
                  <ErrorBoundary>
                     <Register />
                  </ErrorBoundary>
               </Suspense>
            </AuthLayout>
         </Route>

         {/* PRODUCT */}
         <Route path={path.products} exact>
            <MainLayout>
               <Suspense fallback={<Fallback />}>
                  <ErrorBoundary>
                     <ProductList />
                  </ErrorBoundary>
               </Suspense>
            </MainLayout>
         </Route>
         <Route path={path.productDetail} exact>
            <MainLayout>
               <Suspense fallback={<Fallback />}>
                  <ErrorBoundary>
                     <ProductDetail />
                  </ErrorBoundary>
               </Suspense>
            </MainLayout>
         </Route>

         {/* About */}
         <Route path={path.about} exact>
            <MainLayout>
               <Suspense fallback={<Fallback />}>
                  <ErrorBoundary>
                     <AboutUs />
                  </ErrorBoundary>
               </Suspense>
            </MainLayout>
         </Route>

         {/* Cart */}
         <Route path={path.cart} exact>
            <AuthenticatedGuard>
               <MainLayout>
                  <Suspense fallback={<Fallback />}>
                     <ErrorBoundary>
                        <Cart />
                     </ErrorBoundary>
                  </Suspense>
               </MainLayout>
            </AuthenticatedGuard>
         </Route>
         <Route path={path.wishlist} exact>
            <AuthenticatedGuard>
               <MainLayout>
                  <Suspense fallback={<Fallback />}>
                     <ErrorBoundary>
                        <WishlistPage />
                     </ErrorBoundary>
                  </Suspense>
               </MainLayout>
            </AuthenticatedGuard>
         </Route>
         <Route path={path.order} exact>
            <AuthenticatedGuard>
               <MainLayout>
                  <Suspense fallback={<Fallback />}>
                     <ErrorBoundary>
                        <Order />
                     </ErrorBoundary>
                  </Suspense>
               </MainLayout>
            </AuthenticatedGuard>
         </Route>

         <Route path={path.user} exact>
            <AuthenticatedGuard>
               <MainLayout>
                  <Suspense fallback={<Fallback />}>
                     <ErrorBoundary>
                        <MyAccount />
                     </ErrorBoundary>
                  </Suspense>
               </MainLayout>
            </AuthenticatedGuard>
         </Route>

         <Route path={path.notFound}>
            <Suspense fallback={<Fallback />}>
               <ErrorBoundary>
                  <NotFound />
               </ErrorBoundary>
            </Suspense>
         </Route>
      </Switch>
   )
}

export default Routes
