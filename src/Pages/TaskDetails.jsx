import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Component/Provider/AuthProvider';

const TaskDetails = () => {
    const taskDetails=useLoaderData()
        const {_id,title,description,category,budget,deadLine,name}=taskDetails
        console.log(typeof(_id),"gh")
     const {bitProvider,setBitProvider}=useContext(AuthContext)
    const [count,setCount]=useState(0)
    const handleCount=()=>{
      let  sum=count+1
        setCount(sum)
    }
     useEffect(() => {
  setBitProvider([...bitProvider, { bitId: _id.toString(), bitCount: count }]);
  }, [count, _id]);
   console.log(bitProvider)
    return (
        <div className='bg-primary lg:w-1/2 w-11/12 mx-auto p-5 my-10 rounded-2xl'>
            <p className='text-white'>bit count : {count}</p>
            <h1 className='text-5xl text-highlight font-semibold m-10'>{title}</h1>
            <p className='text-white '>{name}</p>
            <p className='text-highlight text-xl'>price {budget}</p>
            <p className='text-white'>Fixed price</p>
            <p className='text-white my-4'>{description}</p>
            <span className='bg-highlight text-primary px-2 py-1 text-lg rounded-4xl my-6'>{category}</span>
            <div  className='text-red-300 my-5'>
               dead line {deadLine}
            </div>
            <button onClick={handleCount} className='bg-highlight p-1'>click here to increase bit</button>

        </div>
    );
};

export default TaskDetails;