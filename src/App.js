import logo from './logo.svg';
import './App.css';
import AllRoutes from './Route/AllRoutes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Route/Login';
import LandingPage from './Route/LandingPage';

function App() {
  return (
    <div className="App">
     {/* <AllRoutes/> */}
     {/* <Navbar/> */}
     {/* <Footer/> */}
     <Login/>
     {/* <LandingPage/> */}
    </div>
  );
}

export default App;
