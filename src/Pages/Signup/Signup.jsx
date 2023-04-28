import React, { useContext, useState } from 'react';
import { AuthContext } from '../Authprovider/Authprovider';

const Signup = () => {
    const [success,setSuccess]=useState('')
    const [error,setError]=useState('')
    const {signUp,googleSignup}=useContext(AuthContext)
    const handleSubmit=(e)=>{
        setError('')
         e.preventDefault();
         const form =e.target;
         const name=form.name.value
         const email=form.email.value;
         const password=form.password.value;
         if(!/(?=.*[A-Z])/.test(password)){
            setError('please add atleast one captial alphabet')
            return
         }
         if(!/(?=.*[!@#$%^&*])/.test(password)){
            setError('please add atleast one special character')
            return
         }
         if(password.length<8){
            setError('set password atleast 8 digits')
            return
         }
         console.log(name,email,password);
         signUp(email,password)
         .then(res=>{
            console.log(res.user);
            setSuccess('user created succcessfully')
         })
         .catch(err=>{
            console.log(err);
            setError(err.message)
         })
    }
    const handlegoogleSignup=()=>{
        googleSignup()
        .then(res=>{
            console.log(res.user);
            setSuccess('user created successfully')
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
    
    <div className="hero-content flex-col lg:flex-row-reverse">
   
      <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <img className='login-img mt-10' src="/public/img/10594778_4498897.jpg" alt="" />
         
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      
        <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
               <label className="label">
                   <span className="label-text">Name</span>
               </label>
               <input type="text" name='name' placeholder="Name" className="input input-bordered" />
           </div>
           <div className="form-control">
               <label className="label">
                   <span className="label-text">Email</span>
               </label>
               <input type="email" name='email' placeholder="email" className="input input-bordered" />
           </div>
           <div className="form-control">
               <label className="label">
                   <span className="label-text">Password</span>
               </label>
               <input type="password" name='password' placeholder="password" className="input input-bordered" />
               <label className="label">
                   <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
               </label>
           </div>
           <div className="form-control mt-6">
            <input  className="btn btn-primary mb-5" type="submit" value="Sign up" />
            <input onClick={handlegoogleSignup} className="btn btn-primary"  value="Continue with Google" />
           </div>
           <h1 className='text-red-500 mt-4'>{error}</h1>
           <h1 className='text-green-600'>{success}</h1>
        </form>
        
      </div>
    </div>
  </div>
    );
};

export default Signup;