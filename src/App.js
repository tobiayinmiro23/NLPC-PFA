// import './App.css';
import { useState,createContext } from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import  Home from './components/Home'
import Employee from './components/Employee';
import Login from './components/Login';
export let contextWrapper=createContext()
function App() {

  return (
    <div className="App">
       <Router>
          <contextWrapper.Provider  value={'lk'}>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/employee/:id' element={<Employee/>}/>
              <Route exact path='/login' element={<Login/>}/>
            
            </Routes>
          </contextWrapper.Provider>
       </Router>
      
    </div>
  );
}

export default App;
