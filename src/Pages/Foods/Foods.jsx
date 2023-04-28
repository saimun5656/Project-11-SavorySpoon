import React, { useEffect, useState } from 'react';
import Food from '../../Components/Food/Food';
import './Foods.css'
const Foods = () => {
    const[foods,setFoods]=useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=beef')
        .then(res=>res.json())
        .then(data=>setFoods(data.meals))
    },[])
    console.log(foods);
    return (
        <div className='bg-orange-100 foods py-5 rounded-lg'>
            <div className='w-11/12 max-w-screen-xl	mx-auto'>
            <div className='text-center'>
                <h2 className='text-2xl font-semibold mb-3'>Explore Our Foods</h2>
                <p className='mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat metus id amet.</p>
            </div>
            <div className='flex flex-col md:grid lg:grid-cols-3 gap-5 md:grid-cols-2 '>
              {
               foods.map(fd=><Food key={fd.idMeal} food={fd}></Food>)
              }
            </div>
            </div>
        </div>
    );
};

export default Foods;