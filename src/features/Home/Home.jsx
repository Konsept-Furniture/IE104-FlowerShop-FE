import React from 'react'
import HeroSlider from '@/components/HeroSlider/HeroSlider'
import CoverImageList from './components/CoverImageList'

Home.propTypes = {

}

function Home(props) {
   return (
      <main className="flex items-center justify-center">
         <HeroSlider />
         <CoverImageList />
      </main>
   )
}

export default Home
