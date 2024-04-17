import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users' ;
import axios from 'axios';

import Updateuser from './Updateuser' ;
import Createuser from './Createuser';
import Dashboard  from './Components/Dashboard/Dashboard';

//Supplier

import Suppliers from './Components/Supplier/Suppliers';
import CreateSupp from './Components/Supplier/CreateUser';
import UpdateSupp from './Components/Supplier/UpdateUser';

//Bank
import Info from './Components/Bank/Info';
import CreateInfo from './Components/Bank/CreateInfo';
import UpdateInfo from './Components/Bank/UpdateInfo';

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



         <Route path='/Suppliers' element ={<Suppliers/>} />
         <Route path='/CreateSupplier' element ={<CreateSupp/>} />
         <Route path='/UpdateDeleteSupplier/:id' element ={<UpdateSupp/>} />

         <Route path='/Info' element ={<Info/>} />
         <Route path='/CreateInfo' element ={<CreateInfo/>} />
         <Route path='/UpdateInfo/:id' element ={<UpdateInfo/>} />
       
      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App
