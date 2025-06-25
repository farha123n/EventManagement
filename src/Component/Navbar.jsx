import React, { useContext } from 'react';
import { Link } from 'react-router';
import zig from '../assets/Zigwork.png'
import { AuthContext } from './Provider/AuthProvider';
import { toast } from 'react-toastify';
import ToolTip from './ToolTip';
const Navbar = () => {
    const {user,signOutUser}=useContext(AuthContext)
      
   const handleSignOut=()=>{
    signOutUser().then(()=>{
        toast.success('sign out successfully')
    }).catch(error=>{
        toast.error('sign up failed')
    })
   }
    const links =
        <>
            <Link to='/'><li className='text-highlight m-4'>Home</li></Link>
         {user&&<>
               <Link to='/addTask'><li className='text-highlight m-4'>Add Task</li></Link>
            <Link to='/myPostTask'><li className='text-highlight m-4'>My Posted Task</li></Link>
         </>}
            <Link to='/browsTask'><li className='text-highlight m-4'>Brows Task</li></Link>

        </>

    return (
        <div className='py-5'>
            <div className="navbar bg-primary shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabindex="0"
                            className="menu menu-sm dropdown-content bg-primary rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className=" text-xl ">
                        <img className='w-20' src={zig} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">

                    <ToolTip text={user?.displayName}>
                        <p>
                           {user&&<img className='w-16 rounded-full' src={user.photoURL}></img>}
                    </p>
                    </ToolTip>
                    <p className='m-4'><input type="checkbox" value="dark" className="bg-white toggle theme-controller" /></p>
                    {user?<Link><button onClick={handleSignOut} className='btn text-primary bg-accent m-4'>LogOut</button></Link>:
                    <>
                     <Link to='/login'><button className='btn text-primary bg-accent m-4'>Login</button></Link>
                    <Link to='/register'><button className='btn bg-accent m-4'>Register</button></Link>
                    </>
                    }
                     
                   
                </div>
            </div>
        </div>
    );
};

export default Navbar;