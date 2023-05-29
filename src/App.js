import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import  Home from './components/Home'
import Employee from './components/Employee';
import Login from './components/Login';
function App() {

  return (
    <div className="App">
       <Router>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/employee/:id' element={<Employee/>}/>
              <Route exact path='/login' element={<Login/>}/>
            </Routes>
       </Router>
      
    </div>
  );
}

export default App;
