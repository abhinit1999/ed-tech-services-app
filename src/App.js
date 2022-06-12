import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Header from './component/Header';
function App() {
  return (
    <div className="App">
<Header/>
<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/service' element={<Service/>}/>
<Route path='*' element={<><h1 style={{ backgroundColor:'lightblue' ,textAlign:'center',height:'100vh' }}>!!! 404 page not found !!!</h1></>}/>


</Routes>



    </div>
  );
}

export default App;
