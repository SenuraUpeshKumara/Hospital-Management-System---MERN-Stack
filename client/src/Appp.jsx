import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Suppliers from './Suppliers';
import UpdateUser from './UpdateUser' ;
import CreateUser from './CreateUser';



function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Suppliers/>}></Route>
        <Route path='/createuser' element={<CreateUser/>}></Route>
        <Route path='/update/:id' element={<UpdateUser/>}></Route>
       
       
      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App
