
// eslint-disable-next-line no-unused-vars

import React from 'react';
// import { PortfolioContainer } from './portfolio-container/PortfolioContainer'
// import Profile from './PortfolioContainer/Home/Profile'
import Footer from './PortfolioContainer/Home/Footer/Footer'
// import { LoaderBar } from './utilities/commonUtils'
// import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './PortfolioContainer/Home/Home'

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
     <ToastContainer />
      {/* <LoaderBar /> */} 
      {/* {/* <Profile /> */}
      <Footer />
      <Home />
    </div>
  );
}

export default App;