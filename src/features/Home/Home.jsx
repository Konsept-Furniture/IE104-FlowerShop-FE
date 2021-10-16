import React from 'react';
import PropTypes from 'prop-types';
import HeroSlider from '@/components/HeroSlider/HeroSlider';

Home.propTypes = {

};

function Home(props) {
   return (
      <main className="flex items-center justify-center">
         <HeroSlider />
      </main>
   );
}

export default Home;