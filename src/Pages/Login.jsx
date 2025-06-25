import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Component/Provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {

    const { logIn,googleSignIn } = useContext(AuthContext)
      const navigate=useNavigate()
    const location=useLocation()
     const handleGoogleSignIn=()=>{
         googleSignIn()
     }
    const handleLogin = e => {
        e.preventDefault()
    const    form = e.target
        const email = form.email.value
        const password = form.password.value
        logIn(email, password).then((user) => {

            console.log(user)
            toast.success("login successful")
            navigate(`${location.state? location.state:'/'}`)
        }
        ).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage)
        });

    }

    return (
        <div>
            <div className='bg-primary p-8  mx-auto'>
                <div className='my-9  bg-[#2c2c2c] md:w-1/2 mx-auto p-3 rounded-2xl'>
                    <h1 className='w-full bg-black  text-2xl  mx-auto text-highlight  text-center p-2'>Login Now!</h1>

                    <form onSubmit={handleLogin} className='' action="
                   ">
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                            className="w-full my-4 px-4 py-2 bg-[#1f1f1f] text-white border-2 border-[#888888] rounded-lg focus:outline-none focus:border-[#ffcc00]"
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
                            className="w-full my-4 px-4 py-2 bg-[#1f1f1f] text-white border border-[#888888] rounded-lg focus:outline-none focus:border-[#ffcc00]"
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#ffcc00] text-black py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
                        >
                            Login
                        </button>
                        <p className='bg-highlight text-black p-2 my-4 rounded-2xl text-center '>
                            don't have an Account <span className='text-red-900'><Link to='/register'>Register</Link></span>
                        </p>
                    </form>
                    <p className='my-8 text-center text-white text-lg'>or</p>
                    <button onClick={handleGoogleSignIn} className="btn w-full bg-primary text-white border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;