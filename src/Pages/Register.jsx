import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Navigate, useNavigate } from 'react-router';
import { AuthContext } from '../Component/Provider/AuthProvider';
import { toast } from 'react-toastify';
const Register = () => {
    const {createUser,user,setUser,updateUser,googleSignIn}=useContext(AuthContext)
    console.log(createUser)
    const [showPassword,setShowPassword]=useState('')
    
     const handleGoogleSignIn=()=>{
         googleSignIn()
     }
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault()
        const form=e.target
        const name=form.name.value
        const email=form.email.value
        const photoURL=form.photoURL.value
        const password=form.password.value
          const regex1 = /^(?=.*[A-Z])/;
        const regex2 = /^(?=.*[a-z])/;
        if(!regex1.test(password))
        {
            toast.error('must have an upper case letter')
            return
        }
        else if(!regex2.test(password)){
            toast.error('must have an lower case letter')
            return
        }
        else if(password.length<6){
            toast.error('password must be at least 6 charecter')
        }
        createUser(email,password).
        then(res=>{
          const  user=res.user
            updateUser({displayName:name,photoURL:photoURL}).then(()=>{
                setUser({...user,displayName:name,photoURL:photoURL})
                toast.success("welcome to the team")
            })
            navigate('/')
        }).catch(error=>{
            console.log(error)
            toast.error(error.message)
        })

    }
    


    return (
        <div className=''>
            <div className="min-h-screen flex items-center justify-center bg-[#1f1f1f] px-4 py-6 text-white">
                <div className="bg-[#2c2c2c] p-8 rounded-2xl w-full max-w-md shadow-xl">
                    <h2 className="text-3xl font-semibold text-[#ffcc00] mb-6 text-center">Join ZigWork</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            name="name"
                            type="text"
                            placeholder="Full Name"
                            required
                            className="w-full px-4 py-2 bg-[#1f1f1f] border border-[#888888] rounded-lg focus:outline-none focus:border-[#ffcc00]"
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                            className="w-full px-4 py-2 bg-[#1f1f1f] border border-[#888888] rounded-lg focus:outline-none focus:border-[#ffcc00]"
                        />
                        <input
                            name="photoURL"
                            type="url"
                            placeholder="Photo URL"
                            className="w-full px-4 py-2 bg-[#1f1f1f] border border-[#888888] rounded-lg focus:outline-none focus:border-[#ffcc00]"
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
                            className="w-full px-4 py-2 bg-[#1f1f1f] border border-[#888888] rounded-lg focus:outline-none focus:border-[#ffcc00]"
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#ffcc00] text-black py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
                        >
                            Create Account
                        </button>
                    </form>

                    <div className="my-4 text-center text-[#888888]">OR</div>

                    <button onClick={handleGoogleSignIn}

                        className="w-full flex items-center justify-center gap-2 border border-[#888888] py-2 rounded-lg hover:border-[#ffcc00] transition"
                    >
                        <FcGoogle size={20} />
                        <span>Continue with Google</span>
                    </button>

                    <p className="text-sm text-center text-[#888888] mt-6">
                        Already have an account?
                        <span
                            onClick={() => navigate('/login')}
                            className="text-[#ffcc00] hover:underline cursor-pointer ml-1"
                        >
                            Log in
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;