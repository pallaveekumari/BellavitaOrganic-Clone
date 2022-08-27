import logo from './logo.svg';
import './App.css';
import AllRoutes from './Route/AllRoutes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Route/Login';
import LandingPage from './Route/LandingPage';
import Signup from './Route/Signup';

import ProductPage from './Route/ProductPage';

function App() {
  return (
    <div className="App">
     <AllRoutes/>
     {/* <Navbar/> */}
     {/* <Footer/> */}
     {/* <Login/> */}
     {/* <LandingPage/> */}
     {/* <Signup/> */}
     {/* <ProductPage/> */}
    </div>
  );
}

export default App;
