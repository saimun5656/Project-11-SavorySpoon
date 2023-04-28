import React, { useContext } from 'react';
import { Button, Dropdown, Navbar, Menu } from 'react-daisyui';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Pages/Authprovider/Authprovider';

const Header = () => {
    const{user, logout}=useContext(AuthContext)
    return (
        <nav className='w-11/12 mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-orange-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/foods'>Foods</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/signup' className="py-0">Sign Up</Link></li>
                        </ul>
                    </div>
                    <a className="normal-case text-3xl font-bold text-emerald-400">Savory</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/foods'>Foods</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/signup' className="py-0">Sign Up</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <p className='me-5'>{user?user.displayName.split(" ")[0]:'user'}</p>
                    <img className='rounded-full w-8 bg-gray-200' src={`${user?user.photoURL:"/public/img/Usercon.png"}`} alt="" />
                    {
                        user?<button className='ms-5 bg-green-300 px-3 py-2 rounded-lg' onClick={logout}>logout</button>
                            :
                            <Link to='/login' className="py-0"><button className="5 bg-green-300 px-3 py-2 rounded-lg ms-2">Login</button></Link>
                

                    }
                    
                </div>
            </div>
        </nav>
    );
};

export default Header