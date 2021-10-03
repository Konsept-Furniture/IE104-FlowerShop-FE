import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import MainLayout from './layouts/MainLayout/MainLayout';
import Fallback from './components/Fallback/Fallback';
import { path } from './constants/path';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const Home = lazy(() => import('./features/Home/Home'))
const NotFound = lazy(() => import('./features/NotFound/NotFound'))

Routes.propTypes = {

};

function Routes(props) {
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

         {/* <Route path={path.productDetail} exact>
            <MainLayout>
               <Suspense fallback={<Fallback />}>
                  <ErrorBoundary>
                     <ProductDetail />
                  </ErrorBoundary>
               </Suspense>
            </MainLayout>
         </Route>

         <Route path={path.login}>
            <UnauthenticatedGuard>
               <RegisterLayout title="Đăng nhập">
                  <Suspense fallback={<Fallback />}>
                     <ErrorBoundary>
                        <Login />
                     </ErrorBoundary>
                  </Suspense>
               </RegisterLayout>
            </UnauthenticatedGuard>
         </Route>

         <Route path={path.register}>
            <UnauthenticatedGuard>
               <RegisterLayout title="Đăng ký">
                  <Suspense fallback={<Fallback />}>
                     <ErrorBoundary>
                        <Register />
                     </ErrorBoundary>
                  </Suspense>
               </RegisterLayout>
            </UnauthenticatedGuard>
         </Route>

         <Route path={path.user}>
            <AuthenticatedGuard>
               <MainLayout>
                  <Suspense fallback={<Fallback />}>
                     <ErrorBoundary>
                        <User />
                     </ErrorBoundary>
                  </Suspense>
               </MainLayout>
            </AuthenticatedGuard>
         </Route>

         <Route path={path.cart}>
            <AuthenticatedGuard>
               <CartLayout>
                  <Suspense fallback={<Fallback />}>
                     <ErrorBoundary>
                        <Cart />
                     </ErrorBoundary>
                  </Suspense>
               </CartLayout>
            </AuthenticatedGuard>
         </Route> */}

         <Route path={path.notFound}>
            <Suspense fallback={<Fallback />}>
               <ErrorBoundary>
                  <NotFound />
               </ErrorBoundary>
            </Suspense>
         </Route>
      </Switch>
   );
}

export default Routes;