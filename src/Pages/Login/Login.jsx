import React, { useContext, useState } from 'react';
import { AuthContext } from '../Authprovider/Authprovider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const [success,setSuccess]=useState('')
    const [error,setError]=useState('')
  const navigate=useNavigate('')
  const{googleSignup ,logInWithEmailPass}=useContext(AuthContext)
  const location=useLocation()
  const from=location.pathname?.state?.from||'/'
  console.log(location);
  const handleSubmit=(e)=>{
    setError('')
    setSuccess('')
     e.preventDefault();
     const form =e.target;
     const email=form.email.value;
     const password=form.password.value;
     console.log(email,password);
     logInWithEmailPass(email,password)
     .then(res=>{
      console.log(res.user);
      setSuccess('user login succcessful')
     })
     .catch(err=>{
      console.log(err);
      setError(err.message)
     })
  }
  const handleGoogleLogin=()=>{
        googleSignup()
        .then(res=>{
           navigate(from)
        })
  }
  
 return (
  <div className="hero min-h-screen bg-base-200">
    
    <div className="hero-content flex-col lg:flex-row-reverse">
   
      <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <img className='login-img mt-10' src="./img/login.jpg" alt="" />
         
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      
        <form onSubmit={handleSubmit} className="card-body">
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
            <input  className="btn btn-primary mb-5" type="submit" value="Login" />
            <input onClick={handleGoogleLogin} className="btn btn-primary"  value="Continue with Google" />
           </div>
           <h1 className='text-red-500 mt-4'>{error}</h1>
           <h1 className='text-green-600'>{success}</h1>
        </form>
        
      </div>
    </div>
  </div>
 );
};

export default Login;