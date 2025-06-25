import React, { Suspense, useContext, useEffect } from 'react';
import f1 from '../assets/Freelance1.PNG'
import f2 from '../assets/Freelance2.PNG'
import f3 from '../assets/freelance3.PNG'
import { useLoaderData } from 'react-router';
import Task from './Task';
import { AuthContext } from '../Component/Provider/AuthProvider';
import FeatureTask from '../Component/FeatureTask';
import Lottie from '../Component/Lottie';
import { FaCircle, FaSun } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";

import wall from '../assets/walling-XLqiL-rz4V8-unsplash.jpg'
import SortedCard from './SortedCard';
const Home = () => {

    const datas = useLoaderData()
    console.log(datas)
    return (
        <div>

            <section className=" ">
                <p className='bg-primary text-4xl mx-auto px-11 py-8  w-3/5  text-white'>Earn money Through <span className='text-highlight'>Zigwork</span></p>
                <div className="flex justify-center items-center">
                    <Lottie />
                </div>
            </section>

            <section className='w-11/12 mx-auto'>
                <div className="carousel ">
                    <div id="item1" className="carousel-item w-full h-[500px]">
                        <img
                            src={f1}
                            className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full h-[500px]">
                        <img
                            src={f2}
                            className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full h-[500px]">
                        <img
                            src={f3}
                            className="w-full" />
                    </div>

                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>

                </div>
            </section>
            <section className='w-11/12 max-w-6xl mx-auto my-16'>
              <div className='bg-highlight text-5xl text-primary text-center m-7 p-4 mx-auto'>Recent jobs</div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    {datas.map(data => (
                        <SortedCard data={data} key={data._id} />
                    ))}
                </div>
            </section>
            <section className='  md:flex lg:h-96 '>
                <div className='bg-black p-9 w-full  md:w-1/2' style={{ boxShadow: '30px 0 16px rgba(0, 0, 0, 0.6)' }}>
                    <p className='text-4xl text-white flex gap-5 font-bold'><FaSun className='text-yellow-600 text-4xl' /> WorkReap</p>
                    <div className='my-5 flex relative'>< SlBadge className='text-yellow-500  text-6xl' /> <p className='text-2xl text-white absolute left-4'>#1</p> <span className='text-white md:text-3xl text-xl'>
                        freelance market place and <br></br> directory wp thyme
                    </span></div>
                    <div className='flex gap-4'>
                        <div className='my-4 relative flex'><FaCircle className='text-8xl text-yellow-400' /><p className='absolute left-4 top-2 text-2xl text-pink-800'>20+<br></br>demos</p> </div>
                        <div className=' text-white bg-primary text-3xl p-4 rounded-2xl'>50+<br></br> premade<br></br> section</div>
                    </div>
                </div>
                <div className='md:w-1/2  '>
                    <img className='w-full h-full' src={wall} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Home;