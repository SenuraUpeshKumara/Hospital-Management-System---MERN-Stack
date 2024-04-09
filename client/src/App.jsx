import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users' ;
import axios from 'axios';

import Updateuser from './Updateuser' ;
import Createuser from './Createuser';
import Dashboard  from './Components/Dashboard/Dashboard';





function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/Users' element={<Users/>}></Route>
        <Route path='/createuser' element={<Createuser/>}></Route>
       
         <Route path='/update/:id' element={<Updateuser/>}></Route>

         <Route path='/' element ={<Dashboard/>} />
       
      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App
