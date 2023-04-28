import React from 'react';
import './Food.css'
const Food = ({food}) => {
    const{idMeal,strMeal,strMealThumb}=food
    console.log(idMeal);
    return (
        <div>
            <div className="card card-compact w-100 bg-base-100 shadow-xl">
                <figure><img src={strMealThumb} alt="Shoes" /></figure>
                <div className="card-body bg-white rounded-b-xl">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                     <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food;