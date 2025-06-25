import React from 'react';
import { Si1Panel } from 'react-icons/si';
import { Link, NavLink } from 'react-router';

const Task = ({ task }) => {
    const { _id, title, description, category, budget } = task
    return (

        <div className="bg-[#2c2c2c] text-white p-6 rounded-3xl shadow-lg m-4 border border-[#888888]">
            <h1 className="font-semibold text-2xl text-[#ffcc00]">{title}</h1>
            <p className="text-[#ffcc00] py-1">${budget} fixed price</p>

            <p className="my-3 text-sm text-[#ffffff]">{description}</p>

            <span className="bg-[#888888] text-black px-3 py-1 rounded-3xl text-xs inline-block">
                {category}
            </span>

           <NavLink to={`/tasks/${_id}`}> <button className="bg-[#ffcc00] text-black px-4 py-2 rounded-lg mt-4 block hover:opacity-90 transition">
                See More
            </button></NavLink>
        </div>
    );
};

export default Task;
