import axios from 'axios';
import { useEffect,useState } from 'react';
import './HomePage.css'
import { Header } from '../../components/Header';
import { Product } from './Product';
export function HomePage({cart,loadCart}) {
const [products,setProducts]=useState([]);

    useEffect(()=>{
const getHomeData= async()=>{
 const response=await axios.get('/api/products');
   setProducts(response.data);
};
getHomeData();
    

    
    },[]);
    
    return (
        <>
            <Header  cart={cart}/>
            <div className="home-page">
                <div className="products-grid">
                    {
                        products.map((product) =>{
                           return(
    
                  <Product key={product.id} product={product} loadCart={loadCart}/>
                    );
    })
}
                    
                </div>
            </div>
        </>
    );

}