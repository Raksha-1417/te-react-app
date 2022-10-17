import logo from './logo.svg';
import './App.css';
import ClassComp  from './Components/About';
import Home from './Components/Home';

import NavBar from './Components/Navbar';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
<div>
<NavBar/>
  <Routes>
      <Route path="funcom" element={<Home/>}></Route>
      <Route path="classcom" element={<ClassComp/>}></Route>
    
     </Routes>

</div>
  );
}

export default App;
