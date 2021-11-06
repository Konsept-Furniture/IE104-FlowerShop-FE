import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import MainLayout from './layouts/MainLayout/MainLayout';
import Fallback from './components/Fallback/Fallback';
import { path } from './constants/path';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const Home = lazy(() => import('./features/Home/Home'))
const AboutUs = lazy(() => import('./features/AboutUs/AboutUs'))
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

         {/* NEW ROUTE HERE */}

         <Route path={path.about} exact>
            <MainLayout>
               <Suspense fallback={<Fallback />}>
                  <ErrorBoundary>
                     <AboutUs />
                  </ErrorBoundary>
               </Suspense>
            </MainLayout>
         </Route>


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