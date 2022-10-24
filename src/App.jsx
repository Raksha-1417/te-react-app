import logo from './logo.svg';
import './App.css';
import ClassComp  from './Components/About';
import Home from './Components/Home';

import Api from './Components/Projects'

import NavBar from './Components/Navbar';
import { Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Formval from './Components/Form';
import Footers from './Components/Footer';
function App() {
  return (
<div>
<NavBar/>

  <Routes>
      <Route path="" element={<Home/>}></Route>
      <Route path="api" element={<Api/>}></Route>
    
     </Routes>
     <Formval></Formval>

     
     <Footers></Footers>

</div>
  );
}

export default App;
