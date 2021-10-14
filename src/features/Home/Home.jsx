import React from 'react';
import PropTypes from 'prop-types';

Home.propTypes = {

};

function Home(props) {
   return (
      <main className="konsept-container flex items-center justify-center">
         <img
            alt="coming soon" src={require('@/assets/images/coming-soon.jpg').default}
            className="py-8 "
         />
      </main>
   );
}

export default Home;