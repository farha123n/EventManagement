import React from 'react';
import { useLoaderData } from 'react-router';
import Task from '../Pages/Task';

const Browstask = () => {
    const tasks=useLoaderData()
    return (
        <div>
            <section>
                <h1 className='text-2xl text-center font-semibold p-3 bg-black text-white w-10/12 mx-auto'>Our jobs</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 '>
                    {tasks.map(task=><Task key={task._id} task={task}></Task>)}
                </div>
            </section> 
        </div>
    );
};

export default Browstask;