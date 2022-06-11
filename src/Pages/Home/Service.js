import React from 'react';

const Service = ({ service }) => {
    const { name, description } = service;
    return (
        <div className='bg-[#FFE59D] p-5 border-dashed border-2 border-indigo-600'>
            <h1 className='font-bold text-center text-2xl'>{name}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Service;