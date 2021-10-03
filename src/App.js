import './App.css';
import React, { Suspense } from "react";
import Routes from './Routes';
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
