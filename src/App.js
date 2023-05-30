import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { useState } from 'react';
import { allEmployee } from './database/database';
import  Home from './components/Home'
import Employee from './components/Employee';
function App() {
  const [allEmployees, setallEmployees] = useState(allEmployee)

  return (
    <div className="App">
       <Router>
            <Routes>
              <Route exact path='/' element={<Home setallEmployees={setallEmployees} allEmployees={allEmployees}/>}/>
              <Route exact path='/employee/:id' element={<Employee/>}/>
            </Routes>
       </Router>
      
    </div>
  );
}

export default App;
