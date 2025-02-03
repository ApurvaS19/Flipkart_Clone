import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BasicTable from './Table'
import Product from './Product';
import BasicCard from './Card'
import ACard from './ACard'
import Login from './Login'
 import Drawer from './myDrawer'
import Registration from './Registration';
 import Mini from './Mini';
import Appbar from './Appbar';
import Pa from './Pa';
import { ProductCountContext} from './Context';
import { useState } from 'react';



function App() {
  const [arr, setArr]= useState([])

  function addToCart(product){
    console.log("I am in add to cart", product);

    arr.push(product);
    setArr([...arr]);
  }
  
  function deleteItem(id){
    console.log("i m in delte", id);

    let newArr = arr.filter((val)=>{
      if(val.id != id){
        return val
      }
    })
    setArr([...newArr]); 
  }
  
  
  return <>
    <ProductCountContext.Provider value={ {addToCart: addToCart, arr: arr,deleteItem:deleteItem} } >
  
    
    <BrowserRouter> 


      <Routes>
      <Route path='ACard' element={<Mini/>}>
        <Route path='' element={<ACard/>}/>
        <Route path='Product/:id' element={<Product/>}/>
      </Route>

      <Route path='/'element={<Login/>}/>
       <Route path='Table'element={<BasicTable/>}/>
       <Route path='Product/:id'element={<Product/>}/>
       <Route path='Card'element={<BasicCard />}/>
       <Route path='Acard'element={<ACard/>}/>
       <Route path='Drawer'element={<myDrawer/>}/>
       <Route path='Registration'element={<Registration/>}/>   
       <Route path='Mini'element={<Mini/>}/> 
       <Route path='Appbar'element={<Appbar/>}/> 
       {/* <Route path='Pa'element={<Pa/>}/>  */}
      </Routes>
    </BrowserRouter>
    </ProductCountContext.Provider>

  </>      
}
export default App;