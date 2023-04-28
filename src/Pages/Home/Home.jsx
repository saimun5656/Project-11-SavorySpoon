import React from 'react';
import './Home.css'
import { Button } from 'react-daisyui';
const Home = () => {
  return (
    <div className='home grid md:grid-cols-4 grid-rows-4 md:grid-rows-3'>
       <div className='bg-orange-100 w-100 md:col-span-3 row-span-3 md: md:row-span-3 sec1 md:rounded-l-lg rounded-t-lg flex'>  
         <div className='my-auto w-11/12 mx-auto max-w-screen-xl flex justify-between gap-5 py-5'>  
         <div >
           <h1 ><img className='w-96  mb-8' src="/public/img/Food.png" alt="" /></h1>
           <p className='text-5xl font-bold mb-8'>Discover Restaurant <br/>& Delicious Food</p>
           <div className='search-container '>
           <input className='search ps-8' type="text" placeholder='search restaurant, food'/> 
           <button className='search-btn py-2 bg-green-400 px-8 '>Search</button>
           </div>
         </div>
         <div className='hidden lg:block'>
           <img className='w-72 mb-4' src="/public/img/Make Vector BG.png" alt="" />
           <img className='w-72' src="/public/img/Make Vector BG.png" alt="" />
         </div>  
         </div>  
       </div>
       <div className='bg-green-400 w-100 sec2 md:rounded-r-lg rounded-b-lg md:rounded-bl-none md:row-span-3 relative'>
        
        <img className='plate absolute md:top-48 md:-left-56 right-2
        top-10 z-10' src="/public/img/food-banner.png" alt="" />
        <img className='absolute md:top-32  md:right-60 md:left-0 w-36 right-44 bottom-0 z-0' src="/public/img/food-banner-2.png" alt=""/>
       </div>
    </div>
  );
};

export default Home;