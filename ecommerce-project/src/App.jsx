import axios from 'axios'
import { useEffect,useState } from 'react'
import { Routes, Route} from 'react-router'
import { HomePage } from './pages/HomePage'
 import { Checkout } from './pages/Checkout.jsx'
 import { Orders } from './pages/Orders.jsx'
import './App.css'

function App() {
 const [cart,setCart]=useState([]);

 useEffect(()=>{
axios.get('/api/cart-items?expand=product')
     .then((response)=>{
             setCart(response.data);
      });
 },[]);
  
  
  return (
    <Routes>
      <Route index element={ <HomePage cart={cart}/>}/>   
            <Route path='checkout' element={ <Checkout cart={cart}/>}/>   
            <Route path='orders' element={ <Orders  cart={cart}/>}/>   

    </Routes>
      
   
  )
}

export default App
