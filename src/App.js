import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasicTable from './Table'
import Product from './Product';
import BasicCard from './Card'
import ACard from './ACard'
import Login from './Login'
 import Drawer from './myDrawer'
import Registration from './Registration';


function App() {
  return <>
    <BrowserRouter> 
      <Routes>
      <Route path='/'element={<Login/>}/>
       <Route path='Table'element={<BasicTable/>}/>
       <Route path='Product/:id'element={<Product/>}/>
       <Route path='Card'element={<BasicCard />}/>
       <Route path='Acard'element={<ACard/>}/>
       <Route path='Drawer'element={<myDrawer/>}/>
       <Route path='Registration'element={<Registration/>}/>    
     
      </Routes>
    </BrowserRouter>

  </>      
}
export default App;