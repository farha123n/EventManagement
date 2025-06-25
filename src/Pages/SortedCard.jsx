import React from 'react';

const SortedCard = ({data}) => {
     const { title, budget,  description, deadLine, category }=data
    return (
        <div className='bg-primary w-full rounded-4xl p-8'>
            <h1 className='text-white hover:text-yellow-600 text-4xl font-semibold my-6'>{title}</h1>
            <p className='text-gray-300 text-lg my-2'>{budget}</p>
            <p className='text-lg text-white'>Fixed Price</p>
            <p className='text-lg mx-3 my-8 text-gray-300'>{description}</p>
            <p className='text-highlight m-4'>Deadline {deadLine}</p>
            <span className='text-gray-800 bg-white px-4 py-2 rounded-2xl'>{category}</span>
            
        </div>
    );
};

export default SortedCard;