import React, { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Components/Product';
import Spinner from '../Components/Spinner';

const Home = () => {
  const API= "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [loading,setLoading] = useState(false);
  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(API);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      // console.log(data);
      setProducts(data);
    } 
    catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);

  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
      {
        loading?(<Spinner></Spinner>):
        (
          products.map((product)=>{
            return (
              
  
                <Product product={product} key={product.id} ></Product>
              
            )
          })
        )
      }
    </div>
  );
};

export default Home;
