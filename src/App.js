import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Routes ,Route } from 'react-router-dom';

import Home from './screens/Home';
import About from './screens/About';
import Service from './screens/Service';
import Tools from './screens/tools';
import Navbar from './screens/Navbar';


function App() {
  return (
    <div className="main-wrapper">
    <>
    <Navbar />
    <br />
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Service' element={<Service/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Tools' element={<Tools/>}/>
    </Routes>

    </>
    </div>
  );
}

export default App;