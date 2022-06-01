import Dashboard from './pages/Dashboard'
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {ModalProvider} from "./Modal/ModalContext/ModalContext"



function App() {
  return (


      <div className='w-screen h-screen'>
       <Router>
         <ModalProvider>
         <Routes>
           <Route exact path = '/' element={<Dashboard/>}/>
           <Route path = '/login' element={<Login/>}/>
           <Route path = '/register' element={<Register/>}/>
         </Routes>
         </ModalProvider>
       </Router>
       </div>
     
  );
}

export default App;
