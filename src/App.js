import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasicTable from './Table'
import Product from './Product';
import BasicCard from './Card'
import ACard from './ACard'


function App() {
  return <>
    <BrowserRouter>
      <Routes>
       <Route path='Table'element={<BasicTable/>}/>
       <Route path='Product/:id'element={<Product/>}/>
       <Route path='Card'element={<BasicCard />}/>
       <Route path='Acard'element={<ACard/>}/>
    
       
     
      </Routes>
    </BrowserRouter>

  </>      
}
export default App;