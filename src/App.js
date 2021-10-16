import React, { Suspense } from "react";
import Routes from './Routes';
// // Import Swiper styles
// import 'swiper/css';
// import "swiper/css/pagination"
// import "swiper/css/navigation"
import './App.scss';

import Authorization from './components/Authorization/Authorization';
import Loading from './components/Loading/Loading';

function App() {
  return (
    <div>
      <Routes />
      {/* <Loading /> */}
      {/* <Authorization /> */}
    </div>
  );
}

export default App;
