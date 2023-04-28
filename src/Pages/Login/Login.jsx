import React from 'react';

const Login = () => {
 return (
  <div className="hero min-h-screen bg-base-200">
    
    <div className="hero-content flex-col lg:flex-row-reverse">
   
      <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <img className='login-img mt-10' src="/public/img/login.jpg" alt="" />
         
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      
        <form className="card-body">
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
            <input  className="btn btn-primary" type="submit" value="Login" />
              
           </div>
        </form>
        
      </div>
    </div>
  </div>
 );
};

export default Login;